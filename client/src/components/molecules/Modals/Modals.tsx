import React from 'react'
import { connect } from 'react-redux'

import modalsActions from 'actions/modals/modals.actions'
import Modal from './Modal'

interface ModalsProps {
  closeModal: () => void;
  modals: {
    id: string,
    type: string,
    content?: {
      text?: string,
      movieId?: string,
    },
    onClose?: () => void,
    onConfirm?: () => void,
  }[];
}

const Modals: React.SFC<ModalsProps> = ({ modals, closeModal }) => (
  <div data-testid="modals">
    {modals &&
      modals.map((item, i) => (
        <Modal
          item={item}
          key={item.id}
          onClose={() => closeModal(item.id)}
          zIndex={i}
        />
      ))}
  </div>
)

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
