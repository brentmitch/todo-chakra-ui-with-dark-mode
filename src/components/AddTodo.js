import { Button, FormControl, FormLabel, Input, Stack, useToast, VisuallyHidden  } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit} >
      <Stack alignItems="center" direction={["column","row"]} marginBottom='8'>
      <FormControl id="newTodo">
        <VisuallyHidden>
          <FormLabel>New Todo</FormLabel>
        </VisuallyHidden>
        <Input
          onChange={(e) => setContent(e.target.value)}
          placeholder='Learn Chakra-UI with Todo App'
          minWidth={['auto', 240, 320]}
          value={content}
          variant='filled'
          width={[300, "100%"]}
        />
        </FormControl>
        <Button colorScheme='pink' paddingInline='8' type='submit' width={[200, 'auto']}>
          Add Todo
        </Button>
      </Stack>
    </form>
  );
}

export default AddTodo;
