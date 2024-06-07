import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    return (
    <div className="TodoSearchContainer"><input className="TodoSearch" placeholder="Cortar cebolla"
    value = {searchValue} onChange={(event) => {
        setSearchValue(event.target.value)
    }} /></div>
    )
}

export { TodoSearch }