import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

import Expire from 'components/hoc/Expire'

import { Text } from 'components/atoms/Typography'
import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'

const AlertWrapper = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  position: absolute;
  bottom: 6rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ type, theme }) =>
    type === 'success' && theme.colors.success};
  background-color: ${({ type, theme }) =>
    type === 'danger' && theme.colors.danger};
  background-color: ${({ type, theme }) =>
    type === 'alert' && theme.colors.alert};
`

const AlertIcon = styled(Icon)`
  color: ${({ type, theme }) =>
    type === 'success' && theme.colors.successLight};
  color: ${({ type, theme }) => type === 'danger' && theme.colors.dangerLight};
  color: ${({ type, theme }) => type === 'alert' && theme.colors.alertLight};
`

const IconWrapper = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ type, theme }) =>
    type === 'success' && theme.colors.successDark};
  background-color: ${({ type, theme }) =>
    type === 'danger' && theme.colors.dangerDark};
  background-color: ${({ type, theme }) =>
    type === 'alert' && theme.colors.alertDark};

  svg {
    color: ${({ type, theme }) => type === 'success' && theme.colors.success};
    color: ${({ type, theme }) => type === 'danger' && theme.colors.danger};
    color: ${({ type, theme }) => type === 'alert' && theme.colors.alert};
  }
`

const TextWrapper = styled(Text)`
  margin: 0 1rem;
  flex: 1;
`

const Alert = ({ status, error, type, message, clearError }) => {
  return error ? (
    <Expire callOnFinish={clearError}>
      <AlertWrapper type={type}>
        <IconWrapper type={type}>
          {type === 'success' && (
            <Icon icon={['fas', 'check-circle']} iconsize="18px" />
          )}
          {type === 'danger' && (
            <Icon icon={['fas', 'exclamation-triangle']} iconsize="18px" />
          )}
          {type === 'alert' && (
            <Icon icon={['fas', 'exclamation-circle']} iconsize="18px" />
          )}
        </IconWrapper>

        <TextWrapper data-testid="message">
          {status}: {message}
        </TextWrapper>

        <Button onClick={clearError} thirdiary>
          <AlertIcon
            color="rgba(0,0,0, .25)"
            icon={['fas', 'times']}
            iconsize="16px"
            type={type}
          />
        </Button>
      </AlertWrapper>
    </Expire>
  ) : null
}

Alert.defaultProps = {
  error: false,
  message: '',
  status: 0,
  type: 'alert',
}

Alert.propTypes = {
  clearError: PropTypes.func.isRequired,
  error: PropTypes.bool,
  message: PropTypes.string,
  status: PropTypes.number,
  type: PropTypes.string,
}

const mapStateToProps = ({ errorHandler }) => ({
  ...errorHandler,
})

const mapDispatchToProps = {
  clearError: errorHandlerActions.clearError,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert)
