// @flow

export const Section = {
  HOME: 0,
  CAREER: 1,
  PORTFOLIO: 2,
  BLOG: 3
}

export interface HeaderButtonData {
  key: int;
  name: string;
  link: string;
}

export const headerButtons: HeaderButtonData[] = [
  {key: Section.HOME, name: 'Home', link: '/'},
  {key: Section.CAREER, name: 'Career', link: '/'},
  {key: Section.PORTFOLIO, name: 'Portfolio', link: '/'},
  {key: Section.BLOG, name: 'Blog', link: '/'},
]
