import React from "react";
import TodoItem from "../todoItem/todoItem";
import styles from "./TodoList.module.css";
// Importa el componente TodoItem para mostrar cada todo

function TodoList({ todos, setTodos }) {
  // Componente para mostrar la lista de todos
  const handleToggle = (id) => {
    // Función para manejar el toggle de un todo
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    // Actualiza el estado de los todos con el nuevo estado del todo toggled
    setTodos(updatedTodos);
  };

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => handleToggle(todo.id)}
          onDelete={() => setTodos(todos.filter((t) => t.id !== todo.id))} // Elimina el todo
          // Filtra los todos para eliminar el que tiene el mismo id
        />
      ))}
    </ul>
  );
}
export default TodoList;
