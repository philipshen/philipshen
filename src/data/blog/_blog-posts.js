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
    date: "August 10, 2018",
    title: "Sweet Pandas Eating Sweets",
    tags: ["notes"],
    url: "/test-blog" 
  },
  {
    date: "September 18, 2018",
    title: "React Native LayoutAnimation",
    tags: ["programming:mobile"],
    url: "https://medium.com/@philipshen13/react-native-layoutanimation-267489b67a20",
    medium: true
  }
]