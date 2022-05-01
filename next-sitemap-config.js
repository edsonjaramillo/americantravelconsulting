/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://americantravelconsulting.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
