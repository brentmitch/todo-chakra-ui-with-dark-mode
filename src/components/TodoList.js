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
      alignItems='stretch'
      aria-atomic="false"
      aria-live="polite"
      as="ul"
      borderColor='gray.100'
      borderRadius='lg'
      borderWidth='2px'
      divider={<StackDivider />}
      padding='4'
      maxWidth={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      width='100%'
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
