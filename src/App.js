import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddItem from "./components/AddItem/AddItem";

function App() {
  const [courseItems, setDoToListItems] = useState([]);

  //handler to receive Item from NewItem
  const addNewItemHandler = (newItem) => {
    setDoToListItems((OldDoToListItems) => {
      return OldDoToListItems.concat(newItem);
    });
  };

  const deleteItemHandler = (deleteItem) => {
    setDoToListItems((NewDoToListItems) => {
      return NewDoToListItems.filter((_, i) => i !== courseItems.indexOf(deleteItem, 0));
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h2>To Do List:</h2>
        <AddItem onAddItem={addNewItemHandler} />
        <ol>{
          courseItems.map((item) => {
            return (
              <div className="item-list" key={item.id}>
                <li>{item.text}</li>
                <button className="button-del" onClick={() => deleteItemHandler(item)}>Delete Item</button>
              </div>
            )
          })
        }
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default App;
