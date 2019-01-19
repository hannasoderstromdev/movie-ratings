import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import modalsActions from 'actions/modals/modals.actions'

import Modal from 'components/molecules/Modal'

const Modals = ({ modals, closeModal }) => (
  <div data-testid="modals">
    {modals &&
      modals.map((item, i) => (
        <Modal
          item={item}
          key={item.id}
          onClose={() => closeModal(item)}
          zIndex={i}
        />
      ))}
  </div>
)

Modals.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.shape({
        text: PropTypes.string,
      }),
      onConfirm: PropTypes.func,
    }),
  ).isRequired,
}

const mapStateToProps = ({ modals }) => ({
  modals,
})

const mapDispatchToProps = {
  closeModal: modalsActions.closeModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modals)
