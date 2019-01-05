const { SkillLevel } = require('../../models/skill-level')

const skills = new Map([
  ["ios-dev", {
    key: "ios-dev",
    name: "iOS Development",
    level: SkillLevel.MASTER
  }],
  ["mandarin", {
    key: "mandarin",
    name: "Mandarin Chinese",
    level: SkillLevel.ADVANCED
  }],
  ["frontend", {
    key: "frontend",
    name: "Frontend Web Development",
    level: SkillLevel.INTERMEDIATE
  }],
  ["backend", {
    key: "backend",
    name: "Backend Web Development",
    level: SkillLevel.COMPETENT
  }]
])

module.exports = skills