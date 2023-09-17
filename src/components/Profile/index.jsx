import React from 'react';
import { Box, Center, Image, Flex, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Profile = () => {
  return (
    <>
      <Center h="100vh" color={'#ffffff'}>
        <Box
          w="100%"
          display="block"
          marginBottom={'auto'}
          fontSize={'20px'}
          fontWeight={'400'}
        >
          <Flex
            align="center"
            w="100%"
            bgImage={'/assets/herbalTree.svg'}
            aspectRatio={'1280/738'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
          >
            <Flex
              direction={'column'}
              w="50%"
              width={'50%'}
              marginLeft={'auto'}
              pl={'76.83px'}
              pr={'20px'}
              h={'100%'}
              align="flex-start"
              justify="center"
              textAlign={'left'}
              css={{ backdropFilter: 'blur(6px)' }}
            >
              <Text fontSize={'64px'} fontWeight={700}>
                Herbal Tree
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={'column'} mx="24px">
            <Text color={'#637E44'} fontSize={'64px'} fontWeight={700}>
              Products
            </Text>
            <Flex align={'center'} justify={'center'} gap="24px">
              <Box
                w={'100%'}
                aspectRatio={'10/9'}
                boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
                rounded="md"
              ></Box>
              <Box
                w={'100%'}
                aspectRatio={'10/9'}
                boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
                rounded="md"
              ></Box>
              <Box
                w={'100%'}
                aspectRatio={'10/9'}
                boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
                rounded="md"
              ></Box>
            </Flex>
            <Text color={'#000'}>More...</Text>
          </Flex>
          <Flex direction={'column'} mx="24px" gap={'15px'} mt={'10px'}>
            <Text color={'#637E44'} fontSize={'64px'} fontWeight={700}>
              Analytics
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              w="100%"
              aspectRatio={'41/12'}
              color={'#000'}
              boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
              rounded="md"
            >
              <StarIcon
                color={'#FFE600'}
                fontSize="128px"
                aspectRatio={'1/1'}
                pl={'24px'}
              />
              <Box textAlign={'center'} pl={'16px'}>
                <Text fontSize={'128px'} fontWeight={700} h={'156px'}>
                  4.3
                </Text>
                <Text fontSize={'32px'} fontWeight={700}>
                  Rating
                </Text>
              </Box>
              <Text pl={'100px'} pr={'24px'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Flex>
            <Flex
              direction={'column'}
              align={'center'}
              justify={'center'}
              w="100%"
              aspectRatio={'41/12'}
              color={'#000'}
              boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
              rounded="lg"
            >
              <Image
                aspectRatio={'51/24'}
                px={'106px'}
                pt={'60px'}
                src="/assets/Chart.png"
              ></Image>
              <Text py={'50px'} px={'24px'} lineHeight={'5'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={'column'} mx="24px" gap={'15px'} mt={'10px'}>
            <Text color={'#637E44'} fontSize={'64px'} fontWeight={700}>
              Our Locations
            </Text>
            <Image src="/assets/location.png"></Image>
          </Flex>
          <Flex
            direction={'column'}
            mx="24px"
            gap={'15px'}
            mt={'10px'}
            color={'#000'}
          >
            <Text color={'#637E44'} fontSize={'64px'} fontWeight={700}>
              Founders
            </Text>
            <Flex gap={'16px'}>
              <Flex
                w="100%"
                direction={'column'}
                aspectRatio={5 / 6}
                textAlign={'center'}
                align={'center'}
                justify={'center'}
                boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
                rounded="md"
              >
                <Image
                  src="/assets/Profile.svg"
                  mx={'auto'}
                  px={'21px'}
                ></Image>
                <Text
                  color={'#637E44'}
                  fontSize={'32px'}
                  pb={'15px'}
                  fontWeight={700}
                >
                  Dr. Ankur Bathla
                </Text>
                <Text lineHeight={5} mx={'20px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
              <Flex
                w="100%"
                direction={'column'}
                textAlign={'center'}
                align={'center'}
                justify={'center'}
                boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
                rounded="md"
              >
                <Image
                  src="/assets/Profile.svg"
                  mx={'auto'}
                  px={'21px'}
                ></Image>
                <Text
                  color={'#637E44'}
                  fontSize={'32px'}
                  pb={'15px'}
                  fontWeight={700}
                >
                  Dr. Ankur Bathla
                </Text>
                <Text lineHeight={5} mx={'20px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
              <Flex
                w="100%"
                direction={'column'}
                textAlign={'center'}
                align={'center'}
                justify={'center'}
                boxShadow="0px 0px 16px 0px rgba(99, 126, 68, 0.20)"
                rounded="md"
              >
                <Image
                  src="/assets/Profile.svg"
                  mx={'auto'}
                  px={'21px'}
                ></Image>
                <Text
                  color={'#637E44'}
                  fontSize={'32px'}
                  pb={'15px'}
                  fontWeight={700}
                >
                  Dr. Ankur Bathla
                </Text>
                <Text lineHeight={5} mx={'20px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
};
export default Profile;
