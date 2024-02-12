import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({
    title: "Название",
    date: Date.now(),
  }); // старый способ,проще менять каждый пункт отдельным стейтом,отдельно тайтл,отдельно дейт

  function increment() {
    // setCounter(counter + 1)

    setCounter((prevCounter) => {
      return prevCounter + 1;
    });

    // setCounter(prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новое название",
      };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Изменить название
      </button>
      
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
