// Should just pull the tools from experiences... right? Right.
import { SkillLevel } from '../../models/skill-level'

const tools = new Map([
  ["swift-ios", {
    key: "swift-ios",
    name: "Swift for iOS Development",
    level: SkillLevel.MASTER
  }],
  ["typescript", {
    key: "typescript",
    name: "Typescript",
    level: SkillLevel.MASTER
  }],
  ["react-native", {
    key: "react-native",
    name: "React Native",
    level: SkillLevel.MASTER
  }],
  ["jest", {
    key: "jest",
    name: "Jest",
    level: SkillLevel.ADVANCED
  }],
  ["firebase", {
    key: "firebase",
    name: "Firebase",
    level: SkillLevel.ADVANCED
  }],
  ["objc-ios", {
    key: "objc-ios",
    name: "Objective-C for iOS Development",
    level: SkillLevel.ADEPT
  }],
  ["metal", {
    key: "metal",
    name: "Metal",
    level: SkillLevel.COMPETENT
  }],
  ["react", {
    key: "react",
    name: "React JS",
    level: SkillLevel.ADVANCED
  }],
  ["gatsby", {
    key: "gatsby",
    name: "Gatsby JS",
    level: SkillLevel.ADEPT
  }]
])

export default tools