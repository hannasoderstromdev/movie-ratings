import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
  faLock,
  faUnlock,
} from '@fortawesome/free-solid-svg-icons'

import App from './components/App'

// Add all icons used here
library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
  faLock,
  faUnlock,
)

ReactDOM.render(<App />, document.getElementById('root'))
