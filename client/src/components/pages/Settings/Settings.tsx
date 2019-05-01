import * as React from 'react'
import { connect } from 'react-redux'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import { H1, Text, TextDark } from 'components/atoms/Typography'

interface User {
  user: {
    profile: {
      user: {
        role: string,
        firstName: string,
        lastName: string,
        email: string,
      },
    },
  };
}

interface SettingsProps {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  user: User;
}

const Settings: React.SFC<SettingsProps> = ({
  role,
  firstName,
  lastName,
  email,
}) => (
  <Page>
    <Main>
      <H1>Settings</H1>
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

const mapStateToProps = ({ user }: User) => ({
  ...(user && user.profile && user.profile.user),
})

export default connect(mapStateToProps)(Settings)
