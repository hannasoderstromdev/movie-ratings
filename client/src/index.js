import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
  faTrashAlt,
  faLock,
  faUnlock,
  faTh,
  faThList,
} from '@fortawesome/free-solid-svg-icons'

import App from './components/App'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

// Add all icons used here
library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
  faTrashAlt,
  faLock,
  faUnlock,
  faTh,
  faThList,
)

ReactDOM.render(<App />, document.getElementById('root'))
