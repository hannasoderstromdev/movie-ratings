import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Spinner from 'components/atoms/Spinner'

import Genres from 'components/molecules/Genres'

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0.15rem 1rem 0 1rem;
`

// interface FilterByGenreProps {
//   filter: {};
//   genres: {};
//   isOpen: boolean;
//   loading: boolean;
// }

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

export default connect(mapStateToProps)(FilterByGenre)
