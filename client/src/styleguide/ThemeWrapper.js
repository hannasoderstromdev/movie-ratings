import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../components/themes/default'
import Normalize from '../components/Normalize'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons'

// Add all icons used here
library.add(faStar, faTimes)

export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          {this.props.children}
        </>
      </ThemeProvider>
    )
  }
}
