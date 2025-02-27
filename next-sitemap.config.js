/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://solace.com.tr', // Replace with your website URL
    generateRobotsTxt: true,          // (optional) Generate a robots.txt file
    sitemapSize: 7000,                // (optional) Limit the number of URLs per sitemap file
    exclude: ['/private/*', '/tmp/*', '/admin/*'], // Exclude specific routes
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://solace.com.tr/my-custom-sitemap-1.xml',
        'https://solace.com.tr/my-custom-sitemap-2.xml',
      ],
    },
  }
  