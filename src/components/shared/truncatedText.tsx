import { Text, type TextProps } from "@chakra-ui/react";
import { type FunctionComponent } from "preact";

interface ITruncatedTextProps extends TextProps {
  truncateAt: number;
  text: string;
}

export const TruncatedText: FunctionComponent<ITruncatedTextProps> = ({
  truncateAt,
  text,
  ...props
}) => {
  const shouldTextBeTruncated = text.length > truncateAt;

  return (
    <Text {...props} title={shouldTextBeTruncated ? text : undefined}>
      {shouldTextBeTruncated ? `${text.slice(0, truncateAt)}...` : text}
    </Text>
  );
};
