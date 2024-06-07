
import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import logo from './platzi.webp';
//import './App.css';

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
  
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos){
    parsedTodos = [];
    localStorage.setItem('TODOS_V1', JSON.stringify(parsedTodos));
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchValue.toLocaleLowerCase())
    }
  );

  //otra forma de declarar funcion
  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text == text );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text == text );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => {
          return (<TodoItem key={todo.text} text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)} 
            onDelete={() => deleteTodo(todo.text)} />)
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App; //export por defecto
