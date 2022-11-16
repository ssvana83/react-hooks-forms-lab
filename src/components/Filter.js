import React from "react";

function Filter({ onCategoryChange, onSearchChange, search, selectedCategory }) {
  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        onChange={onSearchChange}
        value={search}
      />
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

// DELIVERABLE 1:
// When user types in this field, the list of items should be filtered
// only items with names that match the text are included

// search in in filter which is the child of shippinglist which is child 
// of app
