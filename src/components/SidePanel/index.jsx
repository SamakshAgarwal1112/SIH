import React from 'react';
import { Flex, Avatar, Image, Divider } from '@chakra-ui/react';

function SidePanel() {
  return (
    <Flex
      flexDirection="column"
      height="46rem"
      width="5.75rem"
      bgColor="#E9F4EC"
      alignItems="center"
    >
      <Avatar src="https://bit.ly/broken-link" mt="1rem" mb="1rem" />
      <Divider
        orientation="horizontal"
        width="80%"
        borderWidth="0.7px"
        borderColor="#83A98E"
        mb="1rem"
      />

      <Image src="/assets/AddServer.svg" alt="Add server" width="3.2rem" />
    </Flex>
  );
}

export default SidePanel;
