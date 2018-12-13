import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

export const Container = styled.div`
  min-height: 100vh;
  padding-left: 3vw;
  padding-right: 3vw;

  h1 {
    margin-bottom: ${rhythm(3/2)};
  }
`