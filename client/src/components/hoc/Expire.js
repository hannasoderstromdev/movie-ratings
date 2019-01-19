import React from 'react'
import PropTypes from 'prop-types'

class Expire extends React.Component {
  _timer = null
  state = {
    visible: true,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.resetTimer()
    }
  }

  resetTimer() {
    this.setTimer()
    this.setState({ visible: true })
  }

  componentDidMount() {
    this.setTimer()
  }

  setTimer() {
    if (this._timer !== null) {
      clearTimeout(this._timer)
    }

    this._timer = setTimeout(() => {
      this.setState({ visible: false })
      if (this.props.callOnFinish) {
        this.props.callOnFinish()
      }
      this._timer = null
    }, this.props.delay)
  }

  componentWillUnmount() {
    clearTimeout(this._timer)
  }

  render() {
    return this.state.visible ? <div>{this.props.children}</div> : null
  }
}

Expire.defaultProps = {
  callOnFinish: null,
  delay: 1000,
}

Expire.propTypes = {
  callOnFinish: PropTypes.func,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
}

export default Expire
