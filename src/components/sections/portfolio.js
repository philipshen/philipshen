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
  margin-left: 40px;

  ${media.handheld`
    display: none;
  `}
`

// const Showcase = styled.div`
//   height: 80vh;
//   width: 100%;
//   flex: 1;
//   background-color: ${Color.magenta_pink};
//   border-radius: 8px;
//   padding-top: ${rhythm(1)};
//   padding-left: 16px;
//   padding-right: 16px;
// `

// const ShowcaseTitleContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${rhythm(1/2)};

//   h2 {
//     color: white;
//     margin-bottom: 0;
//   }
// `

// const ShowcaseDate = styled.h4`
//   font-weight: normal;
//   color: white;
//   margin-bottom: 0;
// `

// const ShowcaseDescription = styled.p`
//   color: white;
//   font-size: ${rhythm(7/8)};
//   line-height: ${rhythm(5/4)};
// `

// const ShowcaseFooting = styled.h6`
//   font-weight: normal;
//   color: white;
//   opacity: 0.8;
// `

const Title = styled.h1`
  margin-bottom: ${rhythm(1/2)} !important;
`

const Subtitle = styled.h5`
  font-weight: normal;
  color: ${Color.subtitle_text};
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: ${rhythm(1/2)};
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

const PortfolioContainer = styled(Container)`
  /* Use the colorReversed prop here to reverse the colors! */
`

export default class Portfolio extends Component {

  render() {
    console.log(this.props.colorReversed)

    return (
      <PortfolioContainer colorReversed={this.props.colorReversed}>
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
            {/* <Showcase>
              <ShowcaseTitleContainer>
                <h2>Hello There</h2>
                <ShowcaseDate>
                  October 12, 2018
                </ShowcaseDate>
              </ShowcaseTitleContainer>
              <ShowcaseDescription>
                This website! I made it with Loren Epsom dolor sit amen, connector apidigind in vilpitate varies posture. Cras sit amen bible bel bel eros. His premium feels nigh. Subsendisse Nic
              </ShowcaseDescription>
              <ShowcaseFooting>
                Skills: React, GatsbyJS, Jest
              </ShowcaseFooting>
            </Showcase> */}
          </ShowcaseContainer>
        </Content>
      </PortfolioContainer>
    )
  }

}

Portfolio.propTypes = {
  colorReversed: PropTypes.bool
}