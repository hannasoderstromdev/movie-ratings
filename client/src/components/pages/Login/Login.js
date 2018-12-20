import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { login } from 'actions/user/user.actions'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import { H1 } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
// import Spinner from 'components/atoms/Spinner'

import LabeledInputField from 'components/molecules/LabeledInputField'

// import Spinner from 'components/atoms/Spinner'

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
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
    console.log('submit')
    // attempt login
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    const { username, password } = this.state
    return (
      <Page>
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
              />
            </FormField>

            <FormField>
              <LabeledInputField
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.doOnChange}
              />
            </FormField>

            <RightAlign>
              <Button type="submit">Login</Button>
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
)(Login)
