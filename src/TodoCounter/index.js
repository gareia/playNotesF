
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return(
        completedTodos === totalTodos ? 
    <h1>Enhorabuena, no tienes ningún pendiente!!</h1> :
    <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px',
        fontWeight: 'normal'
        }} className="TodoCounter">

        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDo's</h1>
    )
}

export { TodoCounter };
