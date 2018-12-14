import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import AboutPage from './about.js'

const renderer = new ShallowRenderer()

describe('About', () => {
  
  it('Matches snapshot', () => {
    const tree = renderer.render(<AboutPage />)
    expect(tree).toMatchSnapshot()
  })

})