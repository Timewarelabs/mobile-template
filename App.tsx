import 'intl'
// import 'intl/locale-data/jsonp/pt-BR';

import React from 'react'
import { GlobalProvider } from './src/contexts/global'

import Routes from './src/routes'

if(__DEV__) { // @ts-ignore
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App () {

  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  )
}