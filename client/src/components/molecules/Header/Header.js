import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Trajan Pro 3', serif;
  font-size: 1.8rem;
  padding: 0;
  margin: 0;
`

const Header = () => <HeaderStyle>Movie Ratings</HeaderStyle>

export default Header
