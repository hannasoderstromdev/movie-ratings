import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'
import PrivateRoute from 'components/hoc/PrivateRoute'

import Alert from 'components/molecules/Alert'
import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

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
        <PrivateRoute path="/new" exact component={New} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/account" exact component={Account} />
        <PrivateRoute path="/" exact component={Library} />
        <Route component={Error404} />
      </Switch>

      <Alert />
      <Navigation />
    </Wrapper>
  </ErrorBoundary>
)

export default Content
