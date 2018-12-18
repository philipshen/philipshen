const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
]

module.exports = {

  generateSlug(s) {
    return s.toLowerCase().replace(/ /g, '-')
  },
  
  // FROM THE BLOGPOST DATES
  getFormattedDate(s) {
    const components = s.split('-')
    const month = months[parseInt(components[1], 10)]
    const day = parseInt(components[2], 10) // This'll strip the zeroes

    return `${month} ${day}, ${components[0]}`
  },

  getShortMonth(month) {
    return shortMonths[month]
  }

}