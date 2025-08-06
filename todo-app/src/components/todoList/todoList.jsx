import React from "react";
import TodoItem from "../todoItem/todoItem";
import styles from "./todolist.module.css";
// Importa el componente TodoItem para mostrar cada todo

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";


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

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
        const oldIndex = todos.findIndex((todo) => todo.id === active.id);
        const newIndex = todos.findIndex((todo) => todo.id === over.id);
        setTodos((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        {/* Utiliza SortableContext para habilitar el arrastre de los todos */}
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
      </SortableContext>
    </DndContext>
  );
}
export default TodoList;
