// app 基本機能(共通画面はここにまとめる)
import {
  Center,
  Flex,
  SkipNavContent,
  SkipNavLink,
  Spacer,
  Text
} from "@chakra-ui/react"
import React from "react"

import { Providers } from "~providers"

import rippleStyle from "./repple.module.css"

const App = () => {
  return (
    <Providers>
      <SkipNavLink>Skip to content</SkipNavLink>
      <SkipNavContent />
      <Ripple />
      <Flex>
        <Spacer />
        <Center>
          <Text fontSize="5xl">Extension :enable</Text>
        </Center>
        <Spacer />
      </Flex>
    </Providers>
  )
}

const Ripple = () => {
  return (
    <div className={rippleStyle.rippleContainer}>
      <div className={rippleStyle.ripples}>
        <div></div>
      </div>
    </div>
  )
}
export default App
