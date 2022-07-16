import React, {useState} from "react";
import { v4 as uuid } from "uuid"; //generate random IDs

function ItemForm({onItemFormSubmit}) {
  const [categoryName, setCategoryName]= useState("Produce");
   const [inputData, setInputData]= useState("")
   function handleSubmit(event){
        console.log(event)
        event.preventDefault()
        const newItem = {
          id: uuid(), 
          name: inputData,
          category: categoryName,
        };
       onItemFormSubmit(newItem)
       console.log(newItem)
    
      }


  return (
      <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={
          event=>setInputData(event.target.value)
          } 
          placeholder="Enter the data" value={inputData}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(event)=>{setCategoryName(event.target.value)}} value={categoryName}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
