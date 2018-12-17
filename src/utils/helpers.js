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

module.exports = {

  generateSlug(s) {
    return s.toLowerCase().replace(/ /g, '-')
  },

  getFormattedDate(s) {
    const components = s.split('-')
    const month = months[parseInt(components[1], 10)]
    const day = parseInt(components[2], 10) // This'll strip the zeroes

    return `${month} ${day}, ${components[0]}`
  }

}