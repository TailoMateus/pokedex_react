import React, { FC } from 'react'
import { wrapper } from '../Repositories'
import { AppProps } from 'next/app'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)