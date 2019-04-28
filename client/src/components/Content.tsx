import * as React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'
import PrivateRoute from 'components/hoc/PrivateRoute'

import Spinner from 'components/Atoms/Spinner'

import Alert from 'components/molecules/Alert'
import Modals from 'components/molecules/Modals'

import Header from 'components/organisms/Header'
import Navigation from 'components/organisms/Navigation'
import SearchLibrary from 'components/organisms/SearchLibrary'

import Login from './pages/Login'
import Error404 from './pages/Error404'

const LazyLibrary = React.lazy(() => import('./pages/Library'))
const LazyAdd = React.lazy(() => import('./pages/Add'))
const LazySettings = React.lazy(() => import('./pages/Settings'))

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

      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <PrivateRoute component={LazyAdd} exact path="/add" />
          <Route component={Login} exact path="/login" />
          <PrivateRoute component={LazySettings} exact path="/settings" />
          <PrivateRoute component={LazyLibrary} exact path="/" />
          <Route component={Error404} />
        </Switch>
      </React.Suspense>
      <Alert />
      <Navigation />
      <Modals />
    </Wrapper>
  </ErrorBoundary>
)

export default Content
