import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import moviesActions from 'actions/movies/movies.actions'

import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import logoImg from './logo.svg'
import clapperImg from './clapper.svg'

const RightAlignedButton = styled(Button)`
  position: absolute;
  right: 1rem;
`

const Logo = styled.img`
  max-height: 2.25vh;
`

const Clapper = styled.img`
  max-height: 2.25vh;
  margin-right: 1rem;
`

const HeaderStyle = styled.header`
  width: 100%;
  min-height: 7vh;
  flex: 1;
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
  position: relative;
  box-shadow: 0 4px 40px rgba(0, 0, 0.75);
`

const Header = ({ showSearchLibrary, toggleLibrarySearch, userLoggedIn }) => (
  <HeaderStyle data-testid="main-header">
    <Clapper alt="logo" data-testid="clapper" src={clapperImg} />
    <Logo alt="movie ratings" data-testid="logo" src={logoImg} />
    {userLoggedIn && (
      <RightAlignedButton onClick={toggleLibrarySearch} thirdiary>
        {showSearchLibrary ? (
          <React.Fragment>
            <Icon color="#FEDC9B" icon={['fas', 'search']} iconsize="2rem" />
            <Icon
              color="#FEDC9B"
              icon={['fas', 'chevron-up']}
              iconsize="1rem"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Icon color="#666" icon={['fas', 'search']} iconsize="2rem" />
            <Icon color="#666" icon={['fas', 'chevron-down']} iconsize="1rem" />
          </React.Fragment>
        )}
      </RightAlignedButton>
    )}
  </HeaderStyle>
)

Header.propTypes = {
  showSearchLibrary: PropTypes.bool.isRequired,
  toggleLibrarySearch: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ movies, user }) => ({
  showSearchLibrary: movies && movies.showSearchLibrary,
  userLoggedIn: user && user.loggedIn,
})

const mapDispatchToProps = {
  toggleLibrarySearch: moviesActions.toggleSearchLibrary,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
