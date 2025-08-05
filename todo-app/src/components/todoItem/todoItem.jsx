import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={styles.todoItem}>
      <div className={styles.checkbox}>
        <button className={todo.completed ? styles.checkButtonChecked : styles.checkButton} onClick={onToggle}>
          {todo.completed && (
            <img
              src="../../../src/assets/images/icon-check.svg"
              alt="check icon"
            />
          )}
        </button>

      <li
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          padding: "0.5rem 0",
          cursor: "pointer",
        }}
        onClick={onToggle}
      >
        <span>{todo.text}</span>
      </li>
      </div>

      <div className={styles.deleteButtonContainer}>
        {todo.completed && (
        <button className={styles.deleteButton} onClick={onDelete}>
                <img
                    src="../../../src/assets/images/icon-cross.svg"
                    alt="delete icon"
                />
        </button>
                
                )}
      </div>

      
      
    </div>
  );
}

export default TodoItem;