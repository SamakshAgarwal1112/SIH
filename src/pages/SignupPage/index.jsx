import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Link as ChakraLink,
  Button,
  Center,
} from '@chakra-ui/react';
import { BiShow, BiHide } from 'react-icons/bi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Navbar from '../../components';

function SignupPage() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Navbar />
      <Center>
        <Flex align="center" justify="space-evenly" w="80%" pt="2rem">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="41rem"
            h="47rem"
            textAlign="center"
            position="relative"
            borderRadius="50px"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              zIndex="1"
              background={`url('src/assets/pexels-vasanth-babu-797793 1.svg') center/cover no-repeat`}
              filter="blur(5px)"
              opacity="0.8"
            ></Box>
            <Text color="#ffffff" fontSize="42px" zIndex="1" fontWeight="700">
              Welcome to Sangam!
            </Text>
            <Text
              color="#ffffff"
              fontSize="21px"
              zIndex="1"
              fontWeight="thin"
              width="470px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
          <Flex
            direction="column"
            align="center"
            justify="space-evenly"
            zIndex="1"
          >
            <Text fontSize="40px" fontWeight="700">
              Get Started
            </Text>
            <Text
              fontSize="21px"
              fontWeight="light"
              color="rgba(0, 0, 0, 0.40)"
            >
              Already have an accout?
              <Link>
                <ChakraLink color="#637E44"> Sign In</ChakraLink>
              </Link>
            </Text>
            <VStack spacing="14" mt="12">
              <Input
                type="text"
                fontSize="20px"
                color="#637E44"
                placeholder="Full Name"
                size="lg"
                w="500px"
                borderColor="#637E44"
                focusBorderColor="#637E44"
                variant="flushed"
                _placeholder={{
                  color: 'rgba(0, 0, 0, 0.40)',
                  fontWeight: '400',
                  fontSize: '22px',
                }}
              />
              <Input
                type="email"
                // value={email}
                fontSize="20px"
                color="#637E44"
                placeholder="Email"
                size="lg"
                borderColor="#637E44"
                focusBorderColor="#637E44"
                variant="flushed"
                _placeholder={{
                  color: 'rgba(0, 0, 0, 0.40)',
                  fontWeight: '400',
                  fontSize: '22px',
                }}
              />
              <InputGroup userSelect="none">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  // value={password}
                  fontSize="20px"
                  color="#637E44"
                  placeholder="Password"
                  size="lg"
                  borderColor="#637E44"
                  focusBorderColor="#637E44"
                  variant="flushed"
                  _placeholder={{
                    color: 'rgba(0, 0, 0, 0.40)',
                    fontWeight: '400',
                    fontSize: '22px',
                  }}
                />
                <InputRightElement onClick={handleShowPassword}>
                  {showPassword ? (
                    <BiHide color="#637E44" size="22px" />
                  ) : (
                    <BiShow color="#637E44" size="22px" />
                  )}
                </InputRightElement>
              </InputGroup>
            </VStack>
            <Button
              w="220px"
              h="55px"
              mt="12"
              borderRadius="18px"
              color="#ffffff"
              bg="#83A98E"
              fontSize="20px"
              fontWeight="thin"
              _hover={{
                bg: '#5e8068',
              }}
            >
              Sign Up
              <MdOutlineKeyboardArrowRight />
            </Button>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

export default SignupPage;
