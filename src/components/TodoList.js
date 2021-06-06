import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge borderRadius='lg' colorScheme='green' padding='4' margin='4' role="status" >
        No Todos, yay!!!
      </Badge>
    );
  }

  return (
    <VStack 
      aria-atomic="false"
      aria-live="polite"
      as="ul"
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack as="li" key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            aria-label={`Delete ${todo.body}`}
            icon={<FaTrash />}
            isRound='true'
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
