import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { searchOMDB } from 'actions/search/search.actions'

import { H1 } from 'components/atoms/Typography'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import SearchField from 'components/molecules/SearchField'

class New extends React.Component {
  state = {
    movieTitle: '',
  }

  doOnChange = e => {
    this.setState({ movieTitle: e.target.value })
  }

  doOnSubmit = e => {
    e.preventDefault()
    console.log('search for movie ', this.state.movieTitle)
    this.props.searchOMDB(this.state.movieTitle)
  }

  render() {
    return (
      <Page>
        <Main>
          <H1>New</H1>
          <form onSubmit={this.doOnSubmit}>
            <SearchField
              name="search"
              onChange={this.doOnChange}
              placeholder="Search in Open Movie Database"
            />
          </form>
          <div>Search results</div>
          <div>Set rating: </div>
        </Main>
      </Page>
    )
  }
}

const mapStateToProps = ({ search }) => ({
  search,
})

const mapDispatchToProps = {
  searchOMDB,
}

New.propTypes = {
  search: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    movie: PropTypes.shape({}),
    error: PropTypes.oneOf([PropTypes.bool, PropTypes.null]),
  }),
  searchOMDB: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(New)
