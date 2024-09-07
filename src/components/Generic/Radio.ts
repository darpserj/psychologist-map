import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const filledRadio = definePartsStyle({
  // define the part you're going to style
  control: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    borderRadius: "md",
    border: "none",
    bg: "primary.200",
    _checked: {
      bg: "primary.400",
      _before: {
        content: "''",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        borderRadius: "md",
        bg: "primary.400",
      },
    },
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    flex: 1,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    h: "100%",
    justifyContent: "center",
    zIndex: 2,
    marginInlineStart: 0,
    py: 1,
  },
});

export const radioTheme = defineMultiStyleConfig({ variants: { filledRadio } });
