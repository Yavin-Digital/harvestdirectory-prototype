# Harvest Directory prototype: backend notes for devs

The prototype is static. Everything below is mocked in `js/site.js` and has to be built as real models with admin screens before launch.

## 1. Guide chapters need a per-directory admin model
- The New Resident Guide "Settling in" chapters live in `SITE.guide` as data: chapter `{id, title, items[]}`, item `{t, src, ex, html}`.
- Model: `GuideChapter(directory_id, slug, title, sort, published)` and `GuideItem(chapter_id, text, source_url, verified_at, is_example, sort)`.
- Every directory (Harvest, and each future one) edits its own chapters in admin. Items without a source must render with the "Example" tag, or stay hidden on the live site.
- Show `verified_at`, and flag items older than 180 days for re-checking.

## 2. "Who serves my street": sides are set per directory in admin
- There's no address field or geocoding. The visitor picks a side, and that side's list renders instantly from `SITE.sides`.
- Model: `ServiceSide(directory_id, slug, label, sort)` and `ServiceRow(side_id, label, value, phone, url, sort)`.
- Each directory sets its own sides and values in admin. Harvest uses West (District 1) and East (District 2) of Harvest Way. Other directories may have one side, or more than two.

## 3. Recommendations need a new model with an admin approval queue
- The form collects the neighbor's name, Yes/No, and "what did they help with".
- Submissions are saved as pending, and the visitor sees "Pending admin approval". The prototype keeps them in localStorage only (`harvest.recs.pending.v1`).
- Model: `Recommendation(member_id, directory_id, neighbor_name, recommends bool, helped_with, status[pending|approved|rejected], submitted_at, reviewed_by, reviewed_at, ip_hash)`.
- Admin needs a queue with approve and reject actions, plus rate limiting and spam checks.
- "Recommended by X neighbors" counts **approved, recommends=true** only. Pending and rejected submissions never count.
- The current count of 18 is an Example placeholder.

## 4. Business profile fields used from the live member page
- Fields used: tagline, sub-tagline, category tag ("Technology"), Verified Member flag, About paragraphs, phone, email, website, directions URL, cover and logo images, Special Offer, profile view count.
- The live About text opens "Yavin Digital is…". The prototype says "The Tribe Maker is…" to match the listing name (Marco Gate R1). Confirm which one the owner wants.
