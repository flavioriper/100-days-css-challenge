import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { any } from 'prop-types'

const propTypes = {
  Component: any.isRequired,
  pageProps: any.isRequired,
}

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

MyApp.propTypes = propTypes

export default MyApp
