import React from 'react'
import { Provider } from 'react-redux'

const Root = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
)

export default Root
