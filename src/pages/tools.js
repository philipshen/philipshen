import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SkillBar from '../components/skill-bar'
import { rhythm } from '../utils/typography'

import tools from '../data/career/tools'

const Container = styled.div`
	max-width: 700px;
	margin-left: 3vw;
	margin-right: 3vw;
	margin-top: ${rhythm(1/2)};
	padding-bottom: ${rhythm(2)};
`

export default class ToolsPage extends Component {

  render() {
		return (
			<Layout blockHeader={true}>
				<Container>
					<h1>All Tools</h1>
					{
						Array.from(tools).map(([_, tool]) => (
							<SkillBar key={tool.key} skill={tool} />
						))
					}
				</Container>
			</Layout>
		)
	}

}