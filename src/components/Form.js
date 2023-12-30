import React, { useState } from "react";

const Form = (props) => {
  const [id, setid] = useState(0);
  const [price, setPrice] = useState(0);
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const tableHandler = (event) => {
    setTable(event.target.value);
  };
  const idHandler = (event) => {
    setid(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const dishHandler = (event) => {
    setDish(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userObj = {
      Id: id,
      Price: price,
      Dish: dish,
      Table: table,
    };
    localStorage.setItem(JSON.stringify(id),JSON.stringify(userObj));
    props.onDetails(userObj)
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="id">Unique Id:</label>
        <input id="id" type="number" onChange={idHandler} />
        <br />
        <label htmlFor="price">Choose Price:</label>
        <input id="price" type="number" onChange={priceHandler} />
        <br />
        <label htmlFor="dish">Choose Dish:</label>
        <input id="dish" type="text" onChange={dishHandler} />
        <br />
        <label htmlFor="table">Choose a Table:</label>
        <select id="table" onChange={tableHandler}>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
        </select>
        <button type="submit">Add to Bill</button>
      </form>
    </div>
  );
};

export default Form;
