# Harvest Directory — Project Guide (Prototype)

PROTOTYPE ONLY. Never change live harvestdirectory.com or its production branch.

## LEGAL / COMPLIANCE
Not a webinar/firearms site. The build-standards prohibited-word grep was run anyway and is clean.

## 1. Project Overview
"The homepage for living in Harvest." Residents are the customer and businesses fund it
(resident utility -> traffic -> business value -> $29/mo subscriptions). Built to scale to other
Doorstep Local communities (Pecan Square, Canyon Falls, Timberbrook, Wildflower Ranch).
Stack: vanilla HTML/CSS/JS, no build step, Google Fonts (Fraunces + Inter). Custom CSS instead of
Tailwind CDN to keep the MARCO band system tight. Run: `python3 -m http.server`.

## 2. File Structure
```
index.html          Home: search hero, intents, Right Now, categories, featured, Ask Harvest, deals, lookup, join pitch, request form
members.html        Local Businesses (URL stays /members on live), category filter
business.html       Profile (?id=tribe-maker | the-hive), recommend yes/no + "what did they help with"
new-resident.html   Ultimate New Resident Guide + "I live at..." lookup + contacts
offers.html         Deals Near Me Today, searchable, sorted by expiry
community.html      Community (renamed from Groups) + Right Now
join.html           $29/mo value list, profile preview, badge definitions
my-harvest.html     Favorites dashboard (localStorage key harvest.myharvest.v1)
css/site.css        MARCO bands (ink/slate/paper/photo), gold accent as jewelry
js/site.js          GENERATED from directories/harvest/config.js (node build.mjs harvest --out .). window.SITE: ALL data. Each item has source: live | verified | example
js/layout.js        Shared header/footer, mobile menu (Esc closes)
js/app.js           Search index, Right Now, lookup, Ask Harvest, favorites, cards
assets/             Real images only (live site + harvestbyhillwood.com farmhouse)
robots.txt          Disallow: /   (all pages also meta noindex)
```

## 3. Architecture Rules
- All content in `js/site.js`. Templates never hardcode listings or contacts.
- `source:"example"` items always render the "Example" tag. Never ship example items to production.
- Empty modules hide themselves (Right Now, categories with no listings).
- CTA label comes from `SITE.ctas[subcategory]`.
- Address lookup is EXAMPLE LOGIC: user picks west/east of Harvest Way. Production needs geocoding.
- Ask Harvest is simulated keyword matching over site data.

## 4. Work Completed
- 2026-10-15: Turned into the Doorstep Local directory template (see DIRECTORY-TEMPLATE.md). Applied live-site changes (LIVE-GAPS-2026-10-15.md). Added events, announcements, featured, recommend, help, privacy, terms. Data moved to directories/harvest/config.js; js/site.js is now generated.
- 2026-10-13: Initial prototype, all 8 pages, verified 2026-10-09 resident facts, live business content.

## 5. Rules for Implementation
- Text >= 16px, taps >= 48px, AA contrast, no emoji, mobile-first.
- No star reviews. Recommendations are yes/no + "what did they help with".
- Badges are separate: Harvest Resident Owned / Recommended by Harvest Residents / Serves Harvest / Verified.
- Verified = identity, contact and serves-Harvest confirmed. Premier Partner standards are TBD for Mike.
- Fix "Arglye" -> "Argyle" on the live Tribe Maker listing (prototype already uses Argyle).
- 940-648-3290 is Town of Northlake Utility Billing (verified), not "Northlake Town Hall" as the live site shows.

## 6. Git Workflow
Branch `feature/harvest-redesign-prototype` -> draft PR into `main` of
https://github.com/Yavin-Digital/harvestdirectory-prototype. Do not merge without Mike.
Review copy is published to https://github.com/Yavin-Digital/harvestdirectory-preview (GitHub Pages,
CNAME harvestdirectory-preview.clientreview.co).
