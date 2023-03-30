import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from "next/link";
import ThemeToggle from '@/components/Theme/ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading size='md' mr={4}>
        <Link href={"/"}>MAGIC GPT</Link>
      </Heading>
      <Flex marginLeft="auto" alignItems='center'>
        <Text mr={2}>请先设置API密钥</Text>
        <Text mr={4}>登陆</Text>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;