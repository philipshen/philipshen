export const Section = {
  HOME: 0,
  CAREER: 1,
  PORTFOLIO: 2,
  BLOG: 3,
  ABOUT: 4
}

// interface HeaderButtonData {
//   key: int;
//   name: string;
//   link: string;
// }

export const headerButtons = [
  {key: Section.HOME, name: 'Home', link: '/#'},
  {key: Section.CAREER, name: 'Career', link: '/#career'},
  {key: Section.PORTFOLIO, name: 'Portfolio', link: '/#portfolio'},
  {key: Section.BLOG, name: 'Blog', link: '/#blog'},
]

export const headerHeight = {
  computer: 72,
  phone: 44,
  tablet: 54,
}
