import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode } from "@chakra-ui/react"
import React from "react"

const Hedder = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="DarkMode Switch"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  )
}

export default Hedder
