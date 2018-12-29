import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from 'components/atoms/Icon'

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 8vh;
  padding: 1rem 2rem 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  a:link,
  a:visited {
    color: ${({ theme }) => theme.colors.textSecondary};
    svg {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  a.active,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Navigation = ({ loggedIn }) => (
  <Nav>
    <ul>
      <li>
        <Link to="/">Library</Link>
      </li>
      <li>
        <Link to="/new">New</Link>
      </li>
      <li>
        {loggedIn ? (
          <Link to="/account">Account</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <li>
        <Link to="/settings">
          <Icon icon={['fas', 'ellipsis-v']} iconsize="18px" />
        </Link>
      </li>
    </ul>
  </Nav>
)

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user && user.loggedIn,
})

export default connect(mapStateToProps)(Navigation)
