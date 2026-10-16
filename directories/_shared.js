/* Platform-level defaults shared by every Doorstep Local directory (from the live join pages, Oct 15, 2026).
   A directory config spreads these in and overrides anything it needs. Nothing here is neighborhood-specific. */
const join = {
  price: 29, extraNeighborhood: 25,
  promo: "First 20 businesses in each neighborhood get 90 days free (promo code at checkout).",
  features: [
    ["Neighborhood search", "Show up when residents search for what you do."],
    ["Full business profile", "Rich text about your business, contact and social links."],
    ["Clean categories", "Listed in the right parent category and subcategory, never a duplicate."],
    ["Quote request inbox", "Residents contact you directly from your page."],
    ["Neighborhood-only offers", "Post neighbor specials and new resident offers with an expiry date."],
    ["Events", "Put your events on the neighborhood calendar."],
    ["Photos and video", "Photo gallery up to 10 images plus a YouTube or Vimeo embed."],
    ["Profile view analytics", "See how many neighbors found you."],
    ["Resident recommendations", "Neighbors can recommend you and say what you helped with."],
    ["Featured eligibility", "Eligible for Business of the Month and the Premier Partner badge."]
  ],
  faq: [
    ["When do I get access?", "After you enter your card on the join page and Stripe confirms the payment, you can start building your profile."],
    ["When does my listing go live?", "Once you publish your profile from your dashboard."],
    ["What does the promo code do?", "The first 20 spots in each neighborhood get 90 days free. You can only redeem a promo code in one directory."],
    ["Can I cancel?", "Yes. Cancel anytime from your dashboard. No penalties, no questions."],
    ["Can I list in multiple directories?", "Yes. Additional neighborhoods are $25/mo each. The free period applies to your first directory."]
  ]
};
const categories = [
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
];
const ctas = { HVAC:"Request Service", Plumbing:"Request Service", Electrical:"Request Service", Restaurants:"View Menu", Coffee:"View Menu", Agents:"Schedule a Consultation", Tutoring:"Check Availability", Salon:"Book Appointment", Handyman:"Tell Us About Your Project", Landscaping:"Get a Quote", Studios:"See Classes", "Web & Marketing":"Request a Free Review" };
const heroChips = [["Plumber","plumber"],["HVAC","hvac"],["Restaurants","restaurants"],["Handyman","handyman"],["Electrician","electrician"],["Landscaper","landscaper"]];
const links = { signIn: "https://doorsteplocal.com/login", dashboard: "https://doorsteplocal.com/dashboard" };
module.exports = { join, categories, ctas, heroChips, links };
