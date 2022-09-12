dataSetVersion = "2022-09-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album/Type",
    key: "series",
    tooltip: "Check this to restrict to certain albums or singles/leaks.",
    checked: false,
    sub: [
      { name: "Self Titled", tooltip: "01 - Self Titled", key: "ST" },
      { name: "Die Lit", tooltip: "02 - Die Lit", key: "DL" },
      { name: "Whole Lotta Red", tooltip: "03 - Whole Lotta Red", key: "WLR" },
      { name: "Non-Album Singles", tooltip: "04 - Singles", key: "NAS" },
      { name: "Leaks", tooltip: "05 - Leaks", key: "LKs" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Location",
    img: "c5DqpgX.png",
    opts: {
      album: ['ST'],
      stage: []
    }
  }
];
