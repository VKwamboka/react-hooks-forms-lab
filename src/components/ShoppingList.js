import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSearch(event.target.value);
    // setSelectedCategory(event.target.value)
  }

  const filterData = items.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase()))
  console.log(filterData)

  function handleInput(item){
     const copy = [...items, item]
     setItems(copy)
  }

  const itemsToDisplay = filterData.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

  return (

    <div className="ShoppingList" search = {selectedCategory}>
    <ItemForm onItemFormSubmit = {handleInput} />
    <Filter onSearchChange={handleCategoryChange} search = {search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
