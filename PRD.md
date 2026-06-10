# PRD.md — Immigration Consultancy Static Website Recreation

## 1. Project Goal
Build a legally safe, modern, fast static website inspired by `https://bbcimmigration.com/`, deployable on GitHub Pages. The goal is **not** to copy their copyrighted content, brand, logo, team photos, licence images, or exact wording. Recreate the information architecture, user flow, service structure, forms, SEO setup, and page experience with original branding/content/assets.

## 2. Important Legal / Ethical Rule
- Do not use the exact Busy Bee Canada logo, staff photos, licence photo, testimonials, copyrighted page copy, or exact visual identity unless the site owner gives permission.
- Use original business name, original copy, and licensed/royalty-free images.
- If this is your own/client-owned site and you have written permission, assets can be downloaded from the original WordPress uploads; otherwise use replacement assets from Unsplash/Pexels or custom AI-generated images.

## 3. Observed Source Website Summary
Source website: `https://bbcimmigration.com/`

### Main Navigation
- Home
- Services dropdown
  - Visa
  - Immigration
  - Work Permit
  - Programs
  - Additional
- Immigration
- Contact
- About Us
- Book Consultation
- Social links: Facebook, Instagram

### Main Public Pages Found
| Page | URL Path | Purpose |
|---|---|---|
| Home | `/` | Hero + lead form + service links + process + CTAs |
| Services | `/services/` | Service hub categorized into Visa, Immigration, Work Permit, Programs, Additional |
| Immigration | `/immigration/` | Short cards for Skilled, Business, Family, Work Permits |
| About Us | `/about-us/` | Company intro, director note, team members, stats, contact block |
| Contact Us | `/contact-us/` | Address, phone, toll-free, email, lead form |
| Book Consultation | `/book-consultation/` | Booking widget placeholder; source uses WordPress Bookly shortcode |

### Service Detail Pages Found / Required
Create a dedicated page for each:
1. `/services/visitor-visa/`
2. `/services/study-abroad/`
3. `/services/business-visa/`
4. `/services/express-entry/`
5. `/services/provincial-nominee-program/`
6. `/services/business-immigration/`
7. `/services/skilled-immigration/`
8. `/services/family-immigration/`
9. `/services/closed-work-permit-lmia/`
10. `/services/spousal-open-work-permit/`
11. `/services/bridging-open-work-permit/`
12. `/services/post-graduate-work-permit/`
13. `/services/family-spousal-sponsorships/`
14. `/services/self-employed-program/`
15. `/services/caregiver-program/`
16. `/services/asylum-seekers/`
17. `/services/renewal-and-replacement-of-pr-card/`
18. `/services/appeal/`
19. `/services/citizenship-applications/`
20. Optional blog/resource page: `/resources/`
21. Optional CRS calculator page: `/crs-calculator/`

## 4. Recommended Tech Stack for GitHub Pages
Use **Astro static output** or **plain HTML/CSS/JS**. Best choice for Antigravity: Astro, because it gives components, content collections, easy SEO, and static build.

### Recommended Stack
- Astro latest stable
- TypeScript optional
- CSS modules or global CSS
- Static JSON data for services/team/testimonials
- GitHub Actions deploy to GitHub Pages
- Form backend: Formspree, Getform, Basin, Netlify Forms, Google Forms, or custom n8n webhook

### Important GitHub Pages Constraint
GitHub Pages is static hosting only. Forms cannot be processed by PHP/server code on GitHub Pages. Use an external form endpoint or webhook.

## 5. Sitemap to Build
```txt
/
/services/
/immigration/
/about-us/
/contact-us/
/book-consultation/
/privacy-policy/
/terms-and-conditions/
/disclaimer/
/cookie-policy/
/accessibility/
/services/visitor-visa/
/services/study-abroad/
/services/business-visa/
/services/express-entry/
/services/provincial-nominee-program/
/services/business-immigration/
/services/skilled-immigration/
/services/family-immigration/
/services/closed-work-permit-lmia/
/services/spousal-open-work-permit/
/services/bridging-open-work-permit/
/services/post-graduate-work-permit/
/services/family-spousal-sponsorships/
/services/self-employed-program/
/services/caregiver-program/
/services/asylum-seekers/
/services/renewal-and-replacement-of-pr-card/
/services/appeal/
/services/citizenship-applications/
/404.html
/sitemap.xml
/robots.txt
```

## 6. Page Requirements

### 6.1 Global Layout
- Header with logo, desktop nav, dropdown, mobile hamburger.
- Sticky top nav on scroll.
- CTA buttons: “Check Eligibility”, “Book Consultation”, “Call Now”.
- Footer with two service columns, contact info, social links, legal links.
- Floating WhatsApp/call button optional.
- Accessibility: keyboard navigation, aria labels, visible focus states.

### 6.2 Home Page
Sections:
1. Hero: immigration consultancy headline, background image/video-style gradient, short trust line.
2. Lead form: service dropdown + name + email + phone + message + consent checkbox.
3. Welcome section: personalized immigration help.
4. “You’re in Good Hands” service grid:
   - Express Entry
   - Provincial Nominee Program
   - Work Permits
   - Business Immigration
   - Study Permits
   - Family & Spousal Sponsorship
   - Visitor Visa
   - Citizenship Applications
   - Caregiver Program
   - Asylum Seekers
5. Process: Choose Program → Prepare Application → Verify Application → Submit.
6. CTA cards: Immigration Plans, Check Eligibility, Book Consultation.
7. Testimonials/reviews section.
8. Final call block.

### 6.3 Services Hub
- Category tabs/anchor links: Visa, Immigration, Work Permit, Programs, Additional.
- Cards with title, short summary, icon/image, “Learn More”.
- Add filtering/search box for better UX.

### 6.4 Service Detail Template
Each service page should include:
- Breadcrumb: Home > Services > Service Name
- H1 + short intro
- Hero/service image
- “Who this is for”
- “Eligibility / Requirements”
- “Documents commonly needed”
- “How we help”
- “Process timeline”
- FAQ accordion
- CTA form/sidebar
- Related services
- Disclaimer: immigration rules change; consult licensed professional.

### 6.5 About Page
- Company intro
- Director section
- Team cards
- Stats: cases, assessments, satisfaction — use real numbers only or hide until available.
- Contact CTA.

### 6.6 Contact Page
- Address, phone, toll-free, email.
- Map embed optional.
- Contact/eligibility form.
- Office hours.

### 6.7 Book Consultation Page
Static replacement for Bookly:
- Service selection
- Date/time link to Calendly/TidyCal/Google Appointment Schedule
- Contact fields
- Payment optional later
- CTA: “Book a paid consultation” / “Request callback”

## 7. Forms Required

### 7.1 Lead / Eligibility Form Fields
- Full name
- Email
- Phone / WhatsApp
- Country of residence
- Current immigration status
- Desired service dropdown:
  - Immigration
  - Business Immigration
  - Provincial Nominee Program
  - LMIA / Work Permit
  - Visitor Visa (Family & Friends)
  - Visitor Visa (Business)
  - Student Visa
  - CRS Point Calculation
  - Others
- Message
- Consent checkbox: “By submitting my data I agree to be contacted.”
- Hidden fields: page source, UTM parameters, timestamp.

### 7.2 Form Handling Options
Preferred free/simple:
1. n8n webhook → Gmail/Google Sheet/Supabase
2. Formspree/Getform/Basin endpoint
3. Google Form embed

For GitHub Pages, do not build PHP forms.

## 8. Image / Asset Plan

### 8.1 Asset Categories Needed
- Logo: original logo, SVG preferred.
- Hero image/video replacement: Canada skyline/immigration/family/students/professional.
- Service card images/icons: 19 service images/icons.
- About/director/team photos: use real client/team images only with permission.
- Licence/certification image: use real licensed consultant certificate only with permission.
- Social preview images: `og-image.jpg`, service OG images.

### 8.2 Suggested Folder Structure
```txt
public/
  assets/
    logo.svg
    logo-dark.svg
    favicon.svg
    og-image.jpg
    images/
      hero-canada.jpg
      about-director.jpg
      team-01.jpg
      team-02.jpg
      team-03.jpg
      licence.jpg
      services/
        visitor-visa.jpg
        study-abroad.jpg
        business-visa.jpg
        express-entry.jpg
        provincial-nominee-program.jpg
        business-immigration.jpg
        skilled-immigration.jpg
        family-immigration.jpg
        closed-work-permit-lmia.jpg
        spousal-open-work-permit.jpg
        bridging-open-work-permit.jpg
        post-graduate-work-permit.jpg
        family-spousal-sponsorships.jpg
        self-employed-program.jpg
        caregiver-program.jpg
        asylum-seekers.jpg
        pr-card-renewal.jpg
        appeal.jpg
        citizenship-applications.jpg
```

### 8.3 If You Have Permission to Use Source Assets
Run locally only if you own/have permission:
```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://bbcimmigration.com/
```
Then copy only permitted images from the downloaded `wp-content/uploads/` folder into `public/assets/images/` and optimize them.

### 8.4 If You Do Not Have Permission
Use replacement licensed images. Generate a CSV/JSON asset manifest and have Antigravity download royalty-free images manually or use placeholders.

