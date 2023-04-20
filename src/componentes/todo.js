import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete}) {

  const [isEdit, setIsEdit] = useState(false);

  function EditarTodo() {

    const [newValue, setNewValue] = useState(item.title)

    function handleSubmitDos(e){
      e.preventDefault();
    }

    function hanldleChangleDos(e){
      const valueDos = e.target.value;
      setNewValue(valueDos)
    }

    function handleClickUpdateTodo(){
      onUpdate(item.id, newValue);
      setIsEdit(false)
    }

    return (
      <form className="todo-update-form" onSubmit={handleSubmitDos}>
        <div className="box-editar"> <h3 className="title-editar">*modo editar</h3>
        <input className="todo-input" onChange={hanldleChangleDos} value={newValue} type="text"></input>
        </div>
        <button className="button-update" onClick={handleClickUpdateTodo}>Update</button>
      </form>
    );
  }

  function TodoElements() {
    return (
      <div className="itemsTodo-mapeados">
        <span className="todo-title">{item.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="button-delete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return (
    <div className="todo">{isEdit ? <EditarTodo /> : <TodoElements />}</div>
  );
}
