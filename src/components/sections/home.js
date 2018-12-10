import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  /* Should be fixed at max size, even if user's browser isn't filling entire screen height */
  min-height: 100vh;
  width: 100%;
  display: flex;
`

const ImageContainer = styled.div`
  flex: 1;
  background-color: lightcyan;
  justify-content: center;
  align-items: center;
`

const BackgroundImage = styled(Img)`
  position: absolute;
  mask-image: url(../../images/home/dragon-mask.png);
  mask-mode: alpha;
  height: 100%;
  bottom: 0;
  margin: auto;
  align-content: center;
  align-items: center;
  background-color: lightgray;
`

const IntroContent = styled.div`
  flex: 1;
  justify-content: stretch;
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
        render={data => (
          <Container>
            <ImageContainer>
              <BackgroundImage
                fluid={data.file.childImageSharp.fluid}
              />
            </ImageContainer>
            <IntroContent>
            </IntroContent>
          </Container>
        )}
      />
    )
  }

}

export default Home