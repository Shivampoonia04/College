import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Badge,
  useToast,
  Heading,
  Divider,
  List,
  ListItem
} from '@chakra-ui/react';

const API_URL = 'http://localhost:3000';

function App() {
  const [emails, setEmails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async (query = '') => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/emails?query=${query}`);
      const data = await response.json();
      setEmails(data);
    } catch (error) {
      toast({
        title: 'Error fetching emails',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchEmails(searchQuery);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Interested': 'green',
      'Meeting Booked': 'blue',
      'Not Interested': 'red',
      'Spam': 'gray',
      'Out of Office': 'orange'
    };
    return colors[category] || 'gray';
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Email Aggregator
        </Heading>

        <HStack>
          <Input
            placeholder="Search emails..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button
            colorScheme="blue"
            onClick={handleSearch}
            isLoading={loading}
          >
            Search
          </Button>
        </HStack>

        <List spacing={3}>
          {emails.map((email) => (
            <ListItem
              key={email.id}
              p={4}
              borderWidth={1}
              borderRadius="md"
              _hover={{ bg: 'gray.50' }}
            >
              <VStack align="stretch" spacing={2}>
                <HStack justify="space-between">
                  <Text fontWeight="bold">{email.subject}</Text>
                  <Badge colorScheme={getCategoryColor(email.category)}>
                    {email.category}
                  </Badge>
                </HStack>
                <Text noOfLines={2}>{email.text}</Text>
                <HStack spacing={4} fontSize="sm" color="gray.500">
                  <Text>{email.from}</Text>
                  <Text>{new Date(email.date).toLocaleString()}</Text>
                </HStack>
              </VStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
}

export default App;