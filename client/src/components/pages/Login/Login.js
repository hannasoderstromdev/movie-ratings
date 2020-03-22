import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import userThunks from 'actions/user/user.thunks'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import { H1 } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'

import LabeledInputField from 'components/molecules/LabeledInputField'
import FullscreenSpinner from 'components/molecules/FullscreenSpinner/FullscreenSpinner'

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`

const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    this.props.logout()
  }

  doOnChange = e => this.setState({ [e.target.name]: e.target.value })

  doOnSubmit = async e => {
    e.preventDefault()
    // attempt login
    const { username, password } = this.state

    await this.props.login(username, password)
    // redirect to home
    await this.props.history.push('/')
  }

  render() {
    const { username, password } = this.state
    const { user } = this.props

    return (
      <Page data-testid="login-screen">
        {user && user.loggingIn && <FullscreenSpinner />}
        <Main>
          <H1>Login</H1>

          <form onSubmit={this.doOnSubmit}>
            <FormField>
              <LabeledInputField
                label="Email"
                name="username"
                onChange={this.doOnChange}
                placeholder="Enter your e-mail here"
                type="email"
                value={username}
              />
            </FormField>

            <FormField>
              <LabeledInputField
                label="Password"
                name="password"
                onChange={this.doOnChange}
                placeholder="Enter your password here"
                type="password"
                value={password}
              />
            </FormField>

            <RightAlign>
              <Button disabled={!username || !password} type="submit">
                Login
              </Button>
            </RightAlign>
          </form>
        </Main>
      </Page>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    loggingIn: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
}

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = {
  login: userThunks.login,
  logout: userThunks.logout,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(Login)),
)
