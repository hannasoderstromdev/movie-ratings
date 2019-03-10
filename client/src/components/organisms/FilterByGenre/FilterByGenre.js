import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Spinner from 'components/atoms/Spinner'
import Genres from 'components/molecules/Genres'

class FilterByGenre extends React.Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { genres, loading } = this.props
    const { isOpen } = this.state
    return loading ? (
      <Spinner />
    ) : (
      <div>
        <button onClick={this.toggleOpen}>Open</button>
        {isOpen ? <Genres genres={genres} /> : null}
      </div>
    )
  }
}

const mapStateToProps = ({ genres }) => ({
  ...genres,
})

FilterByGenre.propTypes = {
  filter: PropTypes.shape({}).isRequired,
  genres: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(FilterByGenre)
