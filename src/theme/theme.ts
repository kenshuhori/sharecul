import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: {
        "body": {
          fontSize: "md",
          backgroundColor: "white",
          color: "black",
        }
      },
    },
  })

  export default theme;
