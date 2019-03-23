import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/atoms/Icon'

const ButtonWrapper = styled.button`
  position: relative;
  outline: none;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;

  &:focus {
    svg {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`

const TriangleTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 2.5rem solid ${({ theme }) => theme.colors.primary};
  border-left: 2.5rem solid transparent;
`

const ZoomIcon = styled(Icon)`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
`

const TriangleZoom = ({ onClick }) => (
  <ButtonWrapper onClick={onClick}>
    <TriangleTopRight />
    <ZoomIcon color="#000" icon={['fas', 'search-plus']} />
  </ButtonWrapper>
)

TriangleZoom.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default TriangleZoom
