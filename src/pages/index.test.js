import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import IndexPage from './index.js'

const renderer = new ShallowRenderer()

describe('Index', () => {

  it('Matches snapshot', () => {
    const tree = renderer.render(<IndexPage />)
    expect(tree).toMatchSnapshot()
  })

})