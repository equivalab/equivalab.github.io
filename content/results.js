// Repository-only editing workflow: only repository collaborators can publish changes.
// Published entries are rendered on results.html; there is no public submission UI.
//
// Add an object using this shape:
// {
//   year: "2026",
//   type: "PUBLICATION", // PUBLICATION | PROJECT | OPEN SOURCE
//   titleZh: "中文标题",
//   titleEn: "English title",
//   authors: "Author One, Author Two",
//   venue: "Conference / Journal / Project",
//   links: [{ label: "Paper", url: "https://..." }]
// }

window.EQUIVA_RESULTS = [];
