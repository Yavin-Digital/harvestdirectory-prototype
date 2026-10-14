(function(){
var S=window.SITE, $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var esc=function(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var EX='<span class="ex">Example</span>';
var TODAY=new Date(); // prototype uses the real date
// ---- favorites ----
var KEY='harvest.myharvest.v1';
function store(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
function isSaved(t,id){var s=store();return (s[t]||[]).indexOf(id)>-1}
function toggle(t,id){var s=store();s[t]=s[t]||[];var i=s[t].indexOf(id);if(i>-1)s[t].splice(i,1);else s[t].push(id);localStorage.setItem(KEY,JSON.stringify(s));return i===-1}
function toast(m){var t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=m;document.body.appendChild(t);setTimeout(function(){t.remove()},2200)}
document.addEventListener('click',function(e){var b=e.target.closest('[data-save]');if(!b)return;var on=toggle(b.dataset.type,b.dataset.save);b.setAttribute('aria-pressed',on);b.textContent=on?'Saved':'Save';toast(on?'Saved to My Harvest':'Removed from My Harvest');if(window.renderMy)renderMy();});
function saveBtn(t,id,label){var on=isSaved(t,id);return '<button class="save" data-save="'+id+'" data-type="'+t+'" aria-pressed="'+on+'" aria-label="Save '+esc(label)+' to My Harvest">'+(on?'Saved':'Save')+'</button>'}
// ---- badges / ctas ----
var BADGE={resident:['res','Harvest Resident Owned'],recommended:['','Recommended by Harvest Residents'],serves:['','Serves Harvest'],verified:['tip','Verified']};
function badges(b){return '<div class="badges">'+(b.badges||[]).map(function(k){var d=BADGE[k];return '<span class="badge '+d[0]+'"'+(k==='verified'?' title="Verified: identity, contact details and that the business serves Harvest have been confirmed." tabindex="0"':'')+'>'+d[1]+'</span>'}).join('')+'</div>'}
function cta(b){return S.ctas[b.sub]||'Contact'}
function catName(id){var c=S.categories.filter(function(c){return c.id===id})[0];return c?c.name:''}
function bizCard(b){var ex=b.source==='example';
 var img=b.logo?'<img class="logo" src="'+b.logo+'" alt="'+esc(b.name)+' logo" width="64" height="64" loading="lazy">':'<div class="ph" aria-hidden="true">'+esc(b.name.replace('Example ','').charAt(0))+'</div>';
 var href=ex?'#':'business.html?id='+b.id;
 return '<article class="card"><div class="top">'+img+'<div><h3>'+esc(b.name)+'</h3><div class="sub">'+esc(catName(b.cat))+' / '+esc(b.sub)+'</div></div></div>'+(ex?'<div>'+EX+'</div>':'')+
 '<p>'+esc(b.tagline)+'</p>'+badges(b)+(b.ownerNote?'<p class="recs">'+esc(b.ownerNote)+'</p>':'')+
 (b.recs?'<p class="recs">Recommended by '+b.recs+' Harvest neighbors'+((ex||b.recsExample)?' '+EX:'')+'</p>':'')+
 '<div class="actions"><a class="btn btn-dark" href="'+href+'"'+(ex?' onclick="return false" aria-disabled="true"':'')+'>'+esc(cta(b))+'</a>'+saveBtn('biz',b.id,b.name)+'</div></article>'}
function daysLeft(d){return Math.ceil((new Date(d+'T23:59:59')-TODAY)/864e5)}
function fmt(d){return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'})}
function offerCard(o){var b=S.businesses.filter(function(x){return x.id===o.biz})[0]||{},n=daysLeft(o.expires);
 var urg=n<=0?'Expires today':n<=3?'Only '+n+' day'+(n>1?'s':'')+' left':'Expires '+fmt(o.expires);
 return '<article class="card offer"><span class="kind">'+esc(o.kind)+'</span><h3>'+esc(o.title)+'</h3><p class="sub">'+esc(b.name||'')+'</p>'+
 '<p class="exp">'+urg+((o.source==='example'||o.expiresExample)?' '+EX:'')+'</p>'+(o.source==='live'&&o.expiresExample?'<p class="note">Offer is real (live site). The expiry date is an example; the live listing has none.</p>':'')+
 '<div class="actions">'+(o.source==='live'?'<a class="btn btn-dark" href="business.html?id='+o.biz+'">Claim offer</a>':'')+saveBtn('offer',o.id,o.title)+'</div></article>'}
function activeOffers(){return S.offers.filter(function(o){return daysLeft(o.expires)>=0}).sort(function(a,b){return a.expires<b.expires?-1:1})}
// ---- unified search ----
function index(){var out=[];
 S.businesses.forEach(function(b){out.push({t:'Business',title:b.name,sub:b.tagline,href:b.source==='live'?'business.html?id='+b.id:'members.html?cat='+b.cat,txt:[b.name,b.sub,catName(b.cat),b.tagline].join(' '),ex:b.source==='example'})});
 S.resources.forEach(function(r){out.push({t:'Resource',title:r.group+': '+r.name,sub:r.detail+(r.phone?' '+r.phone:''),href:'new-resident.html#'+r.id,txt:[r.group,r.name,r.detail].join(' ')+(r.group==='Trash'?' garbage bulk recycling pickup':'')+(r.group==='Police'?' sheriff':'')})});
 S.events.forEach(function(e){out.push({t:'Event',title:e.title,sub:e.when,href:'index.html#now',txt:e.title+' events this weekend '+e.type,ex:e.source==='example'})});
 S.offers.forEach(function(o){out.push({t:'Deal',title:o.title,sub:o.kind,href:'offers.html',txt:o.title+' deal offer special '+o.kind,ex:o.source==='example'})});
 S.categories.forEach(function(c){out.push({t:'Category',title:c.name,sub:c.subs.join(', '),href:'members.html?cat='+c.id,txt:c.name+' '+c.subs.join(' ')})});
 return out}
var IDX=index();
function search(q){q=q.trim().toLowerCase();if(!q)return [];var w=q.split(/\s+/);
 var syn={ac:'hvac',air:'hvac',school:'schools',trash:'trash',pizza:'pizza',soccer:'soccer',plumber:'plumbing',plumbers:'plumbing',plumb:'plumbing',electrician:'electrical',electricians:'electrical',electric:'electrical',cleaner:'cleaning',cleaners:'cleaning',maid:'cleaning',landscaper:'landscaping',landscapers:'landscaping',lawn:'landscaping',yard:'landscaping',pool:'pool',pools:'pool',tutor:'tutoring',tutors:'tutoring',pet:'pet',pets:'pet',roofer:'roofing',roofers:'roofing',exterminator:'pest'};
 return IDX.map(function(i){var t=i.txt.toLowerCase(),s=0;w.forEach(function(x){x=syn[x]||x;if(t.indexOf(x)>-1)s+=1;if(t.indexOf(x.replace(/s$/,''))>-1)s+=.5});return [s,i]}).filter(function(a){return a[0]>0}).sort(function(a,b){return b[0]-a[0]}).slice(0,10).map(function(a){return a[1]})}
function wireSearch(){var f=$('#sform');if(!f)return;var inp=$('#q'),box=$('#results');
 function run(){var r=search(inp.value);box.hidden=!inp.value.trim();
  box.innerHTML=r.length?r.map(function(i){return '<a class="res" href="'+i.href+'"><span class="t">'+i.t+'</span><span><b>'+esc(i.title)+(i.ex?' '+EX:'')+'</b>'+esc(i.sub)+'</span></a>'}).join(''):'<p class="res">No match in Harvest yet. <a href="#need">Tell us what Harvest needs</a></p>'}
 f.addEventListener('submit',function(e){e.preventDefault();run()});var pq=new URLSearchParams(location.search).get('q');if(pq){inp.value=pq;run()}inp.addEventListener('input',run);
 $$('.chip').forEach(function(c){c.addEventListener('click',function(){inp.value=c.dataset.q;run();inp.focus()})})}
// ---- right now ----
function renderNow(){var el=$('#now');if(!el)return;var day=TODAY.getDay(),iso=[TODAY.getFullYear(),('0'+(TODAY.getMonth()+1)).slice(-2),('0'+TODAY.getDate()).slice(-2)].join('-');
 var today=S.events.filter(function(e){return e.date===iso||(e.recurring==='wed'&&day===3)});
 var up=S.events.filter(function(e){return e.date&&e.date>iso}).sort(function(a,b){return a.date<b.date?-1:1}).slice(0,4);
 var dont=S.events.filter(function(e){return e.type==="Don't Forget"&&!(e.recurring==='wed'&&day===3)});
 if(!today.length&&!up.length&&!dont.length){el.closest('section').hidden=true;return}
 var li=function(e){return '<li><b>'+esc(e.title)+(e.source==='example'?' '+EX:'')+'</b><span class="when">'+esc(e.when)+'</span>'+(e.note&&/[?&]review=1/.test(location.search)?'<br><span class="note">'+esc(e.note)+'</span>':'')+'</li>'};
 var col=function(h,a){return a.length?'<div><h3>'+h+'</h3><ul>'+a.map(li).join('')+'</ul></div>':''};
 $('#nowdate').textContent=TODAY.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
 el.innerHTML=col('Today',today)+col('Coming Up',up)+col("Don't Forget",dont)}
// ---- who serves my street ----
// Each directory sets its own sides and values in admin (S.sides). No address field: pick a side, see the list instantly.
function renderSide(out,id){var o=S.sides.options.filter(function(x){return x.id===id})[0];if(!o){out.innerHTML='';return}
 out.innerHTML='<h3>Who serves '+esc(o.label)+'</h3><dl>'+o.rows.map(function(r){var v=esc(r[1]);if(r[3])v='<a href="'+r[3]+'" rel="noopener">'+v+'</a>';if(r[2])v+=' <a href="tel:'+r[2].replace(/\D/g,'')+'">'+r[2]+'</a>';return '<dt>'+esc(r[0])+'</dt><dd>'+v+'</dd>'}).join('')+'</dl>'}
// Options come from S.sides.options, set per directory in admin. No options -> only a "See all" button to the full guide.
function wireLookup(){$$('.sidepick').forEach(function(f){var opts=(S.sides&&S.sides.options)||[];
 if(!opts.length){f.innerHTML='<a class="btn btn-gold" href="new-resident.html#res">See all</a>';return}
 f.innerHTML='<fieldset class="seg" style="border:0;padding:0"><legend style="font-weight:600;margin-bottom:8px">'+esc(S.sides.prompt||'Which side do you live on?')+'</legend>'+opts.map(function(o){return '<label><input type="radio" name="side" value="'+esc(o.id)+'">'+esc(o.label)+'</label>'}).join('')+'</fieldset><div class="answer" aria-live="polite"></div>';
 var out=f.querySelector('.answer');if(!$('#lookup-out'))out.id='lookup-out';
 f.addEventListener('change',function(e){if(e.target.name==='side')renderSide(out,e.target.value)});
 f.addEventListener('submit',function(e){e.preventDefault()})})}
// ---- guide chapters (data in S.guide, editable per directory) ----
function renderGuide(){var el=$('#chapters');if(!el)return;
 el.innerHTML=S.guide.map(function(c){return '<article class="chapter" id="ch-'+c.id+'"><h3>'+esc(c.title)+'</h3><ul>'+c.items.map(function(i){return '<li>'+(i.html?i.t:esc(i.t))+(i.ex?' '+EX:'')+(i.src?' <a class="srcl" href="'+i.src+'" rel="noopener">Source</a>':'')+'</li>'}).join('')+'</ul></article>'}).join('')}
// ---- recommendations: pending until an admin approves (prototype stores pending on this device) ----
function wireRecs(){var f=$('#recform');if(!f)return;var key='harvest.recs.pending.v1',id=f.dataset.biz;
 function load(){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return []}}
 function draw(){var l=load().filter(function(r){return r.biz===id});$('#pending').innerHTML=l.length?'<h4>Your submissions</h4><ul>'+l.map(function(r){return '<li><b>'+esc(r.name)+'</b>: '+(r.rec==='yes'?'Recommends':'Does not recommend')+(r.help?', '+esc(r.help):'')+' <span class="badge pend">Pending admin approval</span></li>'}).join('')+'</ul>':''}
 f.addEventListener('submit',function(e){e.preventDefault();if(!f.checkValidity())return;var r=(f.querySelector('input[name=rec]:checked')||{}).value;var m=f.querySelector('.formmsg');
  if(!r){m.textContent='Choose Yes or No.';return}
  var l=load();l.push({biz:id,name:$('#recname').value.trim(),rec:r,help:$('#help').value.trim(),at:Date.now()});localStorage.setItem(key,JSON.stringify(l));
  m.textContent='Thanks. Your recommendation is pending admin approval and will count once approved.';f.reset();draw()});draw()}
// ---- ask harvest (simulated) ----
var ANS=[[/bulk|trash|garbage|recycl|brush/,'Trash, recycling, brush and bulk are all picked up every Wednesday by Republic Services. Have carts out by 7am. Questions: 817-953-7214.'],
 [/\bac\b|hvac|air|heat|cool/,'Harvest neighbors recommend <b>Example HVAC Co.</b> '+EX+' (12 recommendations). Tap Request Service on their listing. Real HVAC listings will show here once they join.'],
 [/water|bill/,'West of Harvest Way (District 1): Town of Northlake Utility Billing, 940-648-3290. East (District 2): Argyle Water Supply Corp, 940-464-7713.'],
 [/hoa|pool|amenit/,'The Harvest HOA is managed by FirstService Residential: (817) 717-7780, after hours 877-378-2388, harvest@fsresidential.com.'],
 [/police|sheriff/,'West of Harvest Way: Northlake PD, non-emergency 940-349-1600 ext 9. East: Denton County Sheriff. Emergencies: call 911.'],
 [/vote|elect|precinct/,'Find your precinct and polling places at votedenton.gov. Register or check status at votetexas.gov.'],
 [/school|isd/,'Harvest is served by Northwest ISD. Check your campus with the district.'],
 [/web|website|market/,'The Tribe Maker builds websites and marketing for local businesses, and the owner lives right here in Harvest. (817) 812-8946.']];
function wireAsk(){var f=$('#ask');if(!f)return;var o=$('#ask-out');
 function go(q){var a=ANS.filter(function(x){return x[0].test(q.toLowerCase())})[0];o.innerHTML=a?a[1]:'I do not have that yet. Try the search above, or <a href="#need">tell us what Harvest needs</a>.'}
 f.addEventListener('submit',function(e){e.preventDefault();go($('#askq').value)});
 $$('.ask-q button').forEach(function(b){b.addEventListener('click',function(){$('#askq').value=b.textContent;go(b.textContent)})})}
// ---- need form ----
function wireNeed(){$$('form[data-proto]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.formmsg');m.textContent='Thanks. This is a prototype, so nothing was sent.';f.reset()})})}
window.H={S:S,$:$,$$:$$,esc:esc,EX:EX,bizCard:bizCard,offerCard:offerCard,activeOffers:activeOffers,catName:catName,badges:badges,cta:cta,saveBtn:saveBtn,store:store,wireRecs:wireRecs};
wireSearch();renderNow();wireLookup();renderGuide();wireRecs();wireAsk();wireNeed();
})();

