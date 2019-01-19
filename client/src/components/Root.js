import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

const Root = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
)

Root.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.func.isRequired,
}

export default Root
