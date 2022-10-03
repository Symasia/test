import { Box, Button, useColorMode } from "@chakra-ui/react";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <Box position="fixed" top="15px" right="15px">
      <Button colorScheme="yellow" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}
