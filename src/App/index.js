
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

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
  return( <TodoProvider>
            <AppUI/>
          </TodoProvider>);
}

export default App; //export por defecto
