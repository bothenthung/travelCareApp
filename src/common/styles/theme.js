const { extendTheme } = require("native-base")

const theme = extendTheme({
  colors: {
    primary: {
      900: "#db147f",
      800: "#e91e63",
      700: "#f06292",
      600: "#f48fb1",
      500: "#f8bbd0",
      400: "#fce4ec",
      300: "#ff80ab",
      200: "#ff4081",
      100: "#ff80ab",
      50: "#ff80ab",
    },
    secondary: {
      900: "#32a4fc",
      800: "#2196f3",
      700: "#4dabf5",
      600: "#81d4fa",
      500: "#b3e5fc",
      400: "#e1f5fe",
      300: "#03a9f4",
      200: "#03a9f4",
      100: "#03a9f4",
      50: "#03a9f4",
    },
    green: {
      900: "#004711",
      800: "#006b19",
      700: "#008e22",
      600: "#00b22a",
      500: "#00d633",
      400: "#00f93b",
      300: "#1eff54",
      200: "#42ff6f",
      100: "#66ff8a",
      50: "#8affa5",
    },
    red: {
      900: "#691301",
      800: "#8c1a02",
      700: "#af2002",
      600: "#d22703",
      500: "#f52d04",
      400: "#fb4722",
      300: "#ff6445",
      200: "#ff8268",
      100: "#fd9f8b",
    },
  },
  components: {
    Input: {
      baseStyle: {
        _focus: {
          bg: "transparent",
        },
      },
    },
  },
})

export default theme
