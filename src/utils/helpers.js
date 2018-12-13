module.exports = {

  generateSlug(s) {
    return s.toLowerCase().replace(/ /g, '-')
  }

}