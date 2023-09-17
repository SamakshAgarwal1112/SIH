import Navbar from '../../components';
import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Link as ChakraLink,
  Button,
  Center,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function RegisterPage() {
  const customRadioStyles = {
    // width: "40px",     // Adjust the width as needed
    // height: "40px",    // Adjust the height as needed
    fontSize: '28px', // Adjust the font size as needed
  };
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
            // align="center"
            w="500px"
            textAlign="center"
            justify="space-evenly"
            zIndex="1"
          >
            <Text fontSize="40px" fontWeight="700">
              Register as?
            </Text>
            <Text
              fontSize="22px"
              fontWeight="light"
              color="rgba(0, 0, 0, 0.40)"
            >
              What is your role at Sangam?
            </Text>
            <RadioGroup size="lg" mt="12">
              <VStack
                align="start"
                color="rgba(0, 0, 0, 0.40)"
                spacing="8"
                fontSize="22px"
              >
                <Radio value="startup">Start-Up</Radio>
                <Radio value="investor">Investor</Radio>
                <Radio value="incubator">Incubator</Radio>
                <Radio value="accelerator">Acclerator</Radio>
                <Radio value="government">Government Agent</Radio>
                <Radio value="general">General User</Radio>
                <Radio value="other">Other</Radio>
              </VStack>
            </RadioGroup>
            <Center>
              <Button
                w="220px"
                h="55px"
                mt="12"
                borderRadius="17px"
                color="#ffffff"
                bg="#83A98E"
                fontSize="20px"
                fontWeight="thin"
                _hover={{
                  bg: '#5e8068',
                }}
              >
                Continue
                <MdOutlineKeyboardArrowRight />
              </Button>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

export default RegisterPage;
