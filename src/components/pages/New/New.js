import React from 'react'

import { H1 } from 'components/atoms/Typography'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import SearchField from 'components/molecules/SearchField'

class New extends React.Component {
  state = {
    search: '',
  }

  doOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  doOnSubmit = e => {
    e.preventDefault()
    console.log('search for movie ', this.state.search)
  }

  render() {
    return (
      <Page>
        <Main>
          <H1>New</H1>
          <form>
            <SearchField
              name="search"
              onChange={this.doOnChange}
              placeholder="Search for Movie in Open Movie Database"
              onSubmit={this.doOnSubmit}
            />
          </form>
          <div>Search results</div>
          <div>Set rating: </div>
        </Main>
      </Page>
    )
  }
}

export default New
