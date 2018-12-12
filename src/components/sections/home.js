import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../styles/style-utils.js'
import { ChevronLeft } from '@material-ui/icons'

import Color from '../../styles/color'

const Container = styled.div`
  /* Should be fixed at max size, even if user's browser isn't filling entire screen height */
  height: 100vh;
  width: 100%;
  display: flex;

  clipPath {
    margin: auto;
  }

  ${media.handheld`
    flex-direction: column;
  `}
`

const ImageContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: visible;

  ${media.handheld`
    order: 2;
  `}

  ${media.tablet`
    height: 75%;
  `}
`

const BackgroundImage = styled(Img)`
  position: absolute;
  clip-path: url(#dragon);
  height: 100%;
  /* margin-top: 0; */
  align-content: center;
  align-items: center;
`

const MaskContainer = styled.div`
  position: absolute;

  svg {
    height: 0;
    width: 0;
    zIndex: -10;
  }

  /* Need to (1) scale up to right size and (2) translate to center of container */
  ${media.small`
    path {
      transform: translate(27vw, 35vh) scale(1.7);
    }
  `}

  ${media.medium`
    path {
      transform: translate(27vw, 35vh) scale(2.1);
    }
  `}

  ${media.large`
    path {
      transform: translate(27vw, 35vh) scale(2.4);
    }
  `}

  ${media.verylarge`
    path {
      transform: translate(27vw, 35vh) scale(2.7);
    }
  `}

  ${media.tablet`
    path {
      transform: translate(50vw, 22vh) scale(1.8);
    }
  `}

  ${media.phone`
    path {
      transform: translate(50vw, 20vh) scale(1.5)
    }
  `}
`

const IntroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 28vh;

  ${media.handheld`
    order: 1;
    align-items: center;
    justify-content: flex-end;
  `}

  ${media.phone`
    margin-top: 48px;
    margin-bottom: 12px;
    height: auto;
    justify-content: flex-start;
  `}
`

const Title = styled.h1`
  ${media.computer`
    font-size: 60px;
  `}

  ${media.large`
    font-size: 72px;
  `}

  ${media.tablet`
    font-size: 44px;
  `}

  ${media.phone`
    font-size: 32px;
  `}
`

const Subtitle = styled.h1`
  font-weight: normal;

  ${media.computer`
    font-size: 24px;
  `}

  ${media.large`
    font-size: 28px;
  `}

  ${media.tablet`
    font-size: 21px;
  `}

  ${media.phone`
    font-size: 18px;
  `}
`

// More styles in 'Container' because for some reason can't change them here
const DownArrow = styled(ChevronLeft)`
  position: absolute;
  color: ${Color.primary_color};
  left: 0;
  right: 0;
  margin: auto;
  transform: rotate(-90deg);

  ${media.computer`
    bottom: 2vh;
    height: 4vw !important;
    width: 6vw !important;
  `}

  ${media.handheld`
    bottom: 1vh;
    height: 30px !important;
    width: 45px !important;
  `}
`

class Home extends Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: {absolutePath: {regex: "src/images/home/"}}) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 1815) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const image = data.allFile.edges[0].node.childImageSharp.fluid

          return (
            <Container>
              <ImageContainer>
                <MaskContainer>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="dragon">
                    {/* base size ~ 250px height */}
                      <path
                        d="M24.206,47.485C37.673,72.178,3.991,71.165-14.007,81.528c-20.511,9.41-50.9,27.719-52.408,63.234,8.9-33.153,33.371-38.692,36.887-39.089-11.221,6.127-10.029,13.193-6.456,15.287,1.885.539,7.508-.991,7.777-.72.506.367,1.385-1.346,2.526,15.341,2.375-9.627,7.554-10.14,9.728-7.882,2.632,1.822-16.063,38.2-9.919,49.249,7.08-60.018,63.619-50.727,84.539-78.586,2.085,1.914-8.035,15.892-18.32,30.4C65.1,107.456,76.922,85.791,76.56,59.032c-.475-2.176-3.743-7.624-4.738-7.707-2.714-.147-1.5,36.477-7.778,42.688,7.211-46.7-3.256-46.279,0-45.535,9.3-1.889.462-11.438-4.7-19.69,10.7,6.282-6.737-14.175-7.517-16.742,7.558,7.148,19.662,22.541,20.956,22.723a56.552,56.552,0,0,0-9.957-20.758c.474-.24,9.907,9.728,16.82,16.565C73.734,6.592,53.723,2.112,53.89,1.12,55.053-2.3,80.349,3.835,86.443,5.063,77.709-.913,72.65-2.607,67.6-3.618,45.178-8,30.893-20.475,32.331-23.1c2.3-2.33,11.426-.612,17.756,0C39.044-30.709,32.4-34.911,19.033-34.38c5.115-1.982,3.247-.69,9.649-2.892C22.926-38.4,13.325-39.113,4.179-33.2c.31-3.037,4.244-5,7.915-6.568C8.579-40.625,1.67-36.843-4.161-33.2c1.3-3.15.826-.652,5.4-11.443-17.069,21.7-26.417,11.957-10.31,0-18.364,5.369-8.564,10.488-21.99,17.1-.718-5.827-.629-5.042-.472-15.34,3.433-5.438,14.942-25.828,11.35-29.026-3.162-2.653-9.5,16.5-16.167,24.832C-38.8-38.843-39.375-17.9-40.18-18.127c-1.171.291-4.658-18.286-6.746-17.37-4.184.251,5.546,16.177-4.939,40.24-9.018,6.406-3.88-.032-9.787,11.779-13.743,4.809-13.094,5.44-21.376,8.321-4.513-1.851-21.277,5.964,16.121,25.055-5.244-3.376-11.205-9.209-10.5-12.725,10.569-7.257,28.083-12.466,33.712-15.62,4.477-.316,11.278-7.776,17.438,2.788C-28.251,41.308-46.735,30.334-54.578,49.9c.211,1.412,3.746-5.051,13.294-8.747,10.426-2.179,16.1-6.725,17.221-11.342C-23.1,40.584-38.083,51.6-46.091,59.488c-3.187-.931-7.014-5.125-7.36-4.061-.424,2.844,2.262,3.357.274,11.263-.014,1.016,3.274,3.489,3.786,9.47,1.579-3.509,1.388-5.954,1.588-5.923.355.054,3.13,6.064,6.023,7.925-7.074-10.115,9.521.886,11.277,1.519-4.2-3.013-6.87-10.745-6.539-10.943,8.2,4.635,12.207,4.616,18.418,4.257C-30.543,71.852-35.07,61.62-29.7,57.5-17.3,47.327-13.945,29.894,1.431,31.924a26.977,26.977,0,0,0,10.5.787C10.373,31.916,7.1,30.1,7.16,29.721c19.077.045,17.142,10.06,7.706,24C20.078,51.721,25.165,46.21,24.206,47.485ZM-41.391.207c1.022.133.5,3.635.5,4.052-2.911,4.16-6.5,5.768-9.05,6.058C-51.172,7.327-42.413.074-41.391.207Z"
                      />
                    </clipPath>
                  </svg>
                </MaskContainer>
                <BackgroundImage
                  fluid={image}
                  // mask={mask}
                />
              </ImageContainer>
              <IntroContent>
                <Title>Hi, I'm Phil</Title>
                <Subtitle>I'm a programmer in the bay area.</Subtitle>
              </IntroContent>
              <DownArrow className="downArrow" />
            </Container>
          )
        }}
      />
    )
  }

}

export default Home