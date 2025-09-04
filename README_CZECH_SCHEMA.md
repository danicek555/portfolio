# Czech Schema.org Implementation Guide

## 🇨🇿 Multilingual Schema.org for Czech Website

This document explains the implementation of **Czech-localized Schema.org structured data** for better SEO targeting in Czech search results.

## 🎯 What Was Implemented

### **Locale-Aware Schema Generation**

All schema functions now accept a `locale` parameter that generates appropriate Czech or English content:

```typescript
// English schema
const englishSchema = generatePersonSchema("en");

// Czech schema
const czechSchema = generatePersonSchema("cs");
```

### **Czech Translations Applied**

#### **Person Schema (Czech)**

```json
{
  "@type": "Person",
  "name": "Daniel Mitka",
  "description": "Daniel Mitka, 16letý elitní plavec ze SK Motorlet Praha, dosáhl pozoruhodných úspěchů v českém plavání. Český juniorský mistr v plavání a medailista na mistrovství světa v záchranářství.",
  "jobTitle": [
    "Profesionální sportovec",
    "Full-Stack vývojář",
    "Závodní plavec"
  ],
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Profesionální sportovec",
      "occupationalCategory": "Sport a rekreace",
      "skills": ["Plavání", "Záchranářství", "Bezpečnost na vodě"]
    }
  ],
  "award": [
    "Český juniorský mistr v plavání",
    "Stříbrná medaile - Mistrovství světa v záchranářství Austrálie 2023"
  ],
  "inLanguage": "cs-CZ"
}
```

#### **Competition Events (Czech)**

```json
{
  "@type": "SportsEvent",
  "name": "České národní mistrovství v plavání Podolí 2024",
  "description": "Národní soutěž na prestižním plaveckém komplexu Podolí v Praze.",
  "sport": "Plavání",
  "organizer": {
    "name": "Český svaz plavání"
  },
  "location": {
    "name": "Plavecký komplex Podolí",
    "addressLocality": "Praha",
    "addressCountry": "Česká republika"
  },
  "inLanguage": "cs-CZ"
}
```

## 🏊‍♂️ Competition Pages with Czech Schema

### **Czech Youth Nationals 2024**

- **English**: "Czech National Swimming Championship Podolí 2024"
- **Czech**: "České národní mistrovství v plavání Podolí 2024"

### **Australia World Championships 2023**

- **English**: "Australia Youth Swimming Championship 2023"
- **Czech**: "Mistrovství světa v záchranářství Austrálie 2023"

### **Slovakia Cup 2024**

- **English**: "Slovakia Cup Šamorín 2024"
- **Czech**: "Slovenský pohár Šamorín 2024"

## 📈 SEO Benefits for Czech Market

### **Czech Search Optimization**

- ✅ Better rankings for Czech keywords like "český plavec", "mistrovství plavání"
- ✅ Improved local search visibility in Czech Republic
- ✅ Rich snippets in Czech search results
- ✅ Voice search optimization for Czech queries

### **Google Knowledge Graph (Czech)**

- 🇨🇿 Czech entity recognition for "Daniel Mitka"
- 🏊‍♂️ Sport-specific knowledge in Czech language
- 🏆 Achievement descriptions in Czech
- 📍 Location data with Czech place names

### **Search Query Examples**

Czech users can now find better results for:

- "Daniel Mitka český plavec"
- "mistrovství světa záchranářství česká republika"
- "plavecké závody Podolí Praha"
- "slovenský pohár plavání"

## 🛠️ Implementation Details

### **Automatic Locale Detection**

```typescript
// Pages automatically get locale from URL params
export default async function CompetitionPage({ params }) {
  const { locale } = await params;

  // Generate schema with appropriate language
  const schema = generateSportsEventSchema(eventData, locale);
}
```

### **Fallback Strategy**

- If Czech translation missing → Falls back to English
- Maintains functionality across all pages
- Gradual enhancement approach

### **Language Codes Used**

- **Czech**: `cs-CZ` (proper language-country code)
- **English**: `en-US` (default international)

## 🔍 Testing Czech Schema

### **Google Rich Results Test (Czech)**

```
https://search.google.com/test/rich-results
Enter: https://danielmitka.com/cs/competitions/czech-youth-nationals-2024
```

### **Schema Validator (Czech Content)**

```
https://validator.schema.org/
Test Czech pages to verify proper language targeting
```

### **Browser Console Test**

```javascript
// Extract Czech schema
const czechSchemas = document.querySelectorAll(
  'script[type="application/ld+json"]'
);
czechSchemas.forEach((script) => {
  const data = JSON.parse(script.innerHTML);
  console.log("Language:", data.inLanguage);
  console.log("Czech Content:", data);
});
```

## 📊 Expected Czech SEO Results

### **Short Term (1-4 weeks)**

- ✅ Czech rich snippets appear
- ✅ Improved Czech keyword targeting
- ✅ Better local search visibility

### **Medium Term (1-3 months)**

- 🇨🇿 Czech Knowledge Graph entries
- 🏊‍♂️ Sport authority in Czech market
- 📈 Increased Czech organic traffic

### **Long Term (3-6 months)**

- 🥇 Top Czech swimming athlete recognition
- 🗣️ Czech voice search integration
- ⭐ Featured snippets for Czech queries

## 🎯 Competitive Advantage

### **First-Mover Benefits**

- Most Czech athletes don't have proper Schema.org
- Advanced multilingual SEO implementation
- Professional international presence

### **Market Targeting**

- **Czech Republic**: Local swimming community
- **Slovakia**: Cross-border competitions
- **International**: English-speaking audience

## 🔄 Maintenance & Updates

### **Adding New Competitions**

```typescript
// Always include locale parameter
const eventSchema = generateSportsEventSchema(
  {
    name: locale === "cs" ? "České mistrovství" : "Czech Championship",
    description: locale === "cs" ? "Popis v češtině" : "English description",
    // ... other properties
  },
  locale
);
```

### **Translation Management**

- Czech translations stored in schema utilities
- Consistent with existing `messages/cs.json`
- Easy to extend with new content

---

**Result**: Your website now speaks Czech to Czech search engines! 🇨🇿🏊‍♂️
