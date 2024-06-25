import { Container, VStack, Heading, Text, Box, Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Job Listing Website</Heading>
        <Text fontSize="lg" textAlign="center">Find your dream job or the perfect candidate here!</Text>
        
        <HStack spacing={4} width="100%" justifyContent="center">
          <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg">Search Jobs</Button>
          <Link to="/post-job">
            <Button leftIcon={<FaBriefcase />} colorScheme="teal" size="lg">Post a Job</Button>
          </Link>
        </HStack>
        
        <Box width="100%" padding={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Heading as="h2" size="lg" marginBottom={4}>Featured Jobs</Heading>
          <VStack spacing={4} align="start">
            {jobs.map((job, index) => (
              <Box key={index} padding={4} borderWidth={1} borderRadius="lg" width="100%">
                <Heading as="h3" size="md">{job.title}</Heading>
                <Text>Company: {job.company}</Text>
                <Text>Location: {job.location}</Text>
                <Text>{job.description}</Text>
                <Button colorScheme="teal" size="sm" marginTop={2}>Apply Now</Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;