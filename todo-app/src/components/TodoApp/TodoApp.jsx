import React from "react";
import styles from "./TodoApp.module.css";
import TodoList from "../todoList/todoList";
// Importa el componente TodoList para mostrar la lista de todos

function TodoApp() {

    const [darkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        const body = document.body;
        if (darkMode) {
            body.classList.remove(styles.darkMode);
            body.classList.add(styles.lightMode);
        } else {
            body.classList.remove(styles.lightMode);
            body.classList.add(styles.darkMode);
        }
        setDarkMode(!darkMode);
        // Alterna entre los modos oscuro y claro
    };

    const [ input, setInput ] = React.useState("");
    // Estado para almacenar el valor del input
    // Utiliza useState para crear una variable de estado llamada input y una función para actualizar su valor
    // setInput es la función que se utiliza para actualizar el valor del input

    const [ todos, setTodos ] = React.useState([]);
    // Estado para almacenar los todos

    const [ filter, setFilter ] = React.useState('all');
    // Estado para almacenar el filtro de los todos
    // Utiliza useState para crear una variable de estado llamada filter y una función para actualizar su valor


    const handleSubmit = (e) => {
        e.preventDefault();
        // Evita que la página se recargue al enviar el formulario
        if (!input.trim()) return;
        // Evita agregar un todo vacío
        // Verifica si el input no está vacío
        setTodos([...todos, { id : Date.now(), text: input, completed: false }]);
        // Agrega el nuevo todo al estado de todos
        setInput("");
        // Limpia el input después de agregar el todo    
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return todo; // Si el filtro es 'all', devuelve todos los todos
      });

  return (
    <main className={styles.TodoApp}>

        <div className={styles.background}>
            <img src="../../../src/assets/images/bg-desktop-dark.jpg" alt="background" />
        </div>

        <div className={styles.todoBox}>

            <header>
                <h1>TODO</h1>

                <div className={styles.themeToggle}>
                    <button className={styles.toggleButton} onClick={toggleDarkMode}>
                            <img src="../../../src/assets/images/icon-sun.svg" alt="sun icon" />
                    </button>
                </div>
             </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* El formulario para agregar nuevos todos */}
        {/* onSubmit es un evento que se dispara cuando se envía el formulario */}
        {/* handleSubmit es una función que se ejecuta cuando se envía el formulario */}
        <div className={styles.checkbox}>
            <button type="submit" className={styles.checkButton}>
                <img src="../../../src/assets/images/icon-check.svg" alt="check icon" />
                {/* Icono de check que se muestra en el botón */}
            </button>
        </div>
        <input type="text" placeholder="Create a new todo..." value={input} onChange={(e) => setInput(e.target.value)}/>
        {/* value es un atributo que se utiliza para establecer el valor del input */}
        {/* onChange es un evento que se dispara cuando el valor del input cambia y lo utilizo para actualizar el estado de la variable input */}
      </form>

      <TodoList todos={filteredTodos} setTodos={setTodos}/>
      {/* Componente TodoList que recibe los todos y la función setTodos como props */}
      {/* Muestra la lista de todos utilizando el componente TodoList */}
      {/* todos es una prop que se pasa al componente TodoList */}

      <section className={styles.taskInfo}>
        <p>
          <span className={styles.taskCount}>{todos.filter((todo) => !todo.completed).length}</span> items left
        </p>
      </section>

      <nav className={styles.filters}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </nav>

      <button className={styles.clearCompleted} onClick={() => setTodos(todos.filter((todo) => !todo.completed))}>Clear Completed</button>
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
