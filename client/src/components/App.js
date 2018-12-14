import React from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'

import Theme from './Theme'
import Normalize from './Normalize'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

import Home from './pages/Home'
import New from './pages/New'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`

const App = () => (
  <div>
    <Theme>
      <Wrapper>
        <Normalize />
        <Header />

        <Router>
          <Home path="/" />
          <New path="/new" />
        </Router>

        <Navigation />
      </Wrapper>
    </Theme>
  </div>
)

export default App
