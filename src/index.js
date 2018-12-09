import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons'

import App from './components/App'

// Add all icons used here
library.add(faStar, faTimes)

ReactDOM.render(<App />, document.getElementById('root'))
