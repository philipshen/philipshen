import { css } from 'styled-components'
import { headerHeight } from '../models/header-config'

export const media = {
  phone: (...args) => css`
    @media (max-width: 540px) {
      ${css(...args)}
    }
  `,
  notphone: (...args) => css`
    @media (min-width: 541px) {
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

export const snippets = {
  topDistanceHeader: (config = {padding: 0, negative: false}) => css`
    ${media.computer`
      top: ${config.negative && '-'}${headerHeight.computer + config.padding}px;
    `}

    ${media.tablet`
      top: ${config.negative && '-'}${headerHeight.tablet + config.padding}px;
    `}

    ${media.phone`
      top: ${config.negative && '-'}${headerHeight.phone + config.padding}px;
    `}
  `
}