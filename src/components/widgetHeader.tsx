import { Box, Flex, VStack, IconButton } from "@chakra-ui/react";
import { DummyWidgetData } from "~/app";
import { TruncatedText } from "~/components/shared/truncatedText";
import { FiMaximize } from "react-icons/fi";

export const WidgetHeader = () => {
  return (
    // <Box as="section" height="65px" p="2.5px">
    //   <Flex flexDirection="row">
    //     <TruncatedText
    //       as="h4"
    //       text={DummyWidgetData.stream.title}
    //       truncateAt={15}
    //     />
    <VStack>
      <IconButton icon={<FiMaximize />} aria-label="full-screen" />
    </VStack>
    //   </Flex>
    // </Box>
  );
};
