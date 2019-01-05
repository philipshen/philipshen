import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SkillBar from '../components/skill-bar'
import { rhythm } from '../utils/typography'

import skills from '../data/career/skills'

const Container = styled.div`
	max-width: 700px;
	margin-left: 3vw;
	margin-right: 3vw;
	margin-top: ${rhythm(1/2)};
`

export default class SkillsPage extends Component {

  render() {
		return (
			<Layout blockHeader={true}>
				<Container>
					<h1>All Skills</h1>
					{
						Array.from(skills).map(([_, skill]) => (
							<SkillBar key={skill.key} skill={skill} />
						))
					}
				</Container>
			</Layout>
		)
	}

}