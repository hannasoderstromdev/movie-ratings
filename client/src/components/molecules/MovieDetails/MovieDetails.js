import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import mcImage from './img/metacritics.png'
import rtImage from './img/rottentomatoes.png'
import imdbImage from './img/imdb.png'

import { Text, TextDark } from 'components/atoms/Typography'
import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'

const MoreDetails = styled.div``

const IconWrapper = styled.div`
  margin-left: 0.5rem;
`

const MoreDetailsContent = styled.div`
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const Plot = styled.div`
  margin-bottom: 2.5rem;
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 0.5rem;
  }

  > div:first-of-type {
    margin-bottom: 2.5rem;
  }
`

const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

const RatingsItem = styled.div`
  display: flex;
  align-items: center;
`

const Img = styled.img`
  margin-right: 1rem;
`

const MovieDetails = ({
  actors,
  plot,
  released,
  country,
  director,
  language,
  production,
  ratings,
  isOpen,
  toggle,
  writer,
}) => (
  <MoreDetails>
    <Button onClick={toggle} thirdiary>
      <Text>More details</Text>
      <IconWrapper>
        {isOpen ? (
          <Icon color="#F3F3F3" icon={['fas', 'chevron-up']} iconsize="14px" />
        ) : (
          <Icon
            color="#F3F3F3"
            icon={['fas', 'chevron-down']}
            iconsize="14px"
          />
        )}
      </IconWrapper>
    </Button>
    {isOpen ? (
      <MoreDetailsContent>
        <Plot>
          <Text>{plot}</Text>
        </Plot>

        <Meta>
          <div>
            <TextDark>
              {released}, {country} ({language})
            </TextDark>
            <br />
            <TextDark>{production}</TextDark>
          </div>

          <div>
            <TextDark>Written by: </TextDark>
            <Text>{writer}</Text>
          </div>

          <div>
            <TextDark>Directed by: </TextDark>
            <Text>{director}</Text>
          </div>

          <div>
            <TextDark>Actors: </TextDark>
            <Text>{actors}</Text>
          </div>
        </Meta>

        <Ratings>
          <RatingsItem>
            <Img alt={ratings[0].Source} src={imdbImage} />
            <Text>{ratings[0].Value}</Text>
          </RatingsItem>
          <RatingsItem>
            <Img alt={ratings[1].Source} src={rtImage} />
            <Text>{ratings[1].Value}</Text>
          </RatingsItem>
          <RatingsItem>
            <Img alt={ratings[2].Source} src={mcImage} />
            <Text>{ratings[2].Value}</Text>
          </RatingsItem>
        </Ratings>
      </MoreDetailsContent>
    ) : null}
  </MoreDetails>
)

MovieDetails.propTypes = {
  actors: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string.isRequired,
      Value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  released: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  writer: PropTypes.string.isRequired,
}

export default MovieDetails
