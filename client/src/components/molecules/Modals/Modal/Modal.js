import React, { Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'
import Spinner from 'components/atoms/Spinner'

const LazyMovieFull = React.lazy(() => import('components/organisms/MovieFull'))

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
  z-index: ${({ zIndex }) => zIndex};
`
const ModalBox = styled.section`
  background-color: ${({ theme }) => theme.colors.darkTransparent};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  margin: 1rem;
  padding: 2rem;
`

const TopRight = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
`

class Modal extends Component {
  onClose = () => {
    const { item, onClose } = this.props

    if (item.onClose) {
      item.onClose()
      onClose()
    } else {
      onClose()
    }
  }

  onConfirm = () => {
    const { item, onClose } = this.props
    if (item.onConfirm) {
      item.onConfirm()
      onClose()
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
              <TopRight>
                <Button onClick={this.onClose}>
                  <Icon icon={['fas', 'times']} />
                </Button>
              </TopRight>
              <Suspense fallback={<Spinner />}>
                <LazyMovieFull
                  movieId={item.content.movieId}
                  onClose={this.onClose}
                  showDelete
                />
              </Suspense>
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
      movieId: PropTypes.string,
    }),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  zIndex: PropTypes.number,
}

export default Modal
