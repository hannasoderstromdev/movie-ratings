import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`

interface MessageProps {
  className?: string;
}

const Message: React.SFC<MessageProps> = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

Message.defaultProps = {
  className: null,
}

export default Message
