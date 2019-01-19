import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'components/atoms/Button'

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
  z-index: ${({ zIndex }) => zIndex};
`
const ModalBox = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

class Modal extends Component {
  onClose = () => {
    const { item, onClose } = this.props
    if (item.onClose) {
      item.onClose()
      onClose(item.id)
    } else {
      onClose(item.id)
    }
  }

  onConfirm = () => {
    const { item, onClose } = this.props
    if (item.onConfirm) {
      item.onConfirm()
      onClose(item.id)
    }
  }

  render() {
    const { zIndex, item } = this.props

    switch (item.type) {
      case 'confirmation':
        return (
          <ModalWrapper zIndex={(zIndex + 1) * 10}>
            <ModalBox>
              <div>{item.content.text}</div>
              <div>
                <Button onClick={this.onConfirm}>Confirm</Button>
                <Button onClick={this.onClose}>Close</Button>
              </div>
            </ModalBox>
          </ModalWrapper>
        )

      case 'movie-details':
        return (
          <ModalWrapper zIndex={(zIndex + 1) * 10}>
            <ModalBox>
              <Button onClick={this.onClose}>Close</Button>
              <div>{item.content.text}</div>
            </ModalBox>
          </ModalWrapper>
        )

      default:
        return null
    }
  }
}

Modal.defaultProps = {
  zIndex: 10,
}

Modal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func,
    content: PropTypes.shape({
      text: PropTypes.string,
    }),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  zIndex: PropTypes.number,
}

export default Modal
