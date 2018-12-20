import React from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'

import { store } from 'helpers/store'

import Root from './Root'
import Theme from './Theme'
import Normalize from './Normalize'

import Alert from 'components/molecules/Alert'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

import Home from './pages/Home'
import New from './pages/New'
import Login from './pages/Login'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`

const App = () => (
  <Root store={store}>
    <Theme>
      <Wrapper>
        <Normalize />
        <Header />

        <Router>
          <Home path="/" />
          <New path="/new" />
          <Login path="/login" />
        </Router>

        <Alert />
        <Navigation />
      </Wrapper>
    </Theme>
  </Root>
)

export default App
