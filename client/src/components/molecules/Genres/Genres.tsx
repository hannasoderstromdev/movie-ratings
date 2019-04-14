import React from 'react'
import styled from 'styled-components'

import { insertionSort } from 'utils/Array'

import Genre from 'components/molecules/Genre'

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  span {
    margin-right: 0.5rem;
  }
`

interface GenresProps {
  genres: {};
}

const Genres: React.SFC<GenresProps> = ({ genres }) => {
  const genresArr = []
  for (const id in genres) {
    const genre = { id, name: genres[id].name }
    genresArr.push(genre)
  }
  const sortedAlphabetically = insertionSort(genresArr, 'name')
  return (
    <Wrapper>
      {genres &&
        sortedAlphabetically.map(genre => (
          <Genre id={genre.id} key={genre.id} name={genre.name} />
        ))}
    </Wrapper>
  )
}

export default Genres
