
import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

/*
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Completar curso de react', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'El abc de los estados derivados', completed: true}
]
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/

function App() {
  
  //const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();//toLocaleLowerCase()
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return <AppUI 
    completedTodos={completedTodos} totalTodos={totalTodos}
    searchValue={searchValue} setSearchValue={setSearchValue}
    searchedTodos={searchedTodos} completeTodo={completeTodo} deleteTodo={deleteTodo}
    loading = {loading} error = {error}
  />;
}

export default App; //export por defecto
