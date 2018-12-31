import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
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

const isActive = (path, match, location) =>
  !!(match || path === location.pathname)

const Navigation = ({ loggedIn, history }) => (
  <Nav>
    <ul>
      <li>
        <NavLink exact to="/" isActive={isActive.bind(this, '/')}>
          Library
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" isActive={isActive.bind(this, '/new')}>
          New
        </NavLink>
      </li>
      <li>
        {loggedIn ? (
          <NavLink to="/account" isActive={isActive.bind(this, '/account')}>
            Account
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
      <li>
        <NavLink to="/settings">
          <Icon icon={['fas', 'ellipsis-v']} iconsize="18px" />
        </NavLink>
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

// NOTE! isActive only works if withRouter is the outermost HOC,
// see this for more details: https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Navigation))
