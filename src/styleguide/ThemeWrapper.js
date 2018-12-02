import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../components/themes/default'
import Normalize from '../components/Normalize'

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
