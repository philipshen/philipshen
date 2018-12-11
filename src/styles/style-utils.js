import { css } from 'styled-components'

export const media = {
  phone: (...args) => css`
    @media (max-width: 540px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) and (min-width: 541px) {
      ${css(...args)}
    }
  `,
  handheld: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  computer: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media(min-width: 769px) and (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: 1025px) and (max-width: 1439px) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 1440px) {
      ${css(...args)}
    }
  `,
  verylarge: (...args) => css`
    @media (min-width: 1920px) {
      ${css(...args)}
    }
  `
}