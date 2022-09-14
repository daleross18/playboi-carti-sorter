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
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Magnolia",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Lookin",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "wokeuplikethis*",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Let It Go",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Half & Half",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "New Choppa",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Other Shit",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "NO.9",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "dothatshit!",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Lame N*gg*z",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Yah Mean",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Flex",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Kelly K",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
  {
    name: "Had 2",
    img: "self_titled.jpg",
    opts: {
      album: ['ST'],
      stage: []
    }
  },
];
