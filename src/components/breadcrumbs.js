import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ChevronRight } from '@material-ui/icons'
import { rhythm } from '../utils/typography'

import Color from '../styles/color'

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: ${rhythm(1/2)};
`

const CrumbContainer = styled.div`
	display: flex;
	align-items: center;
`

const CrumbLink = styled(Link)`
	text-decoration: none;

	h5 {
		color: ${Color.subtitle_text};
		margin-bottom: 0;
	}

	:hover {
		text-decoration: underline;
	}

	:active {
		text-decoration-color: ${Color.subtitle_text}
	}
`

const Arrow = styled(ChevronRight)`
	color: ${Color.subtitle_text};
	margin-left: 4px;
	margin-right: 4px;
`

export default class Breadcrumbs extends Component {

  render() {
		return (
			<Container>
				{
					this.props.crumbs.map((crumb, index) => {
						return (
							<CrumbContainer>
								<CrumbLink to={crumb.to}>
									<h5>{crumb.name}</h5>
								</CrumbLink>
								{
									index === this.props.crumbs.length - 1 ||
									<Arrow />
								}
							</CrumbContainer>
						)
					})
				}
			</Container>
		)
	}

}

Breadcrumbs.propTypes = {
	crumbs: PropTypes.array.isRequired
}