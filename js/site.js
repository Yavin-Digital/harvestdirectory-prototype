/* Harvest Directory prototype — all data lives here.
   source: "live" = copied from harvestdirectory.com (2026-10-13)
           "verified" = verified resident facts set (2026-10-09)
           "example" = simulated, always labeled "Example" in the UI */
window.SITE = {
  name: "Harvest Directory",
  community: "Harvest",
  area: "Argyle & Northlake, Texas",
  taglines: ["Built for Harvest. Not the whole internet.", "Everything Harvest. One place.", "Need something in Harvest? Start here.", "Harvest lives here."],
  join: { price: 29, extraNeighborhood: 25, promo: "First 20 businesses in each neighborhood get 90 days free (promo code at checkout).",
    features: [
      ["Neighborhood search", "Show up when Harvest residents search for what you do."],
      ["Full business profile", "Rich text about your business, contact and social links."],
      ["Clean categories", "Listed in the right parent category and subcategory, never a duplicate."],
      ["Quote request inbox", "Residents contact you directly from your page."],
      ["Harvest-only offers", "Post neighbor specials and new resident offers with an expiry date."],
      ["Events", "Put your events on the Harvest Right Now calendar."],
      ["Photos and video", "Photo gallery up to 10 images plus a YouTube or Vimeo embed."],
      ["Profile view analytics", "See how many neighbors found you."],
      ["Resident recommendations", "Neighbors can recommend you and say what you helped with."],
      ["Featured eligibility", "Eligible for Business of the Month and the Premier Partner badge."]
    ] },
  categories: [
    { id: "home", name: "Home Services", subs: ["Plumbing","HVAC","Electrical","Handyman","Roofing","Landscaping","Cleaning","Pest Control","Pool"] },
    { id: "food", name: "Food & Drink", subs: ["Restaurants","Coffee","Food Trucks","Catering"] },
    { id: "health", name: "Health & Wellness", subs: ["Primary Care","Pediatrics","Dental","Urgent Care"] },
    { id: "beauty", name: "Beauty & Personal Care", subs: ["Salon","Barber","Spa"] },
    { id: "realestate", name: "Real Estate", subs: ["Agents","Property Management"] },
    { id: "finance", name: "Financial & Insurance", subs: ["Insurance","Tax","Planning"] },
    { id: "pro", name: "Professional Services", subs: ["Web & Marketing","Legal","Technology"] },
    { id: "auto", name: "Automotive", subs: ["Repair","Detailing"] },
    { id: "kids", name: "Kids & Education", subs: ["Tutoring","Daycare","Lessons"] },
    { id: "fitness", name: "Fitness & Recreation", subs: ["Studios","Sports","Kids Activities"] },
    { id: "pets", name: "Pets", subs: ["Vets","Grooming","Pet Sitting"] },
    { id: "shopping", name: "Shopping", subs: ["Boutiques","Gifts"] },
    { id: "entertainment", name: "Entertainment", subs: ["Events","Parties"] },
    { id: "community", name: "Community & Nonprofits", subs: ["Churches","Clubs","Volunteer"] }
  ],
  // CTA by subcategory (brief item 13)
  ctas: { HVAC:"Request Service", Plumbing:"Request Service", Electrical:"Request Service", Restaurants:"View Menu", Coffee:"View Menu", Agents:"Schedule a Consultation", Tutoring:"Check Availability", Salon:"Book Appointment", Handyman:"Tell Us About Your Project", Landscaping:"Get a Quote", Studios:"See Classes", "Web & Marketing":"Request a Free Review" },
  businesses: [
    { id:"tribe-maker", source:"live", name:"The Tribe Maker", cat:"pro", sub:"Web & Marketing", liveTag:"Technology", verifiedMember:true,
      tagline:"Websites that work as hard as Harvest neighbors do",
      subtagline:"Web design & digital marketing for local businesses",
      // About copied from the live profile (2026-10-13). The live text opens "Yavin Digital is..."; Gate R1 renamed it to match the listing.
      aboutParas:["The Tribe Maker is a small, neighbor-run web studio right here in Harvest. We help local shops, home service pros, and family businesses look as good online as they do in person \u2014 with clean websites, simple booking, and Google profiles that actually bring in calls.",
        "We keep things friendly and straightforward: no jargon, no long contracts, just a real person you can wave to at the farmers market. Most projects launch in two to four weeks, and we stick around afterward to keep everything fresh.",
        "Whether you're opening your first storefront or giving a long-time business a refresh, we'd love to grab a coffee and hear what you're building."],
      phone:"(817) 812-8946", email:"mike@thetribemaker.com", web:"https://thetribemaker.com", city:"Harvest, Argyle, TX 76226",
      directions:"https://www.google.com/maps/search/?api=1&query=Harvest%2C%20Argyle%2C%20TX%2076226",
      logo:"assets/tribemaker-logo.png", cover:"assets/tribemaker-hero.jpg",
      badges:["resident","verified","serves"], ownerNote:"Mike lives right here in Harvest.",
      // Only APPROVED recommendations count. Pending ones never add to this number (see BACKEND-NOTES.md).
      recsApproved:18, recsExample:true, views:9 },
    { id:"the-hive", source:"live", name:"The Hive", cat:"fitness", sub:"Studios",
      tagline:"Harvest's premier fitness studio: classes, coaching & community",
      web:"https://thehiveharvest.com", logo:"assets/hive-logo.png", badges:["verified","serves"], views:1,
      note:"The live listing's phone is a 555 placeholder, so no phone is shown." },
    { id:"ex-hvac", source:"example", name:"Example HVAC Co.", cat:"home", sub:"HVAC", tagline:"Example listing: AC repair and tune-ups", badges:["recommended","serves"], recs:12 },
    { id:"ex-plumb", source:"example", name:"Example Plumbing", cat:"home", sub:"Plumbing", tagline:"Example listing: leaks, water heaters, drains", badges:["resident","serves"], recs:7 },
    { id:"ex-handy", source:"example", name:"Example Handyman", cat:"home", sub:"Handyman", tagline:"Example listing: small repairs and honey-do lists", badges:["serves"], recs:4 },
    { id:"ex-pizza", source:"example", name:"Example Pizza Kitchen", cat:"food", sub:"Restaurants", tagline:"Example listing: pizza and family meals", badges:["recommended","serves"], recs:21 },
    { id:"ex-tutor", source:"example", name:"Example Tutoring", cat:"kids", sub:"Tutoring", tagline:"Example listing: K-8 math and reading", badges:["resident"], recs:5 },
    { id:"ex-salon", source:"example", name:"Example Salon", cat:"beauty", sub:"Salon", tagline:"Example listing: cuts and color", badges:["serves"], recs:3 },
    { id:"ex-realtor", source:"example", name:"Example Realty", cat:"realestate", sub:"Agents", tagline:"Example listing: buying and selling in Harvest", badges:["resident","serves"], recs:9 }
  ],
  offers: [
    { id:"o-tribe", source:"live", biz:"tribe-maker", title:"Free Marketing Review and 30-Day Custom Plan", kind:"Harvest Neighbor Special", expires:"2026-10-31", expiresExample:true },
    { id:"o-ex1", source:"example", biz:"ex-hvac", title:"Example: $49 AC tune-up for Harvest homes", kind:"Harvest Neighbor Special", expires:"2026-10-31" },
    { id:"o-ex2", source:"example", biz:"ex-pizza", title:"Example: Free dessert with any family meal", kind:"New Resident Offer", expires:"2026-11-15" },
    { id:"o-ex3", source:"example", biz:"ex-handy", title:"Example: First hour 20% off", kind:"Member Special", expires:"2026-10-16" }
  ],
  events: [
    { source:"verified", title:"Trash, recycling, brush and bulk pickup", when:"Every Wednesday, carts out by 7am", recurring:"wed", type:"Don't Forget" },
    { source:"live", title:"Early voting, any Denton County site (including Argyle Town Hall)", when:"Oct 19 to 30", date:"2026-10-19", type:"Coming Up", note:"Dates shown on the live site came from the Denton GOP site, not the county page. Unverified." },
    { source:"live", title:"Election Day, 7am to 7pm", when:"Nov 3", date:"2026-11-03", type:"Coming Up", note:"Unverified, same source as above." },
    { source:"example", title:"Example: Neighborhood garage sale", when:"Saturday 8am", date:"2026-10-17", type:"Coming Up" },
    { source:"example", title:"Example: Food truck night", when:"Friday 5pm", date:"2026-10-16", type:"Coming Up" },
    { source:"example", title:"Example: Kids soccer sign-ups close", when:"Today", date:"2026-10-13", type:"Today" }
  ],
  community: [
    { source:"live", name:"Harvest Homeowners Association", kind:"HOA", note:"Managed by FirstService Residential", web:"https://harvesttexas.com" },
    { source:"example", name:"Example: Harvest Runners Club", kind:"Club" },
    { source:"example", name:"Example: Harvest Moms Group", kind:"Group" },
    { source:"example", name:"Example: Youth Soccer", kind:"Sports" }
  ],
  // WHO SERVES MY STREET. Each directory sets its own sides and values in admin (see BACKEND-NOTES.md).
  sides: {
    prompt:"Which side of Harvest Way do you live on?",
    options:[
      { id:"west", label:"West / District 1", rows:[
        ["District","District 1, west of Harvest Way"],
        ["Water","Town of Northlake Utility Billing","940-648-3290"],
        ["Police","Northlake Police Department, non-emergency 940-349-1600 ext 9","940-349-1600"],
        ["Fire / EMS","Denton County ESD No. 1","940-464-7102"],
        ["Trash","Republic Services: trash, recycling, brush and bulk every Wednesday, carts out by 7am","817-953-7214"],
        ["HOA","FirstService Residential, harvest@fsresidential.com","(817) 717-7780"],
        ["School district","Northwest ISD"],
        ["Voting precinct","Look up your precinct with Denton County","","https://www.votedenton.gov/voter-information/voter-lookup/"]]},
      { id:"east", label:"East / District 2", rows:[
        ["District","District 2, east of Harvest Way"],
        ["Water","Argyle Water Supply Corp (sewer: Town of Argyle)","940-464-7713"],
        ["Police","Denton County Sheriff"],
        ["Fire / EMS","Denton County ESD No. 1","940-464-7102"],
        ["Trash","Republic Services: trash, recycling, brush and bulk every Wednesday, carts out by 7am","817-953-7214"],
        ["HOA","FirstService Residential, harvest@fsresidential.com","(817) 717-7780"],
        ["School district","Northwest ISD"],
        ["Voting precinct","Look up your precinct with Denton County","","https://www.votedenton.gov/voter-information/voter-lookup/"]]}
    ]},
  // GUIDE CHAPTERS. Data only, editable per directory (admin model needed, see BACKEND-NOTES.md).
  // Each item: t = text, src = source URL (verified, checked 2026-10-13), ex:true = could not verify, shown with the Example tag.
  guide: [
    { id:"mail", title:"Mail & USPS", items:[
      { t:"Harvest addresses use ZIP 76226 (Argyle).", src:"https://www.harvestbyhillwood.com/lifestyle/" },
      { t:"Argyle Post Office: 440 Highway 377 N, Argyle, TX 76226. Phone 940-464-7626. Check hours on the USPS locator before you go.", src:"https://tools.usps.com/locations/details/1353305" },
      { t:"Set up USPS Change of Address and Informed Delivery online at usps.com.", src:"https://www.usps.com/manage/forward.htm" },
      { t:"Cluster mailbox keys come from your builder or the post office at closing.", ex:true } ]},
    { id:"amenities", title:"Amenities & pools", items:[
      { t:"Four resort-style pools. The Splash has two pools with shaded cabanas; The Splash II has a baby pool and play features.", src:"https://www.harvestbyhillwood.com/amenities/" },
      { t:"The Fit Barn, north of Old Justin Road: indoor equipment room, fitness lawn, pool, volleyball and basketball courts.", src:"https://www.harvestbyhillwood.com/amenities/" },
      { t:"The Hall is the main event center, with a catering and demonstration kitchen, overlooking Harvest Lake and the event lawn.", src:"https://www.harvestbyhillwood.com/amenities/" },
      { t:"Harvest Farm with resident gardens, Farmhouse Coffee & Treasures, the Front Porch pavilion and a dog park.", src:"https://www.harvestbyhillwood.com/community/faq/" },
      { t:"Harvest info: 1301 Homestead Way, Argyle, TX 76226, (940) 305-6093, info@harvestbyhillwood.com.", src:"https://www.harvestbyhillwood.com/lifestyle/" },
      { t:"Pool hours, guest rules and amenity access cards: ask the HOA (FirstService, harvest@fsresidential.com).", ex:true } ]},
    { id:"dl", title:"Driver license & vehicle registration", items:[
      { t:"New Texans must register vehicles within 30 days of moving, or penalty fees may apply.", src:"https://www.txdmv.gov/motorists/new-to-texas" },
      { t:"Denton County requires a passing emissions inspection before registration. Non-commercial safety inspections ended Jan 1, 2025.", src:"https://www.dentoncounty.gov/DocumentCenter/View/9714/Vehicle-Inspection-Requirements-beginning-January-1-2025-PDF" },
      { t:"Register at a Denton County tax office. Bring Form 130-U, your out-of-state title or registration, photo ID and proof of Texas insurance.", src:"https://www.dentoncounty.gov/808/New-Texas-Residents" },
      { t:"Get a Texas driver license from DPS within 90 days of moving.", src:"https://www.txdmv.gov/motorists/new-to-texas" },
      { t:"Nearest DPS driver license office: 4020 E. McKinney St, Denton. Services are by appointment.", src:"https://www.dps.texas.gov/news/dps-opens-new-driver-license-office-denton" } ]},
    { id:"health", title:"Hospitals & urgent care", items:[
      { t:"Emergency: always call 911.", src:"" },
      { t:"Medical City ER Argyle, 24/7: 7214 Crawford Rd, Argyle (I-35 and Crawford Rd). 940-293-2888.", src:"https://www.medicalcityhealthcare.com/locations/medical-city-er-argyle" },
      { t:"Medical City Argyle Hospital: 7218 Crawford Rd, Argyle. 940-293-2885.", src:"https://www.medicalcityhealthcare.com/locations/medical-city-argyle-hospital" },
      { t:"Texas Health Breeze Urgent Care: 125 FM 407 E, Suite 110, Argyle. Open 8am to 8pm, 365 days. 940-307-1068.", src:"https://breeze.care.texashealth.org/Locations/urgent-care-fm-407-argyle" } ]},
    { id:"grocery", title:"Grocery & pharmacies", items:[
      { t:"Tom Thumb with pharmacy: 1046 Market Way, Argyle, at Harvest Town Center (FM 407 and I-35W). Pharmacy (682) 247-3619.", src:"https://local.tomthumb.com/tx/argyle/1046-market-wy.html" },
      { t:"Northlake Commons has more stores, restaurants and services.", src:"https://www.harvestbyhillwood.com/community/shopping-and-dining/" },
      { t:"Other nearby grocery and pharmacy options are being added.", ex:true } ]},
    { id:"groups", title:"Facebook groups", items:[
      { t:"Harvest lists these resident community groups: Harvest Residents, Trading Post, Market Day Online, Townside Patio Homes, Helping Hands, Harvest Small Business and Harvest Networking Group.", src:"https://www.harvestbyhillwood.com/lifestyle/" },
      { t:"Search each name on Facebook. Group links and admin approval rules are not confirmed yet.", ex:true } ]},
    { id:"outdoors", title:"Farmers market, parks & trails", items:[
      { t:"Harvest Market Days on the Event Lawn by the lake, across from the Farmhouse (1300 Homestead Way). Vendors are Harvest residents only.", src:"https://allevents.in/argyle/harvest-market-day/200029747507434" },
      { t:"Next Market Day: Saturday, Nov 21, 2026, 9am to 1pm (third-party listing).", ex:true },
      { t:"Argyle Farmers Market: second Saturdays, April to October, 9am to noon, Argyle Community Church Student Center, 414 US 377.", src:"https://argylefarmersmarket.com/" },
      { t:"Central Park: 1.5 miles of trails and open space. Seven neighborhood parks and playgrounds, including a bark park.", src:"https://www.harvestbyhillwood.com/new-home/types/" },
      { t:"Harvest Lake: 11 acres, catch-and-release fishing, with walking trails around it.", src:"https://www.harvestbyhillwood.com/amenities/" } ]},
    { id:"pros", title:"Movers, handymen, cleaners & landscapers", items:[
      { t:"Search Harvest Directory for local pros: <a href=\"index.html?q=handyman#sform\">handyman</a>, <a href=\"index.html?q=cleaner#sform\">cleaner</a>, <a href=\"index.html?q=landscaper#sform\">landscaper</a>, <a href=\"index.html?q=movers#sform\">movers</a>.", src:"", html:true },
      { t:"Resident-recommended movers, cleaners and landscapers appear here as they join.", ex:true },
      { t:"Can't find one? <a href=\"index.html#need\">Tell us what Harvest needs</a>.", src:"", html:true } ]}
  ],
  // Verified 2026-10-09 resident facts
  resources: [
    { id:"trash", group:"Trash", name:"Republic Services", detail:"Belmont FWSD 1 and 2. Trash, recycling, brush and bulk every Wednesday. Carts out by 7am.", phone:"817-953-7214", source:"verified" },
    { id:"water-w", group:"Water", district:1, name:"Town of Northlake Utility Billing", detail:"Water for District 1, west of Harvest Way.", phone:"940-648-3290", web:"https://town.northlake.tx.us", source:"verified" },
    { id:"water-e", group:"Water", district:2, name:"Argyle Water Supply Corp", detail:"Water for District 2, east of Harvest Way.", phone:"940-464-7713", source:"verified" },
    { id:"sewer-e", group:"Water", district:2, name:"Town of Argyle (sewer only)", detail:"Sewer for District 2. Water is Argyle WSC.", source:"verified" },
    { id:"police-w", group:"Police", district:1, name:"Northlake Police Department", detail:"District 1, west of Harvest Way. Non-emergency 940-349-1600 ext 9. Admin 940-648-4804.", phone:"940-349-1600", source:"verified" },
    { id:"police-e", group:"Police", district:2, name:"Denton County Sheriff", detail:"District 2, east of Harvest Way.", web:"https://www.dentoncounty.gov", source:"verified" },
    { id:"fire", group:"Fire / EMS", name:"Denton County ESD No. 1", detail:"Fire and EMS for all of Harvest. Always call 911 in an emergency.", phone:"940-464-7102", source:"verified" },
    { id:"hoa", group:"HOA", name:"FirstService Residential", detail:"Harvest HOA management. After-hours 877-378-2388.", phone:"(817) 717-7780", email:"harvest@fsresidential.com", web:"https://harvesttexas.com", source:"verified" },
    { id:"argyle", group:"Town", name:"Argyle Town Hall", detail:"308 Denton St, Argyle, TX.", phone:"940-464-7273", source:"verified" },
    { id:"county", group:"Town", name:"Denton County", detail:"County services, records and vehicle registration.", web:"https://www.dentoncounty.gov", source:"verified" },
    { id:"schools", group:"Schools", name:"Northwest ISD", detail:"School district serving Harvest. Check your campus by address with the district.", web:"https://www.nisdtx.org", source:"verified" },
    { id:"vote-tx", group:"Voting", name:"VoteTexas", detail:"Register and check voter status.", web:"https://www.votetexas.gov", source:"verified" },
    { id:"vote-dc", group:"Voting", name:"Denton County Elections", detail:"Polling places and your voting precinct.", web:"https://www.votedenton.gov/voter-information/voter-lookup/", source:"verified" }
  ]
};
