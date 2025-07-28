# Schema.org Implementation Documentation

## 🎯 Overview

This document outlines the comprehensive Schema.org JSON-LD structured data implementation for Daniel Mitka's portfolio website. The implementation follows Google's best practices and enhances SEO visibility for athlete profiles, swimming competitions, and portfolio content.

## 📋 What Was Implemented

### 1. **Person/Athlete Schema** (`src/lib/schema.ts`)

- **Type**: `["Person", "Athlete"]`
- **Coverage**: Daniel Mitka's profile as both athlete and developer
- **Includes**: Awards, sports, skills, social profiles, organizational memberships

### 2. **WebSite Schema** (`src/app/layout.tsx`)

- **Type**: `WebSite`
- **Coverage**: Main website information with search functionality
- **Includes**: Multi-language support, publisher information

### 3. **SportsEvent Schema** (All competition pages)

- **Type**: `SportsEvent`
- **Coverage**: Each swimming competition with detailed event information
- **Includes**: Locations, dates, awards, organizers, participants

### 4. **Place Schema** (Embedded in events)

- **Type**: `SportsActivityLocation`
- **Coverage**: Competition venues with geographic coordinates
- **Includes**: Addresses, GPS coordinates, venue details

### 5. **Organization Schema** (Swimming federations)

- **Type**: `SportsOrganization`
- **Coverage**: Czech Swimming Federation, lifesaving associations
- **Includes**: Country affiliations, organizational structure

## 🏊‍♂️ Competition-Specific Schemas

### Czech Youth Nationals 2024 (Podolí)

```json
{
  "@type": "SportsEvent",
  "name": "Czech National Swimming Championship Podolí 2024",
  "location": "Podolí Swimming Complex, Prague",
  "sport": "Swimming",
  "level": "National"
}
```

### Australia Youth Championship 2023

```json
{
  "@type": "SportsEvent",
  "name": "Australia Youth Swimming Championship 2023",
  "awards": ["Silver Medal - Mixed Rescue Event"],
  "location": "Gold Coast Aquatic Centre",
  "level": "International"
}
```

### Slovakia Cup 2024 (Šamorín)

```json
{
  "@type": "SportsEvent",
  "name": "Slovakia Cup Šamorín 2024",
  "location": "Šamorín Aquatic Center",
  "level": "International"
}
```

### Additional Competitions

- **Plzen Regional Championship 2024** (Regional level)
- **Team Championship Finals Ostrava 2025** (National level)

## 🔧 Testing Your Schema.org Implementation

### 1. **Google Rich Results Test**

- Visit: [Google Rich Results Test](https://search.google.com/test/rich-results)
- Enter your URL: `https://danielmitka.vercel.app`
- Check for validation errors and rich result eligibility

### 2. **Google Structured Data Testing Tool**

- Visit: [Schema Markup Validator](https://validator.schema.org/)
- Paste your page URL or HTML source
- Verify all schema types are properly structured

### 3. **Manual Inspection**

```bash
# View page source and search for JSON-LD
curl -s https://danielmitka.vercel.app | grep -A 50 "application/ld+json"
```

### 4. **Browser DevTools**

```javascript
// In browser console - extract all JSON-LD
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
scripts.forEach((script, index) => {
  console.log(`Schema ${index + 1}:`, JSON.parse(script.innerHTML));
});
```

## 📈 SEO Benefits

### 1. **Enhanced Search Results**

- Rich snippets for athlete profiles
- Event information in search results
- Star ratings and achievement badges
- Location pins for competition venues

### 2. **Knowledge Graph Integration**

- Google Knowledge Panel eligibility
- Entity recognition for "Daniel Mitka"
- Sports achievement verification
- Career timeline integration

### 3. **Voice Search Optimization**

- Structured answers for "Who is Daniel Mitka?"
- Competition facts for voice queries
- Award and achievement information

### 4. **Social Media Enhancement**

- Better link previews with structured data
- Platform-specific rich cards
- Achievement highlights in shares

## 🧪 Validation Checklist

### ✅ **Global Schema** (Root Layout)

- [ ] WebSite schema validates
- [ ] Person schema includes all required fields
- [ ] Social media profiles are properly linked
- [ ] Search functionality is configured

### ✅ **Competition Pages**

- [ ] Each event has SportsEvent schema
- [ ] Location data includes coordinates
- [ ] Date formats are ISO 8601 compliant
- [ ] Awards and achievements are listed
- [ ] Organizer information is present

### ✅ **Portfolio Page**

- [ ] ProfilePage schema validates
- [ ] Breadcrumb navigation is structured
- [ ] Main entity points to person schema

## 🚀 Performance Impact

### Minimal Bundle Size

- Utility functions: ~3KB gzipped
- JSON-LD generation: Client-side processing
- No external dependencies

### SEO Processing

- Search engines process structured data asynchronously
- No impact on page load speed
- Enhanced indexing and understanding

## 🔄 Maintenance

### Adding New Competitions

1. Use `generateSportsEventSchema()` utility
2. Add event-specific data (dates, location, awards)
3. Include Script tag with unique ID
4. Test with validation tools

### Updating Athlete Information

1. Modify `generatePersonSchema()` in `src/lib/schema.ts`
2. Update awards, achievements, or affiliations
3. Changes automatically propagate to all pages

## 📊 Expected Results

### Short Term (1-4 weeks)

- Schema validation passes all tests
- Structured data appears in Google Search Console
- Rich results eligibility confirmed

### Medium Term (1-3 months)

- Enhanced search result appearances
- Knowledge Graph consideration
- Improved click-through rates

### Long Term (3-6 months)

- Authority recognition for swimming expertise
- Featured snippets for swimming queries
- Voice search answer integration

## 🆘 Troubleshooting

### Common Issues

1. **Validation Errors**: Check JSON syntax and required fields
2. **Missing Schema**: Verify Script tags are properly rendered
3. **Duplicate Properties**: Ensure unique IDs for multiple schemas

### Debug Commands

```bash
# Check if schema is present
curl -s https://danielmitka.vercel.app | grep "application/ld+json"

# Validate JSON syntax
node -e "console.log(JSON.parse(process.argv[1]))" "$(curl -s https://danielmitka.vercel.app | grep -A 100 'application/ld+json' | sed -n '2,/script/p' | sed '$d')"
```

## 📚 Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
- [JSON-LD Best Practices](https://json-ld.org/spec/latest/json-ld/)
- [Sports Schema Examples](https://schema.org/SportsEvent)

---

**Implementation Date**: January 2025  
**Next Review**: March 2025  
**Maintained By**: Development Team
