import React from 'react'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import PropTypes from 'prop-types'

import theme from '../components/themes/default'
import Normalize from '../components/Normalize'

import Root from '../components/Root'

const rootReducer = combineReducers({
  alerts: () => ({
    display: true,
    type: 'alert',
    message: 'message',
  }),
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// Add all icons used here
library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
)

const ThemeWrapper = ({ children }) => (
  <Root store={store}>
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        {children}
      </>
    </ThemeProvider>
  </Root>
)

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeWrapper
