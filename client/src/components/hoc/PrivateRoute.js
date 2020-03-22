import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import userActions from 'actions/user/user.actions'

const PrivateRoute = ({
  component: Component,
  errorHandler,
  logoutUser,
  ...rest
}) => {
  // Only checking for existing localStorage item doesn't cover when item exist but token is invalid. Hence, checking for 403 errors is needed.
  if (errorHandler.status === 403) {
    logoutUser()
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )}
      />
    )
  }

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  errorHandler: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    status: PropTypes.number.isRequired,
    message: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
  logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = ({ errorHandler }) => ({
  errorHandler,
})

const mapDispatchToProps = {
  logoutUser: userActions.logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
