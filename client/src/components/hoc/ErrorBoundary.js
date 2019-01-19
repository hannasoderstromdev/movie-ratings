import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    info: null,
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorWrapper>
          <h1>Oups, something went wrong :(</h1>
          <p>The error: {this.state.error.toString()}</p>
          <p>Where it occurred: {this.state.info.componentStack}</p>
        </ErrorWrapper>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
