import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
  faEllipsisV,
  faEllipsisH,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import 'jest-localstorage-mock'

// Adds additional expect-functions
import 'jest-dom/extend-expect'
import 'jest-axe/extend-expect'

// Cleans up DOM after each test automatically
import 'react-testing-library/cleanup-after-each'

library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
  faEllipsisV,
  faEllipsisH,
  faLock,
)
