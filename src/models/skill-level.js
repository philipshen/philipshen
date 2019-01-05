const Color = require('../styles/color')

const SkillLevel = {
  NOOB: 0,
  COMPETENT: 1,
  INTERMEDIATE: 2,
  ADEPT: 3,
  ADVANCED: 4,
  MASTER: 5
}

const SkillLevelConfig = new Map([
  [SkillLevel.NOOB, {
    color: Color.noob_color,
    name: "Noob"
  }],
  [SkillLevel.COMPETENT, {
    color: Color.competent_color,
    name: "Competent"
  }],
  [SkillLevel.INTERMEDIATE, {
    color: Color.intermediate_color,
    name: "Intermediate"
  }],
  [SkillLevel.ADEPT, {
    color: Color.adept_color,
    name: "Adept"
  }],
  [SkillLevel.ADVANCED, {
    color: Color.advanced_color,
    name: "Advanced"
  }],
  [SkillLevel.MASTER, {
    color: Color.master_color,
    name: "Master"
  }],
])

module.exports = {
  SkillLevel,
  SkillLevelConfig
}