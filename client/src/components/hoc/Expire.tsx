import React from "react";

type ExpireProps = {
  callOnFinish?: (...args: any[]) => any,
  delay?: number
};

type ExpireState = {
  visible: boolean,
  visible: boolean,
  visible: boolean
};

class Expire extends React.Component<ExpireProps, ExpireState> {
  _timer = null;
  state = {
    visible: true
  };

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.resetTimer();
    }
  }

  resetTimer() {
    this.setTimer();
    this.setState({ visible: true });
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    if (this._timer !== null) {
      clearTimeout(this._timer);
    }
    this._timer = setTimeout(() => {
      this.setState({ visible: false });
      if (this.props.callOnFinish) {
        this.props.callOnFinish();
      }
      this._timer = null;
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return this.state.visible ? <div>{this.props.children}</div> : null;
  }
}

Expire.defaultProps = {
  callOnFinish: null,
  delay: 1000
};

export default Expire;
