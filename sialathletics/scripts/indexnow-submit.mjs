// Notifies IndexNow (Bing, Yandex, and other participating search engines)
// that our pages exist/changed, so they get crawled without waiting for a
// routine re-crawl. Run after any content deploy: `npm run indexnow`.
//
// URLs are read from the live sitemap rather than hardcoded, so adding a
// guide or blog post never leaves this script out of date.
const HOST = 'www.sialathletics.com';
const KEY = '2696eee2e47449c6b67f7a7530971fe5';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemapRes = await fetch(`https://${HOST}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Could not read sitemap: ${sitemapRes.status} ${sitemapRes.statusText}`);
  process.exit(1);
}

const xml = await sitemapRes.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('Sitemap contained no URLs — aborting.');
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URLs from the sitemap...`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`IndexNow response: ${res.status} ${res.statusText}`);
const text = await res.text();
if (text) console.log(text);

if (!res.ok) process.exit(1);
