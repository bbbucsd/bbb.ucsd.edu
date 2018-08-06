// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  desktop: '(min-width: 1200px)',
  tablet: '(min-width: 481px) and (max-width: 1199px)',
  mobile: '(max-width: 480px)'
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${ sizes[label] } {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media