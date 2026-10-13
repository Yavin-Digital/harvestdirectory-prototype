project: "Harvest Directory Redesign (Prototype)"
slug: "harvestdirectory"
client: "Tribe Maker / Doorstep Local (internal property)"
agency: "Yavin"
agency_github_org: "Yavin-Digital"
project_type: ""               # unset: Rath/setup decides. Live site is a Doorstep Local Next.js directory.
status: "Phase 1 prototype, PROTOTYPE ONLY"
prototype:
  repo: "Yavin-Digital/harvestdirectory-prototype"
  branch: "feature/harvest-redesign-prototype"
  review_url: "https://harvestdirectory-preview.clientreview.co"
  preview_repo: "Yavin-Digital/harvestdirectory-preview"
  guide: "PROJECT_GUIDE.md"
constraints:
  - "Do NOT change live harvestdirectory.com or its production branch."
  - "Prototype is noindex + robots Disallow."
  - "Simulated data only where labeled Example."
pages: [index, members (Local Businesses), business (profile), new-resident, offers, community, join, my-harvest]
features_in_prototype:
  - search_hero_unified_results
  - intent_nav_what_do_you_need
  - parent_categories_14_hide_empty
  - harvest_right_now_hide_when_empty
  - new_resident_guide_address_lookup_example_logic
  - ask_harvest_simulated
  - badges_resident_owned_recommended_serves_verified
  - dynamic_cta_by_subcategory
  - favorites_my_harvest_localstorage
  - offers_with_expiry_deals_near_me
  - business_request_lead_form
  - join_29_mo_extra_neighborhood_25_mo
open_questions:
  - "Premier Partner and Verified standards: TBD for Mike."
  - "Real address-to-district geocoding source (street list or GIS)."
  - "Town by street for District 2 (east): unverified."
  - "Voting precinct by address: links to votedenton.gov lookup."
  - "Live site labels 940-648-3290 as Northlake Town Hall; verified data says Northlake Utility Billing."
  - "The Hive live listing phone is a 555 placeholder."
  - "SEO cleanup on live (old 'Notify Me' page, canonical, sitemap, redirects, GSC) is a live-site task, not in prototype."
