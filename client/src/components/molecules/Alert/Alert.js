import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { alertClearAction } from 'actions/alerts/alerts.actions'

import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'

const AlertWrapper = styled.div`
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.6rem;
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

const Alert = ({ display, type, message, alertClearAction }) => {
  return display ? (
    <AlertWrapper type={type}>
      {message}
      <Button secondary onClick={alertClearAction}>
        <AlertIcon
          icon={['fas', 'times']}
          type={type}
          iconsize="16px"
          color="#fff"
        />
      </Button>
    </AlertWrapper>
  ) : null
}

Alert.defaultProps = {
  type: 'alert',
  message: '',
  visible: false,
  onClick: null,
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  visible: PropTypes.bool,
  onClick: PropTypes.func,
}

const mapStateToProps = ({ alerts }) => ({
  ...alerts,
})

const mapDispatchToProps = {
  alertClearAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert)
