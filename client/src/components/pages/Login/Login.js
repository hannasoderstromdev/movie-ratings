import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { login, logout } from 'actions/user/user.actions'

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
  logout,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(Login)),
)
