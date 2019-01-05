import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rhythm } from '../../utils/typography'

import portfolioItems from '../../data/portfolio/projects'

import { Container } from './shared'

import PortfolioItemCell from '../portfolio-item-cell'

import Color from '../../styles/color'
import { media } from '../../styles/style-utils'

const Content = styled.div`
  display: flex;
`

const LeftContent = styled.div`
  flex: 1;
`

const PortfolioList = styled.div`
`

const ShowcaseContainer = styled.div`
  flex: 1;
  background-color: lightcyan;

  ${media.handheld`
    display: none;
  `}
`

const Showcase = styled.div`
  height: 80vh;
  width: 100%;
  flex: 1;
  background-color: ${Color.magenta_pink};
  border-radius: 8px;
`

const Title = styled.h1`
  margin-bottom: ${rhythm(1/2)} !important;
`

const Subtitle = styled.h5`
  font-weight: normal;
  color: ${Color.subtitle_text};
`

const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.h5`
  border: 2px solid ${Color.dark_text};
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: ${rhythm(1/4)};
  padding-bottom: ${rhythm(1/4)};
  margin-right: 12px;
  font-weight: normal;

  color: ${props => props.selected ? 'white' : Color.dark_text};
  background-color: ${props => props.selected ? Color.dark_text : 'white'};
  cursor: pointer;
`

export default class Portfolio extends Component {

  render() {
    console.log(this.props.colorReversed)

    return (
      <Container>
        <Title>Portfolio</Title>
        <Subtitle>
          Here's a little gallery for me to showcase my work...projects completed, art made, all that stuff.
        </Subtitle>
        <Content>
          <LeftContent>
            <ButtonsContainer>
              <Button selected>
                Projects
              </Button>
              <Button>
                Artwork
              </Button>
            </ButtonsContainer>
            <PortfolioList>
              {
                portfolioItems.map(item => (
                  <PortfolioItemCell item={item} key={item.key} />
                ))
              }
            </PortfolioList>
          </LeftContent>
          <ShowcaseContainer>
            <Showcase></Showcase>
          </ShowcaseContainer>
        </Content>
      </Container>
    )
  }

}

Portfolio.propTypes = {
  colorReversed: PropTypes.bool
}