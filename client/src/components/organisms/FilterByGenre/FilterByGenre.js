import React from 'react'

class FilterByGenre extends React.Component {
  state = {
    genres: [
      {
        id: 'id1',
        name: 'Drama',
        selected: false,
      },
      {
        id: 'id2',
        name: 'Family',
        selected: false,
      },
      {
        id: 'id3',
        name: 'Romance',
        selected: false,
      },
      {
        id: 'id4',
        name: 'War',
        selected: false,
      },
    ],
  }

  toggleSelected = () => {
    // toggle selected
  }

  render() {
    return (
      <div>
        <button>Filter by genre(s)</button>
        <div>Genres</div>
        <ul>
          {this.state.genres.map(genre => (
            <li key={genre.id} selected={genre.selected}>
              <button onClick={() => this.toggleSelected(genre.id)}>
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FilterByGenre
