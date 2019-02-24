import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`

const Message = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

Message.defaultProps = {
  className: null,
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Message
