/*
  Can't use CommonJS interfaces b/c this file is used by gatsby-node.js, which uses
  ES6 module system. Messy.
*/
// interface BlogInfo {
//   date: string;
//   slug: string;
//   title: string;
//   tags: string[];
//   url: string;
//   fromMedium?: boolean;
// }

module.exports = [
  {
    date: "December 13, 2018",
    title: "Reflections on My Year in China",
    tags: ["personal"],
    url: "/reflections-on-my-year-in-china"
  },
  {
    date: "September 18, 2018",
    title: "React Native LayoutAnimation",
    tags: ["programming", "mobile"],
    url: "https://medium.com/@philipshen13/react-native-layoutanimation-267489b67a20",
    medium: true
  },
  {
    date: "August 7, 2018",
    title: "Talking Tech in Chinese",
    tags: ["tech", "chinese"],
    url: "https://medium.com/@philipshen13/talking-tech-in-chinese-c3e8991923a7",
    medium: true
  },
  {
    date: "July 17, 2018",
    title: "Monero Part 2: How It Works",
    tags: ["tech", "blockchain"],
    url: "https://medium.com/@philipshen13/monero-part-2-how-it-works-983a6344bd58",
    medium: true
  },
  {
    date: "July 17, 2018",
    title: "Monero Part 1: Key Concepts",
    tags: ["tech", "blockchain"],
    url: "https://medium.com/@philipshen13/monero-part-1-key-concepts-3671186016c6",
    medium: true
  },
  {
    date: "July 6, 2018",
    title: "A Short Introduction to gRPC",
    tags: ["programming", "tech"],
    url: "https://medium.com/@philipshen13/a-short-introduction-to-grpc-419b620e2177",
    medium: true
  },
  {
    date: "June 28, 2018",
    title: "Cocos Creator Tutorial: The Cannon 2, Part 3",
    tags: ["tutorial", "programming", "game"],
    url: "https://medium.com/@philipshen13/cocos-creator-tutorial-the-cannon-2-part-3-cfa70310d025",
    medium: true
  },
  {
    date: "June 24, 2018",
    title: "Cocos Creator Tutorial: The Cannon 2, Part 2",
    tags: ["tutorial", "programming", "game"],
    url: "https://medium.com/@philipshen13/cocos-creator-tutorial-the-cannon-2-part-2-ec12a555eb6",
    medium: true
  },
  {
    date: "June 16, 2018",
    title: "Cocos Creator Tutorial: The Cannon 2, Part 1",
    tags: ["tutorial", "programming", "game"],
    url: "https://medium.com/@philipshen13/cocos-creator-tutorial-the-cannon-2-part-1-3f4d2cc10380",
    medium: true
  },
  {
    date: "June 14, 2018",
    title: "How Ethereum Works",
    tags: ["tech", "blockchain"],
    url: "https://medium.com/@philipshen13/ethereum-7e0c8fc47f74",
    medium: true
  },
  {
    date: "May 22, 2018",
    title: "How Bitcoin Works",
    tags: ["tech", "blockchain"],
    url: "https://medium.com/@philipshen13/bitcoin-explained-1823f1f7c95e",
    medium: true
  },
  {
    date: "April 11, 2018",
    title: "My Thoughts on Weezer",
    tags: ["notes", "music"],
    url: "/weezer"
  },
  {
    date: "April 11, 2018",
    title: "My Thoughts on The Killers",
    tags: ["notes:artist"],
    url: "/the-killers"
  },
  {
    date: "April 11, 2018",
    title: "My Thoughts on Pink Floyd",
    tags: ["notes:artist"],
    url: "/pink-floyd"
  }
]