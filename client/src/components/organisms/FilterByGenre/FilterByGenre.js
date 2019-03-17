import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from 'components/atoms/Spinner'
import Genres from 'components/molecules/Genres'

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
`

const FilterByGenre = ({ genres, loading, isOpen }) => {
  if (loading) return <Spinner />

  return isOpen ? (
    <Wrapper>
      <Genres genres={genres} />
    </Wrapper>
  ) : null
}

const mapStateToProps = ({ genres }) => ({
  ...genres,
})

FilterByGenre.propTypes = {
  filter: PropTypes.shape({}).isRequired,
  genres: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(FilterByGenre)
