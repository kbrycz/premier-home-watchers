export default async function sitemap() {
  const base = "https://premierhomewatchers.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ad/facebook`, changeFrequency: "monthly", priority: 0.3 },
  ];
}


