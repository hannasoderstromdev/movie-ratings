import { createSelector } from 'reselect'

import { insertionSort } from 'utils/Array'

const getGenres = state => state.genres
const getGenresObj = state => state.genres.genres
const getLoading = state => state.genres.loading

const getGenresArray = createSelector(
  [getGenresObj],
  genres => {
    const genresArr = []
    for (const id in genres) {
      const genre = { id, name: genres[id].name }
      genresArr.push(genre)
    }
    return insertionSort(genresArr, 'name')
  },
)

export default { getGenres, getGenresObj, getGenresArray, getLoading }
