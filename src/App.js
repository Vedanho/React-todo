import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Продать квартиры",
      favorite: true,
    },
    {
      text: "Выучить уроки по JS",
      favorite: false,
    },
  ]);

  const [text, setText] = useState("");

  const addToDo = (word) => {
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ]);

    setText("");
  };

  const changeToDo = (indexOfChangingItem) => {
    setTodos(
      todos.map((element, index) => {
        if (index === indexOfChangingItem) {
          return {
            ...element,
            favorite: !element.favorite,
          };
        }
        return element;
      })
    );
  };

  const deleteToDo = (indexOfRemovingItem) => {
    setTodos(
      todos.filter((element, index) => {
        if (index === indexOfRemovingItem) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addToDo={addToDo} />
      <Todos changeToDo = {changeToDo} deleteToDo={deleteToDo} todos={todos}/>
    </div>
  );
}

export default App;
