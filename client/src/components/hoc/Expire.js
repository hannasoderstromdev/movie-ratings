import React from 'react'
import PropTypes from 'prop-types'

class Expire extends React.Component {
  _timer = null
  state = {
    visible: true,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.setTimer()
      this.setState({ visible: true })
    }
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
      this.props.callOnFinish()
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
  delay: 1000,
  callOnFinish: null,
}

Expire.propTypes = {
  delay: PropTypes.number,
  callOnFinish: PropTypes.func,
}

export default Expire
