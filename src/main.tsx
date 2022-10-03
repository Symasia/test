import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { render } from "preact";
import { App } from "~/app";
import { ChakraTheme } from "~/styles/chakra.theme";
import { UIContextProvider } from "./state/ui.context";

/**
 * Read the following link regarding React 18 Implicit Children
 * Preact uses a ComponentChildren type for the children prop
 * FunctionComponent should be imported from preact instead of React
 * import { FunctionComponent, ComponentChildren } from "preact";
 * https://preactjs.com/guide/v10/typescript/
 * Written on 2022/09/28
 */

render(
  <>
    <ColorModeScript initialColorMode={ChakraTheme.config.initialColorMode} />
    <ChakraProvider theme={ChakraTheme}>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </ChakraProvider>
  </>,
  document.getElementById("app") as HTMLElement
);
