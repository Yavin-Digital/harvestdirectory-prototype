/* Canyon Falls Directory. Live site: https://canyonfallsdirectory.com (crawled Oct 15, 2026: no businesses, no resident info, no logo or photos, primary color #0284C7).
   Canyon Falls spans three municipalities (Argyle/ETJ district, Town of Northlake, Town of Flower Mound), so "Who serves my street" uses three sides.
   Every entry is from a public source with its src. Unverifiable items are left out and stay hidden. */
const P = require('../_shared.js');
const V = '2026-10-15';
const NEW = 'https://www.canyonfallscommunity.com/welcome-new-residents/';
const FAQ = 'https://www.canyonfallstx.com/community/faq/';
const LOC = 'https://www.canyonfallscommunity.com/town-websites/';
const MUD = 'https://www.canyonfallsmud.com/';
module.exports = {
  slug: 'canyon-falls', name: 'Canyon Falls Directory', community: 'Canyon Falls', area: 'Northlake, TX', heroKicker: 'Canyon Falls, Northlake, TX',
  baseUrl: 'https://canyonfallsdirectory-preview.clientreview.co', liveUrl: 'https://canyonfallsdirectory.com/canyon-falls',
  joinUrl: 'https://canyonfallsdirectory.com/canyon-falls/join', links: P.links,
  legal: { privacy: 'https://canyonfallsdirectory.com/privacy', terms: 'https://canyonfallsdirectory.com/terms' },
  brand: { logo: null, favicon: null, monogram: 'C', colors: { ink: '#0b1f2e', slate: '#12324a', paper: '#f4f6f7', gold: '#38bdf8', goldD: '#075985', kickerOnPhoto: '#bae6fd' }, hero: null },
  join: P.join, heroChips: P.heroChips,
  quickLinks: [['HOA Website', 'https://www.canyonfallscommunity.com'], ['Local resources', LOC], ['Canyon Falls MUD', MUD], ['Register to Vote', 'https://www.votetexas.gov/register-to-vote/'], ['Town of Northlake', 'https://www.town.northlake.tx.us'], ['Town of Flower Mound', 'https://www.flower-mound.com/'], ['Town of Argyle', 'https://www.argyletx.com/'], ['Browse Local Businesses', 'members.html']],
  emergency: [],
  sidesLead: 'Canyon Falls is in three Denton County municipalities. Your trash day, water and police depend on which one you live in.',
  profile: {
    hoa: [{ id: 'hoa', name: 'Canyon Falls Master Community, Inc.', detail: 'Managed by SBB Community Management. On-site office inside the Canyon Falls Club, 6950 Canyon Falls Dr., Northlake, TX 76226.', phone: '940-240-0803', web: 'https://www.canyonfallscommunity.com', src: NEW, verified: V }],
    trash: [
      { id: 'trash-argyle', side: 'Argyle / ETJ', name: 'Republic Services', detail: 'Argyle/ETJ district. Trash day is Monday.', phone: '817-317-2000', src: NEW, verified: V },
      { id: 'trash-northlake', side: 'Northlake', name: 'Waste Connections', detail: 'Town of Northlake. Trash day is Monday.', phone: '817-222-2221', src: NEW, verified: V },
      { id: 'trash-fm', side: 'Flower Mound', name: 'Town of Flower Mound', detail: 'Town of Flower Mound. Trash day is Thursday.', phone: '972-539-7378', src: NEW, verified: V }],
    water: [
      { id: 'water-argyle', side: 'Argyle / ETJ', name: 'Argyle MUD (water)', detail: 'Water for the Argyle MUD area, as listed by the developer.', phone: '940-648-3290', src: FAQ, verified: V },
      { id: 'water-northlake', side: 'Northlake', name: 'Town of Northlake', detail: 'Water and sewer.', phone: '940-648-3290', web: 'https://town.northlake.tx.us/434/WaterSewer-Services', src: FAQ, verified: V },
      { id: 'water-fm', side: 'Flower Mound', name: 'Town of Flower Mound', detail: 'Water, sewer and trash billing.', phone: '972-874-6010', src: FAQ, verified: V }],
    police: [{ id: 'police-fm', side: 'Flower Mound', name: 'Flower Mound Police Department', detail: 'Non-emergency. Anonymous crime tip line 972-874-3307. Call 911 in an emergency.', phone: '972-539-0525', web: 'https://www.flowermound.gov/139/Police-Department', src: MUD, verified: V }],
    town: [
      { id: 'town-northlake', side: 'Northlake', name: 'Town of Northlake', detail: '1500 Commons Circle, Suite 300, Northlake, TX 76226.', phone: '940-648-3290', web: 'https://town.northlake.tx.us', src: LOC, verified: V },
      { id: 'town-fm', side: 'Flower Mound', name: 'Town of Flower Mound', detail: '2121 Cross Timbers Road, Flower Mound, TX 75028.', phone: '972-874-6000', web: 'https://www.flower-mound.com/', src: LOC, verified: V },
      { id: 'town-argyle', side: 'Argyle / ETJ', name: 'Town of Argyle', detail: '308 Denton Street, Argyle, TX 76226.', phone: '940-464-7273', web: 'https://www.argyletx.com/', src: LOC, verified: V }],
    county: [{ id: 'county', name: 'Denton County Tax Assessor / Collector', detail: 'Property taxes and vehicle registration.', phone: '940-349-3510', web: 'https://www.dentoncounty.gov', src: LOC, verified: V }],
    specialDistrict: [
      { id: 'mud1', name: 'Canyon Falls MUD No. 1 of Denton County', detail: 'Meets the 3rd Friday at 11am at 6950 Canyon Falls Dr. Handles new construction inspections.', web: MUD, src: MUD, verified: V },
      { id: 'wcid2', name: 'Canyon Falls Water Control and Improvement District No. 2', detail: 'Special district serving part of Canyon Falls.', phone: '972-823-0800', email: 'info@districtdata.org', src: LOC, verified: V }],
    isd: [{ id: 'schools', name: 'Argyle ISD or Northwest ISD', detail: 'Canyon Falls is split between Argyle ISD and Northwest ISD by address. Attendance zones can change, so check your campus with the district.', web: 'https://www.argyleisd.com', src: FAQ, verified: V }],
    utilities: [{ id: 'electric', name: 'CoServ (electric and gas)', detail: 'Electric and gas service.', phone: '800-566-2314', src: FAQ, verified: V },
      { id: 'internet', name: 'Frontier (TV, internet, phone)', detail: 'TV, internet and phone.', phone: '844-660-0648', src: FAQ, verified: V }],
    elections: [{ id: 'vote-dc', name: 'Denton County Elections', detail: 'Polling places and your voting precinct.', web: 'https://www.votedenton.gov/voter-information/voter-lookup/', src: LOC, verified: V },
      { id: 'vote-tx', name: 'VoteTexas', detail: 'Register and check voter status.', web: 'https://www.votetexas.gov', src: 'https://www.votetexas.gov', verified: V }],
    fire: [], representatives: [],
    etjNotes: 'Part of Canyon Falls is the Argyle/ETJ district, served by Argyle MUD water and Republic Services trash. The Town of Northlake notes it does not provide trash service to the Canyon Falls MUD area.'
  },
  sides: { prompt: 'Which part of Canyon Falls do you live in?', options: [
    { id: 'argyle', label: 'Argyle / ETJ', rows: [['Trash', 'Republic Services, Monday', '817-317-2000'], ['Water', 'Argyle MUD', '940-648-3290'], ['HOA', 'SBB Community Management', '940-240-0803'], ['School district', 'Argyle ISD or Northwest ISD by address', '', 'https://www.argyleisd.com']] },
    { id: 'northlake', label: 'Town of Northlake', rows: [['Trash', 'Waste Connections, Monday', '817-222-2221'], ['Water / sewer', 'Town of Northlake', '940-648-3290'], ['HOA', 'SBB Community Management', '940-240-0803'], ['School district', 'Argyle ISD or Northwest ISD by address', '', 'https://www.argyleisd.com']] },
    { id: 'fm', label: 'Town of Flower Mound', rows: [['Trash', 'Town of Flower Mound, Thursday', '972-539-7378'], ['Water / sewer', 'Town of Flower Mound', '972-874-6010'], ['Police (non-emergency)', 'Flower Mound PD', '972-539-0525'], ['HOA', 'SBB Community Management', '940-240-0803'], ['School district', 'Argyle ISD or Northwest ISD by address', '', 'https://www.argyleisd.com']] }] },
  guide: [{ id: 'trash-rules', title: 'Trash rules', items: [
    { t: 'Carts may go out from 5pm the evening before pickup and must be stored out of view by 7am the day after.', src: NEW, verified: V },
    { t: 'On non-collection days, store carts in the garage or backyard, not on the side of the house unless screened by an approved fence or landscaping.', src: NEW, verified: V }] }],
  categories: P.categories, ctas: P.ctas,
  businesses: [], pitch: {}, featured: [], offers: [], announcements: [], groups: [], sponsors: [], events: [],
  ask: [['trash|recycl|bulk|garbage', 'Trash day depends on your municipality: Argyle/ETJ (Republic, 817-317-2000) and Northlake (Waste Connections, 817-222-2221) are Monday; Flower Mound is Thursday (972-539-7378).'],
        ['water|sewer|bill', 'Water: Argyle MUD or Town of Northlake (940-648-3290), or Town of Flower Mound (972-874-6010), depending on where you live.'],
        ['hoa|amenit|pool|club', 'The Canyon Falls HOA is managed by SBB Community Management: 940-240-0803, inside the Canyon Falls Club, 6950 Canyon Falls Dr.'],
        ['school|isd', 'Canyon Falls is split between Argyle ISD and Northwest ISD by address. Check your campus with the district.']]
};

