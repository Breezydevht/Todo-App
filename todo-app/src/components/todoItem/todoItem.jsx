import React from "react";
import styles from "./todoItem.module.css";

import {
  useSortable
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";


function TodoItem({ todo, onToggle, onDelete }) {
   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    textDecoration: todo.completed ? "line-through" : "none",
    padding: "0.5rem 0",
  };

  return (
    <div className={styles.todoItem}>
      <div className={styles.checkbox}>
        <button className={todo.completed ? styles.checkButtonChecked : styles.checkButton} onClick={onToggle}>
          {todo.completed && (
            <img
              src="/images/icon-check.svg"
              alt="check icon"
            />
          )}
        </button>

      <li  ref={setNodeRef} style={style} {...attributes} {...listeners}
        onClick={onToggle}
      >
        <span>{todo.text}</span>
      </li>
      </div>

      <div className={styles.deleteButtonContainer}>
        {todo.completed && (
        <button className={styles.deleteButton} onClick={onDelete}>
                <img
                    src="/images/icon-cross.svg"
                    alt="delete icon"
                />
        </button>
                
                )}
      </div>

      
      
    </div>
  );
}

export default TodoItem;
