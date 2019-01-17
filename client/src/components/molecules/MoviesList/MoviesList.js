import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'components/atoms/Button'
import Movie from 'components/organisms/Movie'

const MoviesListWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ listStyle }) =>
    listStyle === 'rows' ? 'auto' : '1fr 1fr 1fr'};
  grid-gap: 2rem;
`

const ToggleWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`

class MoviesList extends React.Component {
  state = {
    listStyle: 'rows',
  }

  setStyleRows = () => this.setState({ listStyle: 'rows' })

  setStyleTiles = () => this.setState({ listStyle: 'tiles' })

  render() {
    const { movies, listStyle } = this.props
    return movies.length ? (
      <React.Fragment>
        <ToggleWrapper>
          <Button onClick={this.setStyleRows}>Rows</Button>
          <Button onClick={this.setStyleTiles}>Tiles</Button>
        </ToggleWrapper>
        <MoviesListWrapper listStyle={this.state.listStyle}>
          {movies.map(movie => (
            <Movie key={movie.id} {...movie} listStyle={listStyle} />
          ))}
        </MoviesListWrapper>
      </React.Fragment>
    ) : null
  }
}

MoviesList.defaultProps = {}

MoviesList.propTypes = {}

export default MoviesList
