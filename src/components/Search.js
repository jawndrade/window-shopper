import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Search({searchItem, onChangeSearch}) {

  // on Input Change helper function
  const handleChange = (e) => {
    onChangeSearch(e.target.value)
  }
    //TODO: Make Input Controlled || Make Search STATE 
    
  return (
    <>
      <div class="input-group">
        <div class="form-outline">
        <input 
          value={searchItem}
          onChange={handleChange}
          type="text" 
          placeholder="Search"
          class="form-control"/>
        </div>
      </div>
    </>
  )
}