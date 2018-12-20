import React from 'react'
import { isRedirect } from '@reach/router'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    info: null,
  }

  componentDidCatch(error, info) {
    if (isRedirect(error)) {
      throw error
    } else {
      this.setState({ hasError: true, error, info })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Oups, something went wrong :(</h1>
          <p>The error: {this.state.error.toString()}</p>
          <p>Where it occured: {this.state.info.componentStack}</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
