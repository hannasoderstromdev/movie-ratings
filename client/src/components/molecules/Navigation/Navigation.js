import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 10vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
  }

  a:link,
  a:visited {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a.active,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const Navigation = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/" className="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/new">New</Link>
      </li>
    </ul>
  </Nav>
)

export default Navigation
