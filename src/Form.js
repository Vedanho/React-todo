import React from "react";

const Form = (props) => {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Введите текст"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      ></input>
      <button onClick={() => props.addToDo()}>Добавить</button>
    </div>
  );
};

export default Form;
