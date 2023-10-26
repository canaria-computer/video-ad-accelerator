import {
  Box,
  ChakraProvider,
  FormControl,
  FormLabel,
  Switch
} from "@chakra-ui/react"
import React from "react"

import App from "~app"

function IndexPopup() {
  return (
    // <Box m={10} p={20}>
    //   <FormControl display="flex" alignItems="center">
    //     <FormLabel htmlFor="email-alerts" mb="0">
    //       Enable email alerts?
    //     </FormLabel>
    //     <Switch id="email-alerts" />
    //   </FormControl>
    // </Box>
    <App />
  )
}

export default IndexPopup
