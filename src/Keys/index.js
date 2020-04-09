import * as dev from './dev'
import * as prod from './prod'

const keys = process.env.NODE_ENV === 'production' ? prod : dev
export default keys
