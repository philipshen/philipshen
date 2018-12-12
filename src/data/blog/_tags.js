// @flow
export interface Tag {
  name: string;
  color: string;
  subtags?: string[];
}

const tagColors = {
  cyan: "#38E0C8",
  lightblue: "#40A5DD",
  blue: "#485ADD",
  violet: "#8046DD",
  purple: "#CD43DD",
  magenta: "#E444A4",
  red: "#E4465D",
  orange: "#E37C4D",
  yellow: "#E0C94E",
  darkgreen: "#2E672E",
  parakeet: "#3AE17E"
}

const tags: Tag[] = {
  notes: {
    name: "notes",
    color: tagColors.blue
  },
  programming: {
    name: "programming",
    color: tagColors.purple,
    subtags: [
      "mobile"
    ]
  }
}

export default tags