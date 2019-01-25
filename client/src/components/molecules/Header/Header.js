import React from 'react'
import styled from 'styled-components'

import logoImg from './logo.svg'
import clapperImg from './clapper.svg'

const Logo = styled.img`
  max-height: 2.25vh;
`

const Clapper = styled.img`
  max-height: 2.25vh;
  margin-right: 1rem;
`

const HeaderStyle = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Trajan Pro 3', serif;
  line-height: 1rem;
  font-size: 1.8rem;
  padding: 0;
  margin: 0;
  overflow: hidden;
`

const Header = () => (
  <HeaderStyle data-testid="main-header">
    <Clapper alt="logo" data-testid="clapper" src={clapperImg} />
    <Logo alt="movie ratings" data-testid="logo" src={logoImg} />
  </HeaderStyle>
)

export default Header