/* R2 (Marco gate): taste levers */
Object.assign(module.exports, {
 "heroComposition": "name-mark",
 "accentRole": "underline",
 "layout": {
  "radius": "0px",
  "ruleWeight": "1px",
  "bandOrder": [
   "lookup",
   "intents",
   "quick"
  ]
 },
 "type": {
  "display": {
   "family": "Space Grotesk",
   "file": "spacegrotesk",
   "weight": 600,
   "range": "500 700",
   "fallback": "system-ui,sans-serif"
  },
  "text": [
   {
    "family": "Inter",
    "file": "inter",
    "range": "400 700",
    "fallback": "system-ui,sans-serif"
   }
  ]
 },
 "tagline": "Built for Canyon Falls: three towns, one neighborhood."
});
Object.assign(module.exports.brand, {
 "coords": "33.0732\u00b0 N, 97.2276\u00b0 W",
 "motif": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"><!-- stylized contour lines stepping down to a fall line (decorative, not survey data) --><path d=\"M4 14 C60 6 110 22 150 14 S176 8 180 14 C184 20 210 6 250 14 S320 20 356 12\"/><path d=\"M4 24 C60 16 110 32 150 24 S172 20 176 28 C180 36 210 18 250 24 S320 30 356 22\"/><path d=\"M4 34 C60 26 110 42 150 34 S170 32 174 42 C178 50 210 30 250 34 S320 40 356 32\"/><path d=\"M180 14 V56 M176 28 V56 M184 22 V56\" stroke-width=\"1\"/></svg>",
 "colors": {
  "ink": "#0b1f2e",
  "slate": "#12324a",
  "paper": "#f2f6f8",
  "gold": "#38bdf8",
  "goldD": "#075985",
  "kickerOnPhoto": "#bae6fd"
 }
});
