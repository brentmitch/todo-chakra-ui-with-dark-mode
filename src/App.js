import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
 
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  const colorModeButtonLabel = colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <>
    <VStack padding={4} as='header'>
      <IconButton
        aria-label={colorModeButtonLabel}
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        as="h1"
        marginBottom='4'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'
      >
        Todo Application
      </Heading>
    </VStack>
    <VStack padding={4} as='main'>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
    </>
  );
}

export default App;
