// app 基本機能(共通画面はここにまとめる)

import { Container, SkipNavContent, SkipNavLink } from "@chakra-ui/react"
import React from "react"

import ConfigPage from "~config"
import Hedder from "~hedder"
import { Providers } from "~providers"

const App = () => {
  return (
    <Providers>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Hedder />
      {/* <Container> */}
      <SkipNavContent />
      {/* <div>App</div> */}
      <ConfigPage />
      {/* </Container> */}
    </Providers>
  )
}

export default App
