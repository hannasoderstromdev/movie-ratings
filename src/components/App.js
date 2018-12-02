import React from 'react'

import Theme from './Theme'
import Normalize from './Normalize'

import Home from './pages/Home'

const App = () => (
  <div>
    <Theme>
      <>
        <Normalize />
        <Home />
      </>
    </Theme>
  </div>
)

export default App
