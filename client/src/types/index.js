import PropTypes from 'prop-types'

export const MovieType = {
  country: PropTypes.string.isRequired,
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  language: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string.isRequired,
      Value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  rating: PropTypes.number,
  released: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
}

export const SearchMovieType = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  director: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  awards: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string.isRequired,
      Value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  metascore: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  imdbVotes: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  inLibrary: PropTypes.bool.isRequired,
}
