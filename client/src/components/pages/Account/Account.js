import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import { H1, Text, TextDark } from 'components/atoms/Typography'

const Account = ({ role, id, firstName, lastName, email }) => (
  <Page>
    <Main>
      <H1>Account</H1>
      <p>
        <TextDark>Privileges: </TextDark>
        <Text>{role}</Text>
      </p>
      <p>
        <Text>
          {firstName} {lastName}
        </Text>
      </p>
      <p>
        <Text>{email}</Text>
      </p>
    </Main>
  </Page>
)

Account.propTypes = {
  role: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

const mapStateToProps = ({ user }) => ({
  ...(user && user.profile && user.profile.user),
})

export default connect(mapStateToProps)(Account)
