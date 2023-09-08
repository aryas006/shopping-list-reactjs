import React, { useState } from "react";

function App() {
  const [insertItem, setItem] = useState("");
  const [items, holdItems] = useState([]);
  function addItem() {
    holdItems((prevItems) => {
      return [...prevItems, insertItem];
    });
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={insertItem} type="text" onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
