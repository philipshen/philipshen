// @flow
export interface Tag {
  name: string;
  color: string;
  subtags?: string[];
}

const tagColors = {
  lightblue: "#40A5DD",
  blue: "#485ADD",
  violet: "#8046DD",
  purple: "#CD43DD",
  magenta: "#E444A4",
  red: "#C43F52",
  orange: "#E37C4D",
  gold: "#B9AB60",
  darkgreen: "#2E672E",
  parakeet: "#3AE17E"
}

const tags: Tag[] = {
  notes: {
    name: "notes",
    color: tagColors.blue,
    subtags: [
      "artist"
    ]
  },
  programming: {
    name: "programming",
    color: tagColors.purple,
    subtags: [
      "mobile",
      "games"
    ]
  },
  china: {
    name: "china",
    color: tagColors.gold,
    subtags: [
      "language"
    ]
  },
  tech: {
    name: "tech",
    color: tagColors.red,
    subtags: [
      "blockchain"
    ]
  },
  tutorial: {
    name: "tutorial",
    color: tagColors.orange
  },
  personal: {
    name: "personal",
    color: tagColors.darkgreen
  }
}

export default tags