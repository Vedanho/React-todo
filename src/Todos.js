import React from "react";

const Todos = (props) => {
  return (
    <div className="todos">
      {props.todos.map((element, index) => {
        return (
          <div className={`todo ${element.favorite ? "selected" : ""}`}>
            <div className="favorite">
              <button onClick={() => props.changeToDo(index)}>Done</button>
            </div>
            <div className="todo-text">{element.text}</div>
            <div className="actions">
              <button onClick={() => props.deleteToDo(index)}>x</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
