// Start date, end date (null if still going), type
import { ExperienceType } from '../../models/experience-type'

const experiences = {
  fantem: {
    type: ExperienceType.FULL_TIME,
    organization: "Fantem Technologies",
    location: "Shenzhen, China",
    start_date: new Date(2017, 9, 23),
    end_date: new Date(2018, 11, 21),
    tools: ["swift-ios", "metal", "objc-ios"]
  },
  "fantem-intern": {
    type: ExperienceType.FULL_TIME,
    organization: "Fantem Technologies",
    location: "Shenzhen, China",
    start_date: new Date(2017, 6, 5),
    end_date: new Date(2017, 7, 7),
    tools: ["react-native, typescript"]
  },
  "joyon-kehel-weights": {
    type: ExperienceType.PART_TIME,
    organization: "Joy ON Toys",
    location: "Remote",
    start_date: new Date(2018, 8, 3),
    tools: ["swift-ios", "firebase"]
  },
  "bradfield-1": {
    type: ExperienceType.EDUCATION,
    organization: "Bradfield School of Computer Science",
    location: "San Francisco, California",
    start_date: new Date(2017, 8),
    end_date: new Date(2017, 11, 12)
  }
}

export default experiences