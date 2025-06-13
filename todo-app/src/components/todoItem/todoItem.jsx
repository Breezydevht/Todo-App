import React from "react";
function TodoItem({ todo, onToggle }) {

    return (
            <li style={{
                     textDecoration: todo.completed ? "line-through" : "none",
                     display: 'flex',
                     justifyContent: 'space-between',
                     padding: '0.5rem 0', 
                     }} >
            {/* Muestra el texto del todo y aplica una clase si está completado */}

            <span style={{cursor: 'pointer'}} onClick={onToggle}>
                    {todo.text}
            </span>
                
            </li>
    )
}

export default TodoItem;