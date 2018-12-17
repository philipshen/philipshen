// interface Tag {
//   name: string;
//   color: string;
// }

const tagColors = {
  lightblue: "#40A5DD",
  blue: "#485ADD",
  violet: "#8046DD",
  purple: "#CD43DD",
  maroon: "#85144b",
  magenta: "#E444A4",
  red: "#C43F52",
  orange: "#E37C4D",
  gold: "#B9AB60",
  darkgreen: "#2E672E",
  green: "#0AA349"
}

const tags = {
  notes: {
    name: "notes",
    color: tagColors.blue
  },
  music: {
    name: "music",
    color: tagColors.lightblue
  },
  paper: {
    name: "paper",
    color: tagColors.maroon
  },
  game: {
    name: "game",
    color: tagColors.violet
  },
  mobile: {
    name: "mobile",
    color: tagColors.magenta
  },
  programming: {
    name: "programming",
    color: tagColors.purple
  },
  chinese: {
    name: "chinese",
    color: tagColors.gold,
  },
  tech: {
    name: "tech",
    color: tagColors.red,
  },
  blockchain: {
    name: "blockchain",
    color: tagColors.green
  },
  tutorial: {
    name: "tutorial",
    color: tagColors.orange
  },
  personal: {
    name: "personal",
    color: tagColors.darkgreen
  },
}

export default tags