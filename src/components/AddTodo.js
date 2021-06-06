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
          width={[300, "100%"]}
          minWidth={['auto', 240, 320]}
          variant='filled'
          placeholder='Learn Chakra-UI with Todo App'
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
