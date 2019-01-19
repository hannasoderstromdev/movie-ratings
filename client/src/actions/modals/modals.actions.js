import modalsTypes from './modals.types'

const openModal = ({ id, type, content }) => ({
  type: modalsTypes.OPEN_MODAL,
  payload: { item: { id, type, content } },
})

const closeModal = id => ({
  type: modalsTypes.CLOSE_MODAL,
  payload: { id },
})

const modalsActions = {
  openModal,
  closeModal,
}

export default modalsActions
