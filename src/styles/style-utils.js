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
  normal: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 1441px) {
      ${css(...args)}
    }
  `
}