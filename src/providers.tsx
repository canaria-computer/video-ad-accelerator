import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import React from "react"

import ColorTheme from "./theme"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  }
}

const size = {
  xl: {
    h: "56px",
    fontSize: "lg",
    px: "64px"
  }
}

export const theme = extendTheme({ colors, size })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={ColorTheme.config.initialColorMode} />
      <ChakraProvider theme={ColorTheme}>{children}</ChakraProvider>
    </>
  )
}
