import { extendTheme } from "@chakra-ui/react";
import { checkboxTheme } from "./Generic/Checkbox";
import { radioTheme } from "./Generic/Radio";

export const theme = extendTheme({
  colors: {
    text: {
      main: "#050f0a",
    },
    background: {
      main: "#f3fcf8",
      50: "#ebfaf3",
      100: "#d6f5e7",
      200: "#adebcf",
      300: "#85e0b7",
      400: "#5cd69f",
      500: "#33cc87",
      600: "#29a36c",
      700: "#1f7a51",
      800: "#145236",
      900: "#0a291b",
    },
    primary: {
      main: "#31d885",
      50: "#eafbf2",
      100: "#d4f7e6",
      200: "#a9efcc",
      300: "#7ee7b3",
      400: "#54de99",
      500: "#29d680",
      600: "#21ab66",
      700: "#18814d",
      800: "#105633",
      900: "#082b1a",
    },
    secondary: {
      main: "#7af0b5",
      50: "#e8fcf2",
      100: "#d1fae6",
      200: "#a3f5cc",
      300: "#75f0b3",
      400: "#47eb99",
      500: "#19e680",
      600: "#14b866",
      700: "#0f8a4d",
      800: "#0a5c33",
      900: "#052e1a",
    },
    accent: {
      main: "#45f79e",
      50: "#e7fef2",
      100: "#cefde6",
      200: "#9dfbcc",
      300: "#6cf9b3",
      400: "#3bf799",
      500: "#0af580",
      600: "#08c466",
      700: "#06934d",
      800: "#046233",
      900: "#02311a",
    },
  },
  components: {
    Checkbox: checkboxTheme,
    Radio: radioTheme,
  },
});
