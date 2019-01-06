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

const Message = ({ children }) => <Wrapper>{children}</Wrapper>

Message.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Message
