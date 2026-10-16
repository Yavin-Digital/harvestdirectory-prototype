#!/usr/bin/env node
// Directory template build. No dependencies.
//   node build.mjs <slug> [--out <dir>]     -> renders template/ + directories/<slug>/ into dist/<slug>/ (or --out)
//   node build.mjs --all                    -> every directory except _blank
import fs from 'node:fs'; import path from 'node:path'; import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ROOT = path.dirname(new URL(import.meta.url).pathname);
const args = process.argv.slice(2);
const GROUPS = { emergency:'Emergency', trash:'Trash', water:'Water', sewer:'Sewer', police:'Police', fire:'Fire / EMS', hoa:'HOA', specialDistrict:'Special district', town:'Town', county:'County', isd:'Schools', elections:'Voting', representatives:'Representatives', utilities:'Utilities' };
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));


// WCAG contrast
const lum = hex => { const h = hex.replace('#',''); const v = [0,2,4].map(i => parseInt(h.length===3 ? h[i/2]+h[i/2] : h.slice(i,i+2),16)/255).map(c => c<=.03928 ? c/12.92 : ((c+.055)/1.055)**2.4); return .2126*v[0]+.7152*v[1]+.0722*v[2]; };
const ratio = (a,b) => { const [x,y] = [lum(a),lum(b)].sort((p,q)=>q-p); return (x+.05)/(y+.05); };
const FONT_DEFAULT = { display: { family: 'Fraunces', file: 'fraunces-600', weight: 600, range: '600', fallback: 'Georgia,serif' }, text: [{ family: 'Inter', file: 'inter', range: '400 700', fallback: 'system-ui,sans-serif' }] };
function load(slug){
  const f = path.join(ROOT,'directories',slug,'config.js');
  delete require.cache[f];
  const c = require(f);
  const req = ['slug','name','community','baseUrl'];
  for (const k of req) if (!c[k]) throw new Error(`${slug}: config.${k} is required`);
  // Community profile -> resources (only entries that were actually entered render; empty profile = resident sections hidden)
  if (!c.resources) {
    c.resources = [];
    for (const [k, list] of Object.entries(c.profile || {})) {
      if (!Array.isArray(list)) continue;
      list.forEach((e, i) => { if (!e || !e.name) return;
        c.resources.push({ id: e.id || (k + (list.length > 1 ? '-' + (i+1) : '')), group: e.group || GROUPS[k] || k, sideLabel: e.side || '', name: e.name, detail: e.detail || '', phone: e.phone || '', email: e.email || '', web: e.web || '', src: e.src || '', verified: e.verified || '', source: 'verified' }); });
    }
  }
  return c;
}
function build(slug, out){
  const c = load(slug);
  out = out || path.join(ROOT,'dist',slug);
  fs.mkdirSync(path.join(out,'css'),{recursive:true}); fs.mkdirSync(path.join(out,'js'),{recursive:true}); fs.mkdirSync(path.join(out,'assets'),{recursive:true});
  const b = c.brand || {}, col = Object.assign({ ink:'#14201a', slate:'#22312a', paper:'#f6f2ea', gold:'#e0a63a', goldD:'#8a5a10', kickerOnPhoto:'#f8dc9c' }, b.colors || {});
  const h = b.hero || {};
  const grad = col.paper; // R2: no-photo hero is flat paper (no gradient, no overlay)
  const heroD = h.desktop ? `#1a2620 url(../${h.desktop}) center/cover no-repeat` : `${grad}`;
  const pheroD = h.desktop ? `var(--ink) url(../${h.desktop}) center 30%/cover` : `${grad}`;
  const heroM = h.mobile ? `@media (max-width:768px){.hero,.phero{background-image:url(../${h.mobile})}}` : '';
  const preload = (h.mobile ? `<link rel="preload" as="image" href="${h.mobile}" media="(max-width:768px)" fetchpriority="high">` : '') + (h.desktop ? `<link rel="preload" as="image" href="${h.desktop}" media="(min-width:769px)" fetchpriority="high">` : '');
  // contrast gate: accent text on paper, accent fill behind ink text, ink on paper
  for (const [n,x,y] of [['goldD on paper',col.goldD,col.paper],['gold behind ink',col.gold,col.ink],['ink on paper',col.ink,col.paper],['white on slate','#ffffff',col.slate],['gold kicker on slate',col.gold,col.slate],['goldD on white','#ffffff',col.goldD]]) { const r = ratio(x,y); if (r < 4.5) throw new Error(`${slug}: ${n} is ${r.toFixed(2)}:1 (< 4.5:1)`); }
  const L = c.layout || {}, ty = Object.assign({}, FONT_DEFAULT, c.type || {});
  const faces = [ty.display].concat(ty.text);
  const fontCss = faces.map(f => `@font-face{font-family:"${f.family}";src:url(../fonts/${f.file}.woff2) format("woff2");font-weight:${f.range};font-style:normal;font-display:swap}`).join('\n');
  fs.mkdirSync(path.join(out,'fonts'),{recursive:true});
  for (const f of faces) fs.copyFileSync(path.join(ROOT,'template','fonts',f.file+'.woff2'), path.join(out,'fonts',f.file+'.woff2'));
  const comp = c.heroComposition || (h.desktop ? 'photo' : 'name-mark');
  const caption = esc([c.brand && c.brand.coords, c.area].filter(Boolean).join(' · '));
  let heroMark = '';
  if (comp === 'name-mark') heroMark = `<div class="mark" aria-hidden="true">${c.community.split(/\s+/).map(w=>`<span data-w="${esc(w)}"></span>`).join("")}</div>` + (caption ? `<p class="plate">${caption}</p>` : '');
  if (comp === 'map-plate') heroMark = `<div class="mark map" aria-hidden="true"><img src="${esc(b.plate)}" alt="" width="1000" height="688"></div><p class="plate">${caption}<small>Streets: &copy; OpenStreetMap contributors</small></p>`;
  // favicon: real file, else an SVG generated from the monogram + accent
  let fav = b.favicon || b.logo;
  if (!fav) { fav = 'assets/favicon.svg'; fs.writeFileSync(path.join(out,'assets','favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="${parseInt(L.radius||'2')*2}" fill="${col.gold}"/><text x="32" y="45" text-anchor="middle" font-family="${ty.display.fallback || 'Georgia,serif'}" font-size="38" font-weight="700" fill="${col.ink}">${esc((b.monogram||c.community[0]).slice(0,1))}</text></svg>`); }
  if (b.motif) fs.writeFileSync(path.join(out,'assets','motif.svg'), b.motif.replace(/currentColor/g, col.goldD));
  const ogImg = h.og || h.desktop || b.logo;
  const T = {
    name: esc(c.name), nameUrl: encodeURIComponent(c.name), community: esc(c.community), area: esc(c.area || c.community),
    heroKicker: esc(c.heroKicker || c.area || c.community), sidesLead: esc(c.sidesLead || ''), guideVerifiedNote: esc(c.guideVerifiedNote || 'Each note links to its source.'),
    baseUrl: c.baseUrl.replace(/\/$/,''), joinUrl: esc(c.joinUrl || 'join.html'), favicon: esc(fav),
    ogTag: ogImg ? `<meta property="og:image" content="${c.baseUrl.replace(/\/$/,'')}/${ogImg}">` : '', heroPreload: preload,
    radius: L.radius || '2px', ruleWeight: L.ruleWeight || '1px', fontDisplay: `"${ty.display.family}",${ty.display.fallback||'serif'}`, fontText: `"${ty.text[0].family}",${ty.text[0].fallback||'sans-serif'}`, fontDisplayWeight: String(ty.display.weight||600),
    fontPreload: faces.slice(0,2).map(f=>`<link rel="preload" href="fonts/${f.file}.woff2" as="font" type="font/woff2" crossorigin>`).join(''),
    heroHeadline: esc(c.heroHeadline || `Need something in ${c.community}? Start here.`), tagline: esc(c.tagline || `Built for ${c.community}. Not the whole internet.`), heroMark,
    price: String(c.join.price), extraPrice: String(c.join.extraNeighborhood),
    legal_privacy: esc((c.legal||{}).privacy || '#'), legal_terms: esc((c.legal||{}).terms || '#'),
    c_ink: col.ink, c_slate: col.slate, c_paper: col.paper, c_gold: col.gold, c_goldD: col.goldD, c_kickerOnPhoto: col.kickerOnPhoto,
    heroBgDesktop: heroD, pheroBgDesktop: pheroD, heroMobileCss: heroM,
  };
  const fill = (s, file) => s.replace(/\{\{(\w+)\}\}/g, (m, k) => { if (!(k in T)) throw new Error(`${file}: unknown token ${m}`); return T[k]; });
  const tdir = path.join(ROOT,'template');
  for (const f of fs.readdirSync(tdir)) if (f.endsWith('.html')) fs.writeFileSync(path.join(out,f), fill(fs.readFileSync(path.join(tdir,f),'utf8'), f).replace('<body ', `<body class="${comp==='photo'?'has-photo':'nophoto'} acc-${c.accentRole||'none'} type-${slug}" `));
  fs.writeFileSync(path.join(out,'css','site.css'), fontCss + '\n' + fill(fs.readFileSync(path.join(tdir,'css','site.css'),'utf8'),'site.css'));
  for (const f of ['app.js','layout.js']) fs.copyFileSync(path.join(tdir,'js',f), path.join(out,'js',f));
  const site = Object.assign({}, c); delete site.profile;
  fs.writeFileSync(path.join(out,'js','site.js'), `/* GENERATED by build.mjs from directories/${slug}/config.js. Do not edit; edit the config. */\nwindow.SITE = ${JSON.stringify(site, null, 1)};\n`);
  const adir = path.join(ROOT,'directories',slug,'assets');
  if (fs.existsSync(adir)) for (const f of fs.readdirSync(adir)) { const dst = path.join(out,'assets',f); if (path.resolve(path.join(adir,f)) !== path.resolve(dst)) fs.copyFileSync(path.join(adir,f), dst); }
  fs.writeFileSync(path.join(out,'robots.txt'), 'User-agent: *\nDisallow: /\n');
  console.log(`built ${slug} -> ${path.relative(ROOT,out) || '.'} (${c.resources.length} resident contacts, ${c.businesses.filter(x=>x.source==='live').length} live businesses)`);
}
if (args[0] === '--all') { for (const d of fs.readdirSync(path.join(ROOT,'directories'))) if (!d.startsWith('_')) build(d); }
else if (args[0]) { const o = args.indexOf('--out'); build(args[0], o > -1 ? path.resolve(args[o+1]) : null); }
else { console.error('usage: node build.mjs <slug> [--out dir] | --all'); process.exit(1); }
