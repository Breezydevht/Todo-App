import React from "react";
import styles from "./TodoApp.module.css";

function TodoApp() {

    /* const [darkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
 */ 

    const [ input, setInput ] = React.useState("");

    console.log(input);

  return (
    <main className={styles.TodoApp}>

        <div className={styles.background}>
            <img src="../../../src/assets/images/bg-desktop-dark.jpg" alt="background" />
        </div>

        <div className={styles.todoBox}>

            <header>
                <h1>TODO</h1>

                <div className={styles.themeToggle}>
                    <button className={styles.toggleButton}>
                            <img src="../../../src/assets/images/icon-sun.svg" alt="sun icon" />
                    </button>
                </div>
             </header>

      <form className={styles.form}>
        <div className={styles.checkbox}>
            <img src="../../../src/assets/images/icon-check.svg" alt="check icon" />
        </div>
        <input type="text" placeholder="Create a new todo..." value={input} onChange={(e) => setInput(e.target.value)}/>
      </form>

      <section className={styles.taskInfo}>
        <p>
          <span className={styles.taskCount}>0</span> items left
        </p>
      </section>

      <nav className={styles.filters}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </nav>

      <button className={styles.clearCompleted}>Clear Completed</button>
        </div>

        

      <footer className={styles.footer}>Drag and drop to reorder list</footer>

      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Marc Kalister Sanon</a>.
      </div>

    </main>
  );
}

export default TodoApp;
