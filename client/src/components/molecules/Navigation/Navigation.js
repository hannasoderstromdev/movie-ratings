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
  box-shadow: 0px -4px 45px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;

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

const Navigation = ({ loggedIn }) => (
  <Nav data-testid="main-navigation">
    <ul>
      <li>
        <NavLink exact isActive={isActive.bind(this, '/')} to="/">
          Library
        </NavLink>
      </li>
      <li>
        <NavLink isActive={isActive.bind(this, '/new')} to="/new">
          New
        </NavLink>
      </li>
      <li>
        {loggedIn ? (
          <NavLink isActive={isActive.bind(this, '/account')} to="/account">
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
