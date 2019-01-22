// Start date, end date (null if still going), type
const { ExperienceType } = require('../../models/experience-type')

/*
{
  type: ExperienceType. For filtering and such
  organization: String (name of the organization)
  location: String
  start_date: Date
  end_date?: Date
  tools: String[]
  level: int. This is for UI calculations.
}
*/
module.exports = {
  "philipshen": {
    type: ExperienceType.SIDE_PROJECT,
    title: "philipshen.com",
    start_date: new Date(2018, 11, 4),
    end_date: new Date(2019, 0, 5),
    tools: ["gatsby", "react", "jest"],
    level: 3,
    description: `
      This site! It's a static site I built with Gatsby and hosted on Gitlab Pages.
      I hope you enjoy it! Something tells me there isn't a whole lot going around...
      but whatever. yabba dabba doo!
    `
  },
  "coast": {
    type: ExperienceType.SIDE_PROJECT,
    title: "Coast",
    location: "Shenzhen, China",
    start_date: new Date(2018, 4, 1),
    end_date: new Date(2019, 0, 10),
    tools: ["react-native", "typescript", "jest"],
    level: 2
  },
  "fantem": {
    type: ExperienceType.FULL_TIME,
    organization: "Fantem Technologies",
    title: "Software Engineer",
    location: "Shenzhen, China",
    start_date: new Date(2017, 9, 23),
    end_date: new Date(2018, 11, 21),
    tools: ["swift-ios", "metal", "objc-ios"],
    level: 0
  },
  "fantem-intern": {
    type: ExperienceType.FULL_TIME,
    organization: "Fantem Technologies",
    title: "Intern",
    location: "Shenzhen, China",
    start_date: new Date(2017, 6, 5),
    end_date: new Date(2017, 7, 7),
    tools: ["react-native, typescript"],
    level: 1
  },
  "joyon-kehel-weights": {
    type: ExperienceType.PART_TIME,
    organization: "Joy ON Toys",
    title: "Freelance iOS Developer",
    location: "Remote",
    start_date: new Date(2018, 8, 3),
    tools: ["swift-ios", "firebase"],
    level: 1
  },
  "bradfield-1": {
    type: ExperienceType.EDUCATION,
    organization: "Bradfield School of Computer Science",
    location: "San Francisco, California",
    start_date: new Date(2017, 8),
    end_date: new Date(2017, 11, 12),
    level: 1
  }
}