// F5 Medium: filter click rebuilds buttons -> focus lost to <body>  members.html:16 ; F9 Low same on my-harvest remove (my-harvest.html:12)
document.addEventListener('click',function(e){var b=e.target.closest('#filters button,#my .save');if(!b)return;var c=b.dataset.c,s=b.dataset.save;setTimeout(function(){var n=c?document.querySelector('#filters button[data-c="'+c+'"]'):document.querySelector('#my .save[data-save="'+s+'"]')||document.querySelector('#my h2,#my p');if(n){if(!n.matches('button'))n.tabIndex=-1;n.focus({preventScroll:true})}},0)},true);
// F6 Medium: request form uses native bubbles only; add inline errors  index.html:48, members.html:11
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('form[data-proto]').forEach(function(f){f.noValidate=true;f.addEventListener('submit',function(e){var bad=null;f.querySelectorAll('input').forEach(function(i){var id=i.id+'-err',m=document.getElementById(id);if(m)m.remove();i.removeAttribute('aria-invalid');if(!i.checkValidity()){bad=bad||i;i.setAttribute('aria-invalid','true');m=document.createElement('p');m.id=id;m.className='field-err';m.style.cssText='color:#8b2a0e;font-size:1rem;margin:6px 0 12px;font-weight:600';m.textContent=i.type==='email'?'Enter an email like name@example.com.':'Tell us what kind of business.';i.setAttribute('aria-describedby',id);i.after(m)}});if(bad){e.preventDefault();e.stopImmediatePropagation();bad.focus()}},true)})});

// Gate R3: 'Other' (and any #need link) focuses the lead form input
document.querySelectorAll('a[href="#need"]').forEach(function(a){a.addEventListener('click',function(){setTimeout(function(){var i=document.querySelector('#need input');if(i)i.focus({preventScroll:true})},50)})});
