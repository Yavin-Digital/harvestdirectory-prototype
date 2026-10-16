/* BLANK DIRECTORY CONFIG. Copy this folder to directories/<slug>/ and fill it in.
   RULES
   - Never invent data. Leave a field empty ([] or '') when you can't verify it. Empty sections hide themselves.
   - Resident info (profile, sides, guide) only renders once that directory's data is entered.
   - No HOA board roster. List the association / management company and its official contact only.
   - Every profile entry needs src (the page you checked) and verified (YYYY-MM-DD).
   - Images: real files only, at least 1.5x the size they display at, never upscaled. Desktop hero >= 1920px wide, mobile hero >= 1280px wide.
   - source on businesses/offers/events/groups: "live" (copied from the live directory), "verified" (checked against src), "example" (simulated; always tagged Example, never shipped). */
const P = require('../_shared.js');
module.exports = {
  slug: '',                 // folder name and localStorage prefix, e.g. 'pecan-square'
  name: '',                 // site name, e.g. 'Pecan Square Directory'
  community: '',            // neighborhood name used in copy, e.g. 'Pecan Square'
  area: '',                 // town/state line, e.g. 'Northlake, TX'
  heroKicker: '',           // small line above the home headline, e.g. 'Pecan Square, Northlake, TX'
  baseUrl: '',              // preview URL, e.g. 'https://pecansquaredirectory-preview.clientreview.co'
  liveUrl: '',              // live directory URL (reference only)
  joinUrl: '',              // live join page the "Get Listed" button opens
  links: P.links,           // { signIn, dashboard }
  legal: { privacy: '', terms: '' },   // live legal pages (the prototype links out, it never copies legal text)
  brand: {
    logo: null,             // 'assets/logo.png' (square, >= 72px for the 36px header slot). null = monogram
    favicon: null,          // 'assets/favicon.png'
    monogram: '',           // one letter shown when there is no logo
    colors: { ink: '#14201a', slate: '#22312a', paper: '#f6f2ea', gold: '#e0a63a', goldD: '#8a5a10', kickerOnPhoto: '#f8dc9c' },
    //  ink = dark bands/header, slate = second dark band, paper = page, gold = accent buttons (dark text on it: keep >= 4.5:1 with ink),
    //  goldD = accent text on paper (>= 4.5:1), kickerOnPhoto = small caps line on the hero photo.
    hero: null              // { desktop:'assets/hero.webp', mobile:'assets/hero-1280.webp', og:'assets/hero.jpg', credit:'' } or null = brand gradient
  },
  join: P.join,             // price, extraNeighborhood, promo, features, faq
  heroChips: P.heroChips,   // quick-search chips under the home search: [label, query]
  quickLinks: [],           // [label, url] official links (HOA site, trash, register to vote, town, county, ISD) and on-site links
  emergency: [],            // footer phone lines besides 911: [label, phone]
  // COMMUNITY PROFILE. Each key is a list of { id, name, detail, phone, email, web, src, verified, side }.
  // side = which part of the neighborhood it applies to (must match a sides option label); omit when it covers everyone.
  profile: {
    hoa: [], town: [], county: [], isd: [], trash: [], water: [], sewer: [], police: [], fire: [],
    elections: [], representatives: [], specialDistrict: [], utilities: [],
    etjNotes: ''            // plain-language note on ETJ / split-jurisdiction quirks, with the source in the matching entries
  },
  sidesLead: '',            // one line explaining the split, e.g. 'Harvest is split at Harvest Way...'
  sides: { prompt: '', options: [] },   // "Who serves my street": options [{ id, label, rows:[[label, value, phone?, url?]] }]. Empty = only a See all link
  guideVerifiedNote: '',
  guide: [],                // New Resident Guide chapters: [{ id, title, items:[{ t, src, verified, ex? }] }]
  categories: P.categories, ctas: P.ctas,
  businesses: [],           // { id, source, name, cat, sub, tagline, phone, email, web, city, logo, cover, badges[], views }
  pitch: {},                // { biz: '<business id>', note: '' } business shown in the "So can your business" card. Empty = Placeholder card
  featured: [],             // Business of the Month: [{ biz: '<business id>', month: 'YYYY-MM' }]
  offers: [],               // { id, source, biz, title, kind, expires: 'YYYY-MM-DD' }
  events: [],               // { source, title, when, date?: 'YYYY-MM-DD', recurring?: 'mon'..'sun', type: 'Today'|'Coming Up'|"Don't Forget" }
  announcements: [],        // { source, date, title, body }
  groups: [],               // { source, name, kind, note?, web? }
  sponsors: [],             // { name, web, logo }
  ask: []                   // Ask box answers: [regex source, answer html]. Empty = Ask section hidden
};
