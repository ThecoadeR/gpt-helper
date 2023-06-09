import { Box, Flex } from '@chakra-ui/react';

import ThemeToggle from '@/components/Theme/ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;