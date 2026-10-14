(function(){
  var page = document.body.getAttribute('data-page');
  var links = [["index.html","Home","home"],["members.html","Local Businesses","members"],["new-resident.html","New Resident Guide","guide"],["offers.html","Deals","offers"],["community.html","Community","community"],["my-harvest.html","My Harvest","my"]];
  var nav = links.map(function(l){return '<a href="'+l[0]+'"'+(l[2]===page?' aria-current="page"':'')+'>'+l[1]+'</a>';}).join('');
  var solid = page !== 'home' ? '' : '';
  document.getElementById('hdr').outerHTML =
   '<a class="skip" href="#main">Skip to content</a>'+
   '<header class="hdr"><div class="wrap hdr-in"><a class="brand" href="index.html"><img src="assets/favicon.png" alt="" width="36" height="36">Harvest Directory</a>'+
   '<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>'+
   '<nav class="nav" id="nav" aria-label="Main">'+nav+'<a class="btn btn-gold" href="join.html">Get Listed</a></nav></div></header>';
  document.getElementById('ftr').outerHTML =
   '<footer class="ftr"><div class="wrap"><div class="cols"><div><p class="brand" style="margin:0">Harvest Directory</p><p>Built for Harvest. Not the whole internet. Harvest Directory searches Harvest.</p><p class="note" style="color:#c9c3b6">Prototype for review. Items marked Example are simulated.</p></div>'+
   '<div><b>Residents</b><ul><li><a href="new-resident.html">New Resident Guide</a></li><li><a href="offers.html">Deals Near Me</a></li><li><a href="community.html">Community</a></li><li><a href="my-harvest.html">My Harvest</a></li></ul></div>'+
   '<div><b>Businesses</b><ul><li><a href="members.html">Local Businesses</a></li><li><a href="join.html">Get Listed, $29/mo</a></li><li><a href="business.html?id=tribe-maker">Sample profile</a></li></ul></div>'+
   '<div><b>Emergency</b><ul><li><a href="tel:911">Call 911</a></li><li><a href="tel:9404647102">Fire / EMS 940-464-7102</a></li></ul></div></div>'+
   '<p class="fine">Powered by Doorstep Local, a Tribe Maker property. Argyle and Northlake, Texas.</p></div></footer>';
  var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'Close':'Menu';});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.textContent='Menu';b.focus();}});
})();
