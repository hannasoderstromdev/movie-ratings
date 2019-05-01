import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import searchThunks from 'actions/search/search.thunks'

import { TextDark } from 'components/atoms/Typography'
import Message from 'components/atoms/Message'
import SearchField from 'components/molecules/SearchField'

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

// interface SearchForMovieProps {
//   searchById: (validId: string) => void;
//   searchByTitle: (movieTitle: string) => void;
// }

// interface SearchForMovieState {
//   movieTitle: string;
//   imdbId: string;
//   validId: string;
// }

class SearchForMovie extends React.Component {
  state = {
    movieTitle: '',
    imdbId: '',
    validId: '',
  }

  doOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchOMDB = e => {
    e.preventDefault()
    const { movieTitle, validId } = this.state
    const { searchByTitle, searchById } = this.props
    if (movieTitle.length) {
      searchByTitle(movieTitle)
    } else if (validId) {
      searchById(validId)
    }
  }

  validateIMDBId = () => {
    // validate content of state.imdbId
    const { imdbId } = this.state
    const a = document.createElement('a')
    a.href = imdbId
    const pathItems = a.pathname.split('/')
    const pattern = new RegExp(/(tt\d{1,})/g)
    if (pathItems.length > 2) {
      this.setState({
        validId:
          pathItems[2].match(pattern).length && pathItems[2].match(pattern)[0],
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.searchOMDB}>
        <SearchField
          label="Search by title"
          name="movieTitle"
          onChange={this.doOnChange}
          placeholder="Enter a Movie Title"
        />
        <Center>
          <TextDark>- or -</TextDark>
        </Center>
        <SearchField
          label="Search by IMDB-link"
          name="imdbId"
          onBlur={this.validateIMDBId}
          onChange={this.doOnChange}
          placeholder="Enter an IMDB-link"
        />
        {this.state.validId.length > 0 && (
          <Message>Must contain valid IMDB-id: (tt123456)</Message>
        )}
      </form>
    )
  }
}

const mapDispatchToProps = {
  searchById: searchThunks.searchById,
  searchByTitle: searchThunks.searchByTitle,
}

export default connect(
  null,
  mapDispatchToProps,
)(SearchForMovie)
