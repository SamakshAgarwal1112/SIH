import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Stack,
  Text,
  Flex,
  Image,
  HStack,
  Heading,
} from '@chakra-ui/react';

import Navbar from '../../components/Navbar';
import SidePanel from '../../components/SidePanel';
import slides from '../../TempData/Slides';

export default function LandingPage() {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'whiteAlpha.500',
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Flex>
        <SidePanel />
        <Flex
          alignItems="center"
          justifyContent="center"
          align="right"
          mr="2rem"
          mt="1rem"
          ml="2rem"
          width="full"
        >
          <Flex pos="relative" overflow="hidden" borderRadius="1rem">
            <Flex h="41.6rem" w="full" {...carouselStyle}>
              {slides.map((slide, sid) => (
                <Box
                  key={`slide-${sid}`}
                  boxSize="full"
                  shadow="md"
                  flex="none"
                  w="full"
                >
                  <Image
                    src={slide.img}
                    alt="carousel image"
                    objectFit="fill"
                    cursor="pointer"
                    w="full"
                    onClick={() => {
                      navigate('/profile');
                    }}
                  />
                  <Stack
                    p="8px 12px"
                    pos="absolute"
                    textAlign="left"
                    w="full"
                    color="white"
                    backdropFilter="auto"
                    backdropBlur="8px"
                    bottom="0"
                  >
                    <Heading fontSize="6xl" fontWeight="semibold">
                      {slide.label}
                    </Heading>
                    <Text fontSize="lg" mb="2rem">
                      {slide.description}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </Flex>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
              &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
              &#10095;
            </Text>
            <HStack justify="center" pos="absolute" bottom="8px" w="full">
              {Array.from({
                length: slidesCount,
              }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={['7px', null, '12px']}
                  m="0 2px"
                  bg={
                    currentSlide === slide ? 'whiteAlpha.800' : 'whiteAlpha.500'
                  }
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{
                    bg: 'whiteAlpha.800',
                  }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
