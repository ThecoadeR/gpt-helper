import { Box, InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

const DashboardSearch = () => {
  return (
  <Box>
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
      >
        <Icon as={FaSearch} color='gray.300' />
      </InputLeftElement>
      <Input type='tel' placeholder='search' />
    </InputGroup>
  </Box>)
}

export default DashboardSearch