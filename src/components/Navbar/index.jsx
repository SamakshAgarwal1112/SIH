import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Box w="100%" top="0">
        <Box h="2rem" bg="#000000" w="100%"></Box>
        <Flex
          bg="#83A98E"
          w="100%"
          h="5rem"
          align="center"
          justify="space-between"
          pl="1.5rem"
          pr="4.5rem"
        >
          <Link to="/">
            <Text
              fontSize="2xl"
              fontWeight="extrabold"
              color="#ffffff"
              ml="1rem"
            >
              SANGAM
            </Text>
          </Link>
          <Flex
            align="center"
            justify="space-between"
            color="#ffffff"
            fontSize="1.2rem"
            fontWeight="light"
            w="21.8rem"
          >
            <Link>
              <Text>Lorem</Text>
            </Link>
            <Link>
              <Text>Lorem</Text>
            </Link>
            <Link>
              <Text>Lorem</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
