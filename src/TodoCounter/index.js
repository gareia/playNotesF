
import './TodoCounter.css';

function TodoCounter({completed, total}) {
    return(
        completed == total ? 
    <h1>Enhorabuena, no tienes ningún pendiente!!</h1> :
    <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px',
        fontWeight: 'normal'
        }} className="TodoCounter">

        Has completado <span>{completed}</span> de <span>{total}</span> ToDo's</h1>
    )
}

export { TodoCounter };
