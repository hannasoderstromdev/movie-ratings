import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'
import PrivateRoute from 'components/hoc/PrivateRoute'

import Alert from 'components/molecules/Alert'
import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'
import Modals from 'components/molecules/Modals'

import SearchLibrary from 'components/organisms/SearchLibrary'

import Library from './pages/Library'
import New from './pages/New'
import Login from './pages/Login'
import Account from './pages/Account'
import Error404 from './pages/Error404'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`
const Content = () => (
  <ErrorBoundary>
    <Wrapper>
      <Header />
      <SearchLibrary />

      <Switch>
        <PrivateRoute component={New} exact path="/new" />
        <Route component={Login} exact path="/login" />
        <PrivateRoute component={Account} exact path="/account" />
        <PrivateRoute component={Library} exact path="/" />
        <Route component={Error404} />
      </Switch>

      <Modals />
      <Alert />
      <Navigation />
    </Wrapper>
  </ErrorBoundary>
)

export default Content
