import {
  Flex as CoreFlex,
  FlexProps,
  ThemingProps,
  forwardRef,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";

export const Flex = forwardRef<FlexProps & ThemingProps<"Flex">, typeof CoreFlex>(
  ({ size, variant, ...rest }, ref) => (
    <CoreFlex ref={ref} sx={useStyleConfig("Flex", { size, variant })} {...rest} />
  ),
);
