import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, company, location, description };
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Post a Job</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="company" isRequired>
              <FormLabel>Company</FormLabel>
              <Input value={company} onChange={(e) => setCompany(e.target.value)} />
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Job Description</FormLabel>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">Post Job</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default PostJob;