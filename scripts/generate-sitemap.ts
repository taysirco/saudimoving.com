import { writeFileSync } from 'fs'
import { cities, keywords } from '../lib/utils/data'

function generateSitemap() {
  const baseUrl = 'https://saudiamoving.com'
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Add homepage
  sitemap += `  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`

  // Add city pages
  cities.forEach(city => {
    sitemap += `  <url>
    <loc>${baseUrl}/${encodeURIComponent(city)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`

    // Add service pages for each city
    keywords.forEach(service => {
      sitemap += `  <url>
    <loc>${baseUrl}/${encodeURIComponent(city)}/${encodeURIComponent(service)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`
    })
  })

  sitemap += '</urlset>'

  writeFileSync('public/sitemap.xml', sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap() 