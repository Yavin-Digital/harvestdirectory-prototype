/* Pecan Square Directory. Live site: https://pecansquaredirectory.com (crawled Oct 15, 2026: no businesses, no resident info, no logo or photos, primary color #D97706).
   Community profile below is from public sources, each entry carries its src and verified date. Anything not verifiable is left out, so it stays hidden. */
const P = require('../_shared.js');
const V = '2026-10-15';
const HOA = 'https://www.pecansquarehoa.com/setting-up-your-home';
const FAQ = 'https://www.pecansquarebyhillwood.com/community/faq/';
module.exports = {
  slug: 'pecan-square', name: 'Pecan Square Directory', community: 'Pecan Square', area: 'Northlake, TX', heroKicker: 'Pecan Square, Northlake, TX',
  baseUrl: 'https://pecansquaredirectory-preview.clientreview.co', liveUrl: 'https://pecansquaredirectory.com/pecan-square',
  joinUrl: 'https://pecansquaredirectory.com/pecan-square/join', links: P.links,
  legal: { privacy: 'https://pecansquaredirectory.com/privacy', terms: 'https://pecansquaredirectory.com/terms' },
  brand: { logo: null, favicon: null, monogram: 'P', colors: { ink: '#1c1a14', slate: '#2e2a20', paper: '#f6f2ea', gold: '#D97706', goldD: '#92400e', kickerOnPhoto: '#fcd34d' }, hero: null },
  join: P.join, heroChips: P.heroChips,
  quickLinks: [['HOA Website', 'https://www.pecansquarehoa.com'], ['Trash & Recycling', 'https://www.town.northlake.tx.us/439/Trash-and-Recycling-Services'], ['Start water service', 'https://www.town.northlake.tx.us/409/Start-A-New-Service---Residents'], ['Register to Vote', 'https://www.votetexas.gov/register-to-vote/'], ['Town of Northlake', 'https://www.town.northlake.tx.us'], ['Denton County', 'https://www.dentoncounty.gov'], ['Northwest ISD', 'https://www.nisdtx.org'], ['Browse Local Businesses', 'members.html']],
  emergency: [],
  profile: {
    hoa: [{ id: 'hoa', name: 'Pecan Square Residential Community Association', detail: 'Managed by FirstService Residential. Greeting House / HOA offices: 2701 N. Market Square, Northlake, TX 76247. Customer Care Center 24/7: 877-378-2388.', phone: '469-705-6264', web: 'https://www.pecansquarehoa.com', src: HOA, verified: V }],
    water: [{ id: 'water', name: 'Town of Northlake', detail: 'Water and sewer. No water, street or sewer issues: 940-648-3290 Mon to Fri 8am to 4pm; after hours and weekends 972-943-4981.', phone: '940-648-3290', web: 'https://www.town.northlake.tx.us/409/Start-A-New-Service---Residents', src: HOA, verified: V }],
    trash: [{ id: 'trash', name: 'Waste Connections (through the Town of Northlake)', detail: 'Trash and recycling every Wednesday. Included and billed with your Northlake water service. Bulk pickup is requested through Waste Connections at extra cost.', phone: '940-592-5050', web: 'https://www.wasteconnections.com/contact-us/', src: 'https://www.town.northlake.tx.us/439/Trash-and-Recycling-Services', verified: V }],
    town: [{ id: 'town', name: 'Town of Northlake', detail: 'Pecan Square is in the Town of Northlake, Denton County. Town offices: 1500 Commons Circle, Suite 300, Northlake, TX 76226.', web: 'https://www.town.northlake.tx.us', src: FAQ, verified: V }],
    county: [{ id: 'county', name: 'Denton County', detail: 'County services, records and vehicle registration.', web: 'https://www.dentoncounty.gov', src: FAQ, verified: V }],
    specialDistrict: [{ id: 'mmd', name: 'Northlake MMD No. 1', detail: 'Municipal management district that finances water, sewer, drainage and roads and maintains right-of-way landscaping. Appears on your tax bill.', src: FAQ, verified: V }],
    isd: [{ id: 'schools', name: 'Northwest ISD', detail: 'Pecan Square is in Northwest ISD. Johnie Daniel Elementary is in the community. Check your campus by address with the district.', web: 'https://www.nisdtx.org', src: FAQ, verified: V }],
    utilities: [
      { id: 'electric', name: 'CoServ (electric)', detail: 'Electric service.', phone: '940-321-7800', src: HOA, verified: V },
      { id: 'gas', name: 'Atmos Energy (gas)', detail: 'Gas service.', phone: '888-286-6700', src: HOA, verified: V },
      { id: 'internet', name: 'Frontier (internet)', detail: 'Set up at least 30 days before closing. Tell the agent it is the Justin service area / Pecan Square HOA.', phone: '844-660-0648', src: HOA, verified: V }],
    elections: [{ id: 'vote-dc', name: 'Denton County Elections', detail: 'Polling places and your voting precinct.', web: 'https://www.votedenton.gov/voter-information/voter-lookup/', src: FAQ, verified: V },
      { id: 'vote-tx', name: 'VoteTexas', detail: 'Register and check voter status.', web: 'https://www.votetexas.gov', src: 'https://www.votetexas.gov', verified: V }],
    police: [], fire: [], representatives: [],
    etjNotes: ''
  },
  sides: { prompt: '', options: [] },
  guide: [
    { id: 'mail', title: 'Mail & USPS', items: [
      { t: 'Pecan Square addresses use ZIP 76247.', src: HOA, verified: V },
      { t: 'Justin Post Office: 120 W. 5th Street, Justin, TX. 940-648-3184.', src: HOA, verified: V }] },
    { id: 'hoa', title: 'HOA basics', items: [
      { t: 'Assessments are billed semi-annually, February 1 and August 1.', src: 'https://www.pecansquarehoa.com/faqs', verified: V },
      { t: 'Exterior changes (landscaping, patios, pools, paint, sheds and more) need written approval through an Architectural Control Committee request first.', src: 'https://www.pecansquarehoa.com/faqs', verified: V },
      { t: 'Resident portal: set up your account at pecansquare.connectresident.com.', src: HOA, verified: V }] }
  ],
  categories: P.categories, ctas: P.ctas,
  businesses: [], pitch: {}, featured: [], offers: [], announcements: [], groups: [], sponsors: [],
  events: [{ source: 'verified', title: 'Trash and recycling pickup', when: 'Every Wednesday', recurring: 'wed', type: "Don't Forget", src: 'https://www.pecansquarehoa.com/faqs' }],
  ask: [['trash|recycl|bulk|garbage', 'Trash and recycling are every Wednesday by Waste Connections, through the Town of Northlake and billed with water. Bulk pickup is requested through Waste Connections: 940-592-5050.'],
        ['water|sewer|bill', 'Water and sewer: Town of Northlake, 940-648-3290 (after hours 972-943-4981).'],
        ['hoa|amenit|pool', 'The Pecan Square HOA is managed by FirstService Residential. Greeting House: 469-705-6264. 24/7 Customer Care: 877-378-2388.'],
        ['school|isd', 'Pecan Square is in Northwest ISD. Check your campus by address with the district.']]
};
