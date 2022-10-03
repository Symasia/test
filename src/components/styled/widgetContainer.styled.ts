import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const StyledWidgetContainer = {
  // The styles all Cards have in common
  baseStyle: (props: StyleFunctionProps) => ({
    display: "flex",
    flexDirection: "column",
    background: props.colorMode === "dark" ? "#111" : "#fff",
    color: props.colorMode === "dark" ? "#fff" : "#111",
    alignItems: "center",
    position: "fixed",
    zIndex: 99999,
    bottom: "15px",
    left: "15px",
    borderRadius: "1.025rem",
  }),
  // Two variants: rounded and smooth
  variants: {
    minimized: {
      height: "75px",
      width: "75px",
    },
    compact: {
      height: "375px",
      width: "400px",
    },
    vertical: {},
    "full-screen": {},
  },
  // The default variant value
  defaultProps: {
    variant: "compact",
  },
};
