import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from 'helpers/store'

import Root from './Root'
import Theme from './Theme'
import Normalize from './Normalize'

import Content from './Content'

const App = () => (
  <Root store={store}>
    <Theme>
      <React.Fragment>
        <Normalize />
        <Router>
          <Content />
        </Router>
      </React.Fragment>
    </Theme>
  </Root>
)

export default App