## 9. Content Guidelines
- Rewrite all service content in original language.
- Use official government/IRCC links as references in content, not copied competitor text.
- Add “information only, not legal advice” disclaimer.
- Avoid guaranteed approval claims.
- Use clear CTAs and trust signals.

## 10. Legal Pages Required
Create these pages:
- Privacy Policy
- Terms and Conditions
- Disclaimer
- Cookie Policy
- Accessibility Statement

Legal content must mention:
- Site owner/business name placeholder
- Contact email placeholder
- Data collected through forms
- Consent to be contacted
- No guarantee of visa/immigration approval
- Not affiliated with Government of Canada / IRCC unless true
- Cookies/analytics disclosure if analytics are used

## 11. SEO Requirements

### Technical SEO
- Clean slugs exactly as sitemap.
- One H1 per page.
- Meta title max ~60 chars, description ~155 chars.
- Canonical URL.
- OpenGraph/Twitter cards.
- JSON-LD schema:
  - LocalBusiness / LegalService or ProfessionalService
  - BreadcrumbList
  - FAQPage for service FAQs
  - Organization
- `sitemap.xml` generated.
- `robots.txt`.
- 404 page.
- Image alt text.
- Mobile Core Web Vitals target: Lighthouse 90+.

### Local SEO
- NAP consistency: business name, address, phone.
- Add embedded Google map.
- Add service area pages later:
  - Canada Immigration Consultant in Barrie
  - Work Permit Consultant Ontario
  - Study Visa Consultant Barrie

### Keyword Buckets
- Canada immigration consultant
- Immigration consultant Barrie Ontario
- Canada visitor visa consultant
- Express Entry consultant
- PNP Canada consultant
- LMIA work permit consultant
- Spousal sponsorship Canada
- PR card renewal Canada
- Citizenship application Canada

## 12. UX / Design Direction
Design inspired by the source but improved:
- Modern navy/blue + yellow/gold accent.
- Clean service cards.
- Better mobile nav than the source.
- Faster page load.
- No WordPress admin/social feed errors.
- Strong CTAs above the fold.
- Trust blocks: licensed consultant, process, reviews, transparent disclaimer.

## 13. Data Files
Create static JSON files:
```txt
src/data/services.json
src/data/team.json
src/data/testimonials.json
src/data/faqs.json
src/data/site.ts
```

## 14. Suggested Project Structure
```txt
immigration-site/
  .github/workflows/deploy.yml
  public/
    assets/
  src/
    components/
      Header.astro
      Footer.astro
      ServiceCard.astro
      LeadForm.astro
      CTA.astro
      SEO.astro
      FAQ.astro
    layouts/
      BaseLayout.astro
      ServiceLayout.astro
    pages/
      index.astro
      services/index.astro
      immigration.astro
      about-us.astro
      contact-us.astro
      book-consultation.astro
      privacy-policy.astro
      terms-and-conditions.astro
      disclaimer.astro
      cookie-policy.astro
      accessibility.astro
      services/[slug].astro
    data/
      services.json
      team.json
      faqs.json
      site.ts
    styles/
      global.css
  astro.config.mjs
  package.json
  README.md
  PRD.md
```

## 15. Acceptance Criteria
- All pages in sitemap build successfully.
- Header/footer links work.
- Mobile menu works.
- Service dropdown works on desktop and mobile.
- Forms submit to configured endpoint or show a clear “endpoint missing” development warning.
- No broken image paths.
- Lighthouse score target 90+ performance/accessibility/SEO.
- Sitemap and robots are present.
- No copied copyrighted assets/content unless permission documented.
- GitHub Pages deployment works.

## 16. Development Phases

### Phase 1 — Static Foundation
- Create Astro project.
- Add global styles, layout, header, footer.
- Add data files.
- Build home/services/about/contact/consultation pages.

### Phase 2 — Service Pages
- Add dynamic service detail template.
- Create all 19 service entries.
- Add FAQ and CTAs.

### Phase 3 — Forms + SEO
- Connect external form endpoint.
- Add JSON-LD, sitemap, robots, OG images.
- Add legal pages.

### Phase 4 — Assets + Polish
- Add optimized images.
- Add lazy loading.
- Add responsive checks.
- Fix Lighthouse issues.

### Phase 5 — GitHub Pages Deploy
- Add GitHub Actions workflow.
- Push to GitHub.
- Enable Pages from Actions.
- Add custom domain later if needed.

## 17. Antigravity Build Command Prompt
Use the prompts in `ANTIGRAVITY_PROMPTS.md` and the skills in `.antigravity/skills/`.
