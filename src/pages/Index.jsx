import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, useToast } from "@chakra-ui/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    toast({
      title: "Login Attempt",
      description: "You have attempted to login. Implement authentication logic here.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="sm" mt={10}>
      <Stack spacing={8}>
        <Heading textAlign="center">Login</Heading>
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" width="full" mt={4}>
              Sign In
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
