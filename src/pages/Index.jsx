import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Job Listing Website</Heading>
        <Text fontSize="lg" textAlign="center">Find your dream job or the perfect candidate here!</Text>
        
        <HStack spacing={4} width="100%" justifyContent="center">
          <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg">Search Jobs</Button>
          <Button leftIcon={<FaBriefcase />} colorScheme="teal" size="lg">Post a Job</Button>
        </HStack>
        
        <Box width="100%" padding={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading as="h2" size="lg" marginBottom={4}>Featured Jobs</Heading>
          <VStack spacing={4} align="start">
            <Box padding={4} borderWidth={1} borderRadius="lg" width="100%">
              <Heading as="h3" size="md">Software Engineer</Heading>
              <Text>Company: Tech Innovators</Text>
              <Text>Location: Remote</Text>
              <Button colorScheme="teal" size="sm" marginTop={2}>Apply Now</Button>
            </Box>
            <Box padding={4} borderWidth={1} borderRadius="lg" width="100%">
              <Heading as="h3" size="md">Product Manager</Heading>
              <Text>Company: Creative Solutions</Text>
              <Text>Location: New York, NY</Text>
              <Button colorScheme="teal" size="sm" marginTop={2}>Apply Now</Button>
            </Box>
            <Box padding={4} borderWidth={1} borderRadius="lg" width="100%">
              <Heading as="h3" size="md">UX Designer</Heading>
              <Text>Company: Design Hub</Text>
              <Text>Location: San Francisco, CA</Text>
              <Button colorScheme="teal" size="sm" marginTop={2}>Apply Now</Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;