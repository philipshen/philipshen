// Should just pull the tools from experiences... right? Right.
const { SkillLevel } = require('../../models/skill-level')

const tools = new Map([
  ["swift-ios", {
    key: "swift-ios",
    name: "Swift for iOS Development",
    level: SkillLevel.MASTER
  }],
  ["react-native", {
    key: "react-native",
    name: "React Native",
    level: SkillLevel.MASTER
  }],
  ["typescript", {
    key: "typescript",
    name: "Typescript",
    level: SkillLevel.ADVANCED
  }],
  ["javascript", {
    key: "javascript",
    name: "Javascript",
    level: SkillLevel.ADVANCED
  }],
  ["firebase", {
    key: "firebase",
    name: "Firebase",
    level: SkillLevel.ADVANCED
  }],
  ["react", {
    key: "react",
    name: "React JS",
    level: SkillLevel.ADVANCED
  }],
  ["jest", {
    key: "jest",
    name: "Jest",
    level: SkillLevel.ADEPT
  }],
  ["objc-ios", {
    key: "objc-ios",
    name: "Objective-C for iOS Development",
    level: SkillLevel.ADEPT
  }],
  ["gatsby", {
    key: "gatsby",
    name: "Gatsby JS",
    level: SkillLevel.ADEPT
  }],
  ["metal", {
    key: "metal",
    name: "Metal",
    level: SkillLevel.COMPETENT
  }],
])

module.exports = tools