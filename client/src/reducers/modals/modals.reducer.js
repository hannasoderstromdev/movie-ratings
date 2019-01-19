import modalsTypes from 'actions/modals/modals.types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case modalsTypes.OPEN_MODAL:
      return [...state.concat(action.payload.item)]

    case modalsTypes.CLOSE_MODAL:
      return [...state.filter(item => item.id !== action.payload.id)]

    default:
      return state
  }
}
