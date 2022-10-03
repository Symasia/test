import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { StyledWidgetContainer } from "~/components/styled/widgetContainer.styled";

const components = {
  StyledWidgetContainer,
};

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  cssVarPrefix: "en",
};

const styles = {
  global: {
    html: {
      backgroundColor: "white",
    },
  },
};

export const ChakraTheme = extendTheme({ config, styles, components });
