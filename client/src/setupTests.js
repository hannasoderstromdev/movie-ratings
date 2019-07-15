import 'jest-styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faCog,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faMinus,
  faPlus,
  faPlusCircle,
  faSearch,
  faSearchPlus,
  faStar,
  faTimes,
  faTrashAlt,
  faList,
  faLock,
  faUnlock,
  faTh,
  faThList,
} from '@fortawesome/free-solid-svg-icons'
import 'jest-localstorage-mock'

// Adds additional expect-functions
import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'

library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faCog,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faMinus,
  faPlus,
  faPlusCircle,
  faSearch,
  faSearchPlus,
  faStar,
  faTimes,
  faTrashAlt,
  faList,
  faLock,
  faUnlock,
  faTh,
  faThList,
)
