# Asset Manifest — Apex Immigration Canada

This project is fully structured with lightweight, accessible vector (SVG) placeholders to prevent broken images, speed up rendering, and remain legally safe prior to the collection of custom branding/photography assets.

---

## 1. Global Visual Assets

| Asset Path | Component/File Reference | Recommended Specifications | Purpose / Replacement Guide |
| :--- | :--- | :--- | :--- |
| `public/assets/logo.svg` | [Header.astro](file:///d:/websites/bbcimmigration/src/components/Header.astro) | SVG vector logo (light text, gold icon) | Header logo displayed on navy/dark headers. Replace with your customized SVG brand mark. |
| `public/assets/logo-dark.svg` | [Footer.astro](file:///d:/websites/bbcimmigration/src/components/Footer.astro) | SVG vector logo (dark text, gold icon) | Alternative logo for light-background placements if needed. |
| `public/assets/favicon.svg` | [SEO.astro](file:///d:/websites/bbcimmigration/src/components/SEO.astro) | SVG icon | Web browser tab icon. Replace with your brand's logomark. |
| `/assets/og-image.jpg` | [SEO.astro](file:///d:/websites/bbcimmigration/src/components/SEO.astro) | 1200 x 630 px (JPEG/PNG) | Social media sharing banner (OpenGraph/Twitter). Replace with a customized banner representing the Barrie office or team. |

---

## 2. Page & Service Inline Placeholders

For optimal performance and zero dependency overhead, page-specific and service-specific visuals are embedded as inline components. You can swap these with standard `<img>` tags pointing to optimized images:

### 2.1 Services Detail Visuals
- **Component File**: [ServiceLayout.astro:L58-70](file:///d:/websites/bbcimmigration/src/layouts/ServiceLayout.astro#L58-L70)
- **Current Setup**: Rendered inline as a responsive SVG with the service title dynamically centered.
- **How to Replace**: Replace the `<svg>` node inside `.media-placeholder` with:
  ```html
  <img 
    src={`/assets/images/services/${service.slug}.webp`} 
    alt={service.title} 
    loading="lazy" 
    class="responsive-image"
  />
  ```

### 2.2 About Page Director Banner
- **Component File**: [about-us.astro:L57-71](file:///d:/websites/bbcimmigration/src/pages/about-us.astro#L57-L71)
- **Current Setup**: Rendered as an inline profile avatar silhouette SVG with name overlay details.
- **How to Replace**: Replace the `<svg>` node inside `.director-image-placeholder` with:
  ```html
  <img 
    src="/assets/images/director-jane-doe.webp" 
    alt="Jane Doe, Managing Director" 
    loading="lazy" 
    class="director-profile-photo"
  />
  ```

### 2.3 Team Members Avatars
- **Component File**: [about-us.astro:L91-104](file:///d:/websites/bbcimmigration/src/pages/about-us.astro#L91-L104)
- **Current Setup**: Displays a dynamically colored circular avatar with initials.
- **How to Replace**: Replace the `<svg>` node inside `.team-avatar-placeholder` with:
  ```html
  <img 
    src={`/assets/images/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.webp`} 
    alt={member.name} 
    loading="lazy" 
    class="team-member-avatar"
  />
  ```

---

## 3. Recommended Asset Structure
If substituting vector placeholders with web-optimized image files (preferably `.webp` or `.jpg` formatted to 80% quality), organize them as follows:

```txt
public/
  assets/
    logo.svg
    logo-dark.svg
    favicon.svg
    og-image.jpg
    images/
      director-jane-doe.webp
      team/
        john-smith.webp
        sarah-connor.webp
      services/
        visitor-visa.webp
        study-abroad.webp
        business-visa.webp
        express-entry.webp
        provincial-nominee-program.webp
        business-immigration.webp
        skilled-immigration.webp
        family-immigration.webp
        closed-work-permit-lmia.webp
        spousal-open-work-permit.webp
        bridging-open-work-permit.webp
        post-graduate-work-permit.webp
        family-spousal-sponsorships.webp
        self-employed-program.webp
        caregiver-program.webp
        asylum-seekers.webp
        renewal-and-replacement-of-pr-card.webp
        appeal.webp
        citizenship-applications.webp
```
