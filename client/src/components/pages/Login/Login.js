import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { login } from 'actions/user/user.actions'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import { H1 } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
// import Spinner from 'components/atoms/Spinner'

import LabeledInputField from 'components/molecules/LabeledInputField'
import FullscreenSpinner from 'components/molecules/FullscreenSpinner/FullscreenSpinner'

// import Spinner from 'components/atoms/Spinner'

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
    // logout user
  }

  doOnChange = e => this.setState({ [e.target.name]: e.target.value })

  doOnSubmit = e => {
    e.preventDefault()
    // attempt login
    const { username, password } = this.state

    this.props.login(username, password)
    // redirect to home
  }

  render() {
    const { username, password } = this.state
    const { user, location } = this.props

    return user.loggedIn ? (
      <Redirect to={{ pathname: '/', state: { from: location } }} />
    ) : (
      <Page>
        {user && user.loggingIn && <FullscreenSpinner />}
        <Main>
          <H1>Login</H1>

          <form onSubmit={this.doOnSubmit}>
            <FormField>
              <LabeledInputField
                label="Email"
                name="username"
                type="email"
                value={username}
                onChange={this.doOnChange}
                placeholder="Enter your e-mail here"
              />
            </FormField>

            <FormField>
              <LabeledInputField
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.doOnChange}
                placeholder="Enter your password here"
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

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login))
