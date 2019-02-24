import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'
import PrivateRoute from 'components/hoc/PrivateRoute'

import Alert from 'components/molecules/Alert'
import Modals from 'components/molecules/Modals'

import Header from 'components/organisms/Header'
import Navigation from 'components/organisms/Navigation'
import SearchLibrary from 'components/organisms/SearchLibrary'

import Library from './pages/Library'
import Add from './pages/Add'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Error404 from './pages/Error404'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Content = () => (
  <ErrorBoundary>
    <Wrapper>
      <Header />
      <SearchLibrary />

      <Switch>
        <PrivateRoute component={Add} exact path="/add" />
        <Route component={Login} exact path="/login" />
        <PrivateRoute component={Settings} exact path="/settings" />
        <PrivateRoute component={Library} exact path="/" />
        <Route component={Error404} />
      </Switch>

      <Alert />
      <Navigation />
      <Modals />
    </Wrapper>
  </ErrorBoundary>
)

export default Content
