import { BoxProps, keyframes } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

import { Box } from "./Box"
import { Flex } from "./Flex"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const shimmering = keyframes`
  0% {
    background-position-x: 125%;
    background-size: 300%
  }
  100% {
    background-position-x: -25%;
    background-size: 400%;
  }
`;

const LoadingBox: FunctionComponent<
  { loading: boolean; placeholder?: any } & Omit<BoxProps, "placeholder">
> = ({ loading = true, placeholder = null, children, ...props }) => (
  <Box position={"relative"} zIndex={1} {...props}>
    {loading ? (
      <Box
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
        backgroundRepeat={"no-repeat"}
        animation={`${shimmering} 2s infinite ease-in-out, ${fadeIn} 0.02s forwards`}
        backgroundSize={"300%"}
        backgroundColor={"rgba(255,255,255,0.03)"}
        willChange={"opacity, background-size, background-position-x"}
        backgroundImage={
          "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.15) 49%, rgba(255,255,255,0.15) 51%, transparent 75%)"
        }
      >
        <Flex
          position={"absolute"}
          left={0}
          right={0}
          top={0}
          bottom={0}
          align={"center"}
          justify={"center"}
          opacity={0.1}
        >
          {placeholder}
        </Flex>
      </Box>
    ) : null}
    <Box transition={"opacity 0.6s"} willChange={"opacity"} opacity={loading ? 0 : 1}>
      {children}
    </Box>
  </Box>
);

export default LoadingBox