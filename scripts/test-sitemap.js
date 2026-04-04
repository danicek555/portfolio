const https = require("https");
const http = require("http");

async function testSitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const robotsUrl = `${siteUrl}/robots.txt`;

  console.log("🔍 Testing Sitemap and Robots.txt...\n");

  // Test sitemap
  try {
    console.log(`📋 Testing: ${sitemapUrl}`);
    const response = await fetch(sitemapUrl);

    if (response.ok) {
      const content = await response.text();
      const urlCount = (content.match(/<url>/g) || []).length;
      console.log(`✅ Sitemap found! Contains ${urlCount} URLs`);

      // Check for key URLs
      const hasHomepage = content.includes("/en") && content.includes("/cs");
      const hasCompetitions = content.includes("/competitions/");

      console.log(`   📍 Homepage locales: ${hasHomepage ? "✅" : "❌"}`);
      console.log(`   🏊 Competition pages: ${hasCompetitions ? "✅" : "❌"}`);
    } else {
      console.log(`❌ Sitemap not accessible: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Error accessing sitemap: ${error.message}`);
  }

  console.log("");

  // Test robots.txt
  try {
    console.log(`🤖 Testing: ${robotsUrl}`);
    const response = await fetch(robotsUrl);

    if (response.ok) {
      const content = await response.text();
      const hasSitemap = content.includes("Sitemap:");
      const allowsAll = content.includes("Allow: /");

      console.log(`✅ Robots.txt found!`);
      console.log(`   📋 References sitemap: ${hasSitemap ? "✅" : "❌"}`);
      console.log(`   🔓 Allows crawling: ${allowsAll ? "✅" : "❌"}`);
    } else {
      console.log(`❌ Robots.txt not accessible: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Error accessing robots.txt: ${error.message}`);
  }

  console.log("\n🎉 Sitemap test completed!");
  console.log("\n💡 To submit to search engines:");
  console.log(`   Google: https://search.google.com/search-console`);
  console.log(`   Bing: https://www.bing.com/webmasters`);
}

// Run the test
testSitemap().catch(console.error);
