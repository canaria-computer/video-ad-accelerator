import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import React from "react"

import ColorTheme from "./theme"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={ColorTheme.config.initialColorMode} />
      <ChakraProvider theme={ColorTheme}>{children}</ChakraProvider>
    </>
  )
}
