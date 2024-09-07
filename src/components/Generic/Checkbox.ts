import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const fullSizeFilled = definePartsStyle({
  // define the part you're going to style
  label: defineStyle({
    position: "absolute",
    zIndex: 2,
    fontSize: "xs",
    top: 3,
    left: 4,
  }),
  control: defineStyle({
    zIndex: 2,
    flexGrow: 1,
    basis: "100%",
    width: "100%",
    minHeight: 10,
    minWidth: "100%",
    justifyContent: "start",
    pl: 2,
    rounded: "md",
    border: "none",
    _checked: {
      bg: "primary.400",
      _hover: {
        bg: "primary.500",
      },
      _groupHover: {
        bg: "primary.500",
      },
    },
  }),
  container: defineStyle({
    alignItems: "stretch",
    width: "100%",
    bg: "secondary.200",
    _hover: {
      bg: "secondary.300",
    },
    rounded: "md",
  }),
  icon: defineStyle({}),
});

export const checkboxTheme = defineMultiStyleConfig({ variants: { fullSizeFilled } });
