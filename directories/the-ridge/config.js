/* The Ridge Directory (The Ridge at Northlake). Live site: https://theridgedirectory.com (crawled Oct 15, 2026: no businesses, no resident info, no logo or photos, primary color #1e293b).
   Community profile from public sources (builder fact sheet + Town of Northlake). Unverifiable items are left out and stay hidden. */
const P = require('../_shared.js');
const V = '2026-10-15';
const FS = 'https://www.taylormorrison.com/-/media/sites/tm/homes/texas/dallas/northlake/the-ridge-at-northlake/fact-sheet/the-ridge-at-northlakefact-sheet22526.pdf';
const TOWN = 'https://town.northlake.tx.us/434/WaterSewer-Services';
module.exports = {
  slug: 'the-ridge', name: 'The Ridge Directory', community: 'The Ridge at Northlake', area: 'Northlake, TX', heroKicker: 'The Ridge at Northlake, Northlake, TX',
  baseUrl: 'https://theridgedirectory-preview.clientreview.co', liveUrl: 'https://theridgedirectory.com/ridge-at-northlake',
  joinUrl: 'https://theridgedirectory.com/ridge-at-northlake/join', links: P.links,
  legal: { privacy: 'https://theridgedirectory.com/privacy', terms: 'https://theridgedirectory.com/terms' },
  brand: { logo: null, favicon: null, monogram: 'R', colors: { ink: '#1e293b', slate: '#334155', paper: '#f6f2ea', gold: '#e0a63a', goldD: '#8a5a10', kickerOnPhoto: '#f8dc9c' }, hero: null },
  join: P.join, heroChips: P.heroChips,
  quickLinks: [['Trash & Recycling', 'https://www.town.northlake.tx.us/439/Trash-and-Recycling-Services'], ['Water & Sewer', TOWN], ['Register to Vote', 'https://www.votetexas.gov/register-to-vote/'], ['Town of Northlake', 'https://www.town.northlake.tx.us'], ['Denton County', 'https://www.dentoncounty.gov'], ['Argyle ISD', 'https://www.argyleisd.com'], ['Browse Local Businesses', 'members.html']],
  emergency: [['Fire', '940-464-7102']],
  profile: {
    hoa: [{ id: 'hoa', name: 'The Ridge at Northlake Homeowners Association', detail: 'Approximate 2026 base assessment $1,484 a year, paid $371 a quarter (builder fact sheet).', phone: '972-359-1548', email: 'ridgenorthlake@cmamanagement.com', src: FS, verified: V }],
    water: [{ id: 'water', name: 'Town of Northlake', detail: 'Water and sewer for The Ridge at Northlake.', phone: '940-648-3290', web: TOWN, src: TOWN, verified: V }],
    trash: [{ id: 'trash', name: 'Waste Connections (through the Town of Northlake)', detail: 'The Town lists trash service for The Ridge. Billed with your water bill. Missed pickup, bulk or hazardous waste: call Waste Connections.', phone: '940-592-5050', web: 'https://www.town.northlake.tx.us/439/Trash-and-Recycling-Services', src: 'https://www.town.northlake.tx.us/439/Trash-and-Recycling-Services', verified: V }],
    police: [{ id: 'police', name: 'Non-emergency police', detail: 'Non-emergency police number listed on the builder fact sheet. Call 911 in an emergency.', phone: '940-349-1600', src: FS, verified: V }],
    fire: [{ id: 'fire', name: 'Fire department', detail: 'Fire department number listed on the builder fact sheet. Denton ESD 1 is on the tax bill. Call 911 in an emergency.', phone: '940-464-7102', src: FS, verified: V }],
    town: [{ id: 'town', name: 'Town of Northlake', detail: 'Town offices: 1500 Commons Circle, Suite 300, Northlake, TX 76226.', web: 'https://www.town.northlake.tx.us', src: 'https://www.town.northlake.tx.us/439/Trash-and-Recycling-Services', verified: V }],
    county: [{ id: 'county', name: 'Denton County', detail: 'County services, records and vehicle registration.', web: 'https://www.dentoncounty.gov', src: FS, verified: V }],
    specialDistrict: [{ id: 'mmd', name: 'Northlake MMD No. 2', detail: 'Municipal management district on every Ridge tax bill.', src: FS, verified: V }],
    isd: [{ id: 'schools', name: 'Argyle ISD', detail: 'The Ridge at Northlake is in Argyle ISD. Campus assignments have changed between fact sheet versions, so check your campus by address with the district.', web: 'https://www.argyleisd.com', src: FS, verified: V }],
    utilities: [{ id: 'electric', name: 'CoServ (electric and gas)', detail: 'Electric and gas service.', phone: '940-321-7800', src: FS, verified: V },
      { id: 'internet', name: 'Astound Broadband (internet)', detail: 'Internet service.', phone: '800-427-8686', src: FS, verified: V }],
    elections: [{ id: 'vote-dc', name: 'Denton County Elections', detail: 'Polling places and your voting precinct.', web: 'https://www.votedenton.gov/voter-information/voter-lookup/', src: FS, verified: V },
      { id: 'vote-tx', name: 'VoteTexas', detail: 'Register and check voter status.', web: 'https://www.votetexas.gov', src: 'https://www.votetexas.gov', verified: V }],
    representatives: [], etjNotes: ''
  },
  sides: { prompt: '', options: [] },
  guide: [{ id: 'mail', title: 'Mail & USPS', items: [{ t: 'The builder fact sheet lists USPS Argyle, 940-464-7626.', src: FS, verified: V }] }],
  categories: P.categories, ctas: P.ctas,
  businesses: [], pitch: {}, featured: [], offers: [], announcements: [], groups: [], sponsors: [], events: [],
  ask: [['trash|recycl|bulk|garbage', 'Trash and recycling: Waste Connections through the Town of Northlake, billed with water. Service questions: 940-592-5050.'],
        ['water|sewer|bill', 'Water and sewer: Town of Northlake, 940-648-3290.'],
        ['hoa', 'The Ridge at Northlake HOA: 972-359-1548, ridgenorthlake@cmamanagement.com.'],
        ['school|isd', 'The Ridge at Northlake is in Argyle ISD. Check your campus by address with the district.']]
};
