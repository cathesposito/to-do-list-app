import React, {useState} from "react";
import "./AddItem.css";

const AddItem = props => {

  const [enteredText, setEnteredText] = useState('');

  //arrow function to add item
  const addItemHandler = event => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText('');
    props.onAddItem(newItem);
    
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-item" onSubmit={addItemHandler}>
      <p>Below you can add your next item:</p>
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button className="button-add" type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
