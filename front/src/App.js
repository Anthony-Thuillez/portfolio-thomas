import React from 'react'
import AnimateContextProvider from './contexts/animate.context'
import Page from './components/templates/Page' 

export default function App() {

  return (
    <AnimateContextProvider>
        <Page />
    </AnimateContextProvider>
  )
}
