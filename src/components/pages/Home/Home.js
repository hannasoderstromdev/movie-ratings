import React from 'react'
import styled from 'styled-components'

import SearchLibrary from 'components/molecules/SearchLibrary'

import { H1 } from 'components/atoms/Typography'

import MoviesList from 'components/molecules/MoviesList'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

const NoRatingsYet = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`

class Home extends React.Component {
  state = {
    search: '',
    results: [],
    recent: [
      {
        Title: 'Guardians of the Galaxy Vol. 2',
        Year: '2017',
        Runtime: '136 min',
        Director: 'James Gunn',
        Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
      },
    ],
  }

  doOnSearch = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  doOnSubmit = e => {
    e.preventDefault()

    console.log('search for ', this.state.search)
  }

  render() {
    const { results, recent } = this.state
    return (
      <Page>
        <SearchLibrary
          name="search"
          onChange={this.doOnSearch}
          onSubmit={this.doOnSubmit}
        />
        <Main>
          <H1>Recent</H1>
          {recent.length ? (
            <MoviesList movies={recent} />
          ) : (
            <NoRatingsYet>No ratings added yet</NoRatingsYet>
          )}
        </Main>
      </Page>
    )
  }
}

export default Home
