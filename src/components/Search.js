import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Search({searchItem, onChangeSearch}) {

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
        <button type="button" class="btn btn-dark" id="custom-btn">
          <i class=""><BsSearch /></i>
        </button>
      </div>
    </>
  )
}