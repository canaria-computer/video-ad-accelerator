import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Link,
  Switch
} from "@chakra-ui/react"
import React from "react"

import App from "~app"

function IndexPopup() {
  return (
    // <Box maxW={600} minW={380} m={5} p={5}>
    //   <FormControl display="flex" alignItems="center">
    //     <FormLabel htmlFor="yt-video-ad-accelerate" mb="0">
    //       Enable Youtube Ad speed up(accelerate)?
    //     </FormLabel>
    //     <Switch id="yt-video-ad-accelerate" />
    //   </FormControl>
    //   <Button>
    //     <Link href="./tabs/firstInstall.html" target="_blank">
    //       利用規約を確認する
    //     </Link>
    //   </Button>
    // </Box>
    // TODO 大きいタブで開くボタン設置
    <App />
  )
}

export default IndexPopup
