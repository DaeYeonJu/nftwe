import React, { FC } from "react";
import { Stack, Flex, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Layout: FC = ({ children }) => {
  return (
    <Stack h="100vh">
      <Flex
        bg="yellow.100"
        p={4}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Text fontWeight="bold">2022-Capstone</Text>
        </Box>
        <Link to="/">
          <Button size="sm" colorScheme="green">
            Main
          </Button>
        </Link>
        <Link to="main">
          <Button size="sm" colorScheme="blue">
            Register
          </Button>
        </Link>
        <Link to="my-animal">
          <Button size="sm" colorScheme="red">
            My NFT
          </Button>
        </Link>
      </Flex>
      <Flex
        direction="column"
        h="full"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </Stack>
  );
};

export default Layout;
