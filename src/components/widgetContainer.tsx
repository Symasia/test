import { Box, useStyleConfig } from "@chakra-ui/react";
import { type ComponentChildren, type FunctionComponent } from "preact";
import {
  WidgetContainerDefaultVariant,
  type WidgetContainerVariantsEnum,
} from "~/types/widget";
import { motion } from "framer-motion";

interface IWidgetContainerProps {
  variant?: keyof typeof WidgetContainerVariantsEnum;
  children?: ComponentChildren;
}
/**
 *
 * @param variant - set to "compact" by default, must be one of the values
 * from WidgetContainerVariantsEnum
 * @returns
 */

export const WidgetContainer: FunctionComponent<IWidgetContainerProps> = (
  props
) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("StyledWidgetContainer", {
    variant:
      typeof variant === "string" ? variant : WidgetContainerDefaultVariant,
  });

  return (
    <motion.div>
      <Box __css={styles} {...rest} />
    </motion.div>
  );
};
