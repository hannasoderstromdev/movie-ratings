import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import searchActions from 'actions/search/search.actions'

import SearchField from 'components/molecules/SearchField'

class SearchForMovie extends Component {
  state = {
    movieTitle: '',
  }

  doOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchOMDB = e => {
    e.preventDefault()
    this.props.searchOMDB(this.state.movieTitle)
  }

  render() {
    return (
      <form onSubmit={this.searchOMDB}>
        <SearchField
          name="movieTitle"
          onChange={this.doOnChange}
          placeholder="Search by title in OMDB"
        />
      </form>
    )
  }
}

const mapDispatchToProps = {
  searchOMDB: searchActions.searchOMDB,
}

SearchForMovie.propTypes = {
  searchOMDB: PropTypes.func.isRequired,
}

export default connect(
  null,
  mapDispatchToProps,
)(SearchForMovie)
