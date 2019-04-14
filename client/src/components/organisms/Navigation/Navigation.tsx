import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from 'components/atoms/Icon'

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.textPrimary};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 45px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;
  min-height: 7vh;

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  a:link,
  a:visited {
    text-decoration: none;
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

const LinkItem = styled.li`
  flex: 3;
  text-decoration: none;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:last-of-type {
    flex: 1;
  }

  a {
    min-height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-right: 1rem;
  }

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.colors.textSecondary};
  }
`

const DisabledItem = styled(LinkItem)`
  min-height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
`

const isActive = (path, match, location) =>
  !!(match || path === location.pathname)

interface NavigationProps {
  loggedIn: boolean;
}

const Navigation: React.SFC<NavigationProps> = ({ loggedIn }) => (
  <Nav data-testid="main-navigation">
    {loggedIn ? (
      <ul>
        <LinkItem>
          <NavLink exact isActive={isActive.bind(this, '/')} to="/">
            <span>Library</span>
            <Icon icon={['fas', 'list']} iconsize="1.8rem" />
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink isActive={isActive.bind(this, '/add')} to="/add">
            <span>Add</span>
            <Icon icon={['fas', 'plus-circle']} iconsize="1.8rem" />
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/settings">
            <Icon icon={['fas', 'cog']} iconsize="1.8rem" />
          </NavLink>
        </LinkItem>
      </ul>
    ) : (
      <ul>
        <DisabledItem>
          <span>Library</span>
          <Icon icon={['fas', 'list']} iconsize="1.8rem" />
        </DisabledItem>
        <DisabledItem>
          <span>Add</span>
          <Icon icon={['fas', 'plus-circle']} iconsize="1.8rem" />
        </DisabledItem>
        <DisabledItem>
          <Icon icon={['fas', 'cog']} iconsize="1.8rem" />
        </DisabledItem>
      </ul>
    )}
  </Nav>
)

const mapStateToProps = ({ user }) => ({
  loggedIn: user && user.loggedIn,
})

// NOTE! isActive only works if withRouter is the outermost HOC,
// see this for more details: https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Navigation))
