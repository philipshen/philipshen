import React from 'react'
import styled from 'styled-components'
import Color from '../styles/color'

const SVG = styled.svg`
  background-size: ${props => `${props.height} ${props.width}`};
`

const getPath = (name, props) => {
  switch (name) {
    case 'medium':
      return (
        <path
          {...props}
          id="medium"
          d="M-1.948-.51l-.1,31.992,32,.008-.018-32Zm26.968,8s-1.889,1.756-1.889,1.756V21.962L25.02,23.83v.475H16.473V23.83l1.854-1.869v-10L13.48,24.305h-.665L7.149,12.016v8.716l2.613,3.1v.475H3.257v-.542L5.77,20.732V10.158L3.449,7.419v-.4H9.814l4.883,10.6,4.241-10.6H25.02v.474Z"
          transform="translate(2.052 0.51)"
        />
      )
    case 'stackoverflow':
      return (
        <path
          {...props}
          d="M32,20V32H0V20H4v8H28V20ZM6,22H26v4H6Zm.473-4.329.866-3.9,19.526,4.328L26,22ZM8.739,9.642l1.69-3.625,18.126,8.452-1.69,3.625ZM30.991,11.3l-2.435,3.173L12.689,2.294,14.45,0h1.82Z"
        />
      )
    case 'linkedin':
      return (
        <path
          {...props}
          d="M26.625,0H5.375A5.391,5.391,0,0,0,0,5.375v21.25A5.391,5.391,0,0,0,5.375,32h21.25A5.391,5.391,0,0,0,32,26.625V5.375A5.391,5.391,0,0,0,26.625,0ZM12,26H8V12h4ZM10,10a2,2,0,1,1,2-2A2,2,0,0,1,10,10ZM26,26H22V18a2,2,0,0,0-4,0v8H14V12h4v2.483C18.825,13.35,20.086,12,21.5,12A4.77,4.77,0,0,1,26,17Z"
        />
      )
    case 'github':
      return (
        <path
          {...props}
          id="github"
          d="M16,.4a16,16,0,0,0-5.058,31.182c.8.148,1.094-.347,1.094-.77,0-.381-.015-1.642-.022-2.979C7.562,28.8,6.623,25.94,6.623,25.94A4.24,4.24,0,0,0,4.847,23.6c-1.452-.993.11-.973.11-.973a3.363,3.363,0,0,1,2.452,1.649,3.406,3.406,0,0,0,4.656,1.33,3.405,3.405,0,0,1,1.016-2.14c-3.554-.4-7.29-1.777-7.29-7.907a6.192,6.192,0,0,1,1.649-4.3A5.748,5.748,0,0,1,7.6,7.029S8.939,6.6,12,8.669a15.16,15.16,0,0,1,8.013,0c3.054-2.07,4.4-1.64,4.4-1.64a5.742,5.742,0,0,1,.157,4.234,6.18,6.18,0,0,1,1.647,4.3c0,6.145-3.743,7.5-7.306,7.9a3.825,3.825,0,0,1,1.085,2.963c0,2.141-.019,3.864-.019,4.391,0,.426.288.925,1.1.768A16,16,0,0,0,16,.395Z"
          transform="translate(0 -0.395)"
        />
      )
    case 'email':
      return (
        <path
          d="M33.5,4H5.5A3.5,3.5,0,0,0,2.017,7.5L2,28.5A3.51,3.51,0,0,0,5.5,32h28A3.51,3.51,0,0,0,37,28.5V7.5A3.51,3.51,0,0,0,33.5,4Zm0,24.5H5.5V11l14,8.75L33.5,11Zm-14-12.25L5.5,7.5h28Z"
          transform="translate(-2 -4)"
        />
      )
    default:
      return <path />
  }
}

const Icon = ({
  name = '',
  style = {},
  fill = Color.dark_text,
  width = '100%',
  height = '100%',
  className = '',
  viewBox = '0 0 32 32'
}) => (
  <SVG
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </SVG>
)

export default Icon