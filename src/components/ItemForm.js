import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData] = useState({
    category: '',
    name: ''
  })

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onItemFormSubmit({...formData, id: uuid()})
  }

  const handleFormChange = (event) => {
    setFormData(formData => {
      return {
        ...formData,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          onChange={handleFormChange} 
          value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={formData.category} >
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
