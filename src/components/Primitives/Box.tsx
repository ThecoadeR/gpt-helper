import {
  BoxProps,
  Box as CoreBox,
  ThemingProps,
  forwardRef,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";

export const Box = forwardRef<BoxProps & ThemingProps<"Box">, typeof CoreBox>(
  ({ size, variant, ...rest }, ref) => (
    <CoreBox ref={ref} sx={useStyleConfig("Box", { size, variant })} {...rest} />
  ),
);
