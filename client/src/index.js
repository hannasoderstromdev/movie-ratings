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
  faTrashAlt,
  faLock,
  faUnlock,
  faTh,
  faThList,
} from '@fortawesome/free-solid-svg-icons'
import { whyDidYouUpdate } from 'why-did-you-update'

import App from './components/App'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React, { include: [/^pure/], exclude: [/^Connect/] })
}

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
  faTrashAlt,
  faLock,
  faUnlock,
  faTh,
  faThList,
)

ReactDOM.render(<App />, document.getElementById('root'))
