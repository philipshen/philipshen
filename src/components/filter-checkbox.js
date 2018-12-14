import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'

import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'

const Container = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-bottom: ${rhythm(1/2)};
  margin-right: 0.8rem;
  opacity: ${props => props.selected ? '1' : '0.6'};

  h5 {
    margin-bottom: 0;
    height: 1em;
    margin-left: 6px;
  }

  :hover {
    opacity: 0.8;
  }
`

const ActiveCheckbox = styled(CheckBox)`
  color: ${props => props.activecolor};
`

export default class FilterCheckbox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: true
    }

    this.deselect = this.deselect.bind(this)
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.setState(({selected}) => {
            // Toggle selection
            this.props.onPress(!selected)
            return {selected: !selected}
          })
        }}
        selected={this.state.selected}
      >
        {
          this.state.selected
          ?
          <ActiveCheckbox className={'checkbox-icon'} activecolor={this.props.color} />
          :
          <CheckBoxOutlineBlank className={'checkbox-icon'} />
        }
        <h5>{this.props.name}</h5>
      </Container>
    )
  }

  deselect() {
    this.setState({selected: false})
  }

  select() {
    this.setState({selected: true})
  }

}

FilterCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}