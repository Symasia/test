import { HStack, Box } from "@chakra-ui/react";
import { FunctionComponent } from "preact";
import { WidgetContainer } from "~/components/widgetContainer";
import { useUIContext } from "~/state/ui.context";
import { ThemeToggle } from "~/utils/dev-tools";
import { WidgetHeader } from "./components/widgetHeader";

export const DummyWidgetData = {
  stream: {
    title: "Woohoo! Super Cool stuff... ",
  },
};

export const App: FunctionComponent = () => {
  const { variant } = useUIContext();
  return (
    <>
      <ThemeToggle />
      <WidgetContainer variant={variant}>
        {/* <WidgetHeader /> */}
      </WidgetContainer>
    </>
  );
};
