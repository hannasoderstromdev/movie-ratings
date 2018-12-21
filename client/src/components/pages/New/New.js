import React from 'react'

import { H1 } from 'components/atoms/Typography'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import SearchForMovie from './SearchForMovie'
import RateNewMovie from './RateNewMovie'

const New = () => (
  <Page>
    <Main>
      <H1>New</H1>
      <SearchForMovie />
      <RateNewMovie />
    </Main>
  </Page>
)

export default New
