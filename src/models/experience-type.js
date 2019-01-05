const Color = require('../styles/color')

const ExperienceType = {
  FULL_TIME: 0,
  PART_TIME: 1,
  SIDE_PROJECT: 2,
  VOLUNTEER: 3,
  EDUCATION: 4,
  AWARD: 5
}

const ExperienceTypeConfig = new Map([
  [ExperienceType.FULL_TIME, {
    name: "Full time Work",
    color: Color.magenta
  }],
  [ExperienceType.PART_TIME, {
    name: "Part time Work",
    color: Color.orange
  }],
  [ExperienceType.SIDE_PROJECT, {
    name: "Side project",
    color: Color.ruby
  }],
  [ExperienceType.VOLUNTEER, {
    name: "Volunteering",
    color: Color.green
  }],
  [ExperienceType.EDUCATION, {
    name: "Education",
    color: Color.cerulean,
  }],
  [ExperienceType.AWARD, {
    name: "Award",
    color: Color.olive
  }]
])

module.exports = {
  ExperienceType,
  ExperienceTypeConfig
}