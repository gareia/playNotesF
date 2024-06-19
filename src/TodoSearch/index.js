import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
    <div className="TodoSearchContainer"><input className="TodoSearch" placeholder="Cortar cebolla"
    value = {searchValue} onChange={(event) => {
        setSearchValue(event.target.value)
    }} /></div>
    )
}

export { TodoSearch }