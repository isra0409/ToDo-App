import { useState } from "react";
import "./stylesApp.css"
import Todo from "../componentes/todo";


export default function App() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function viewChange(item) {
    const miDato = item.target.value;
    setTitle(miDato);

    console.log("miDato");
    console.log(miDato);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const miNewDato = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos]
    temp.unshift(miNewDato)

    setTodos(temp)

    setTitle("");
  }

  console.log("todos");
  console.log(todos);

  function handleUpdateDos(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp); 
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id)
    setTodos(temp)
  }

  return (
    <div className="contenido-todo">
      <form className="todo-create-form" onSubmit={handleSubmit}>
        <input onChange={viewChange} className="todo-input" value={title} />

        <input
          onClick={handleSubmit}
          type="submit"
          value="Crear ToDo"
          className="boton-create"
        />

      </form>

      {
        <div>
          {todos.map((item) => (
            <Todo key={item.id} item={item} onUpdate={handleUpdateDos} onDelete={handleDelete}/>
          ))}
        </div>
      }
      
    </div>
  );
}

