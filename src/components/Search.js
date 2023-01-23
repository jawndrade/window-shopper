import React from 'react';

export default function Search({searchItem, onChangeSearch}) {

  const handleChange = (e) => {
    onChangeSearch(e.target.value)
  }
    //TODO: Make Input Controlled || Make Search STATE 
    
  return (
    <>
        <input 
          value={searchItem}
          onChange={handleChange}
          type="text" 
          placeholder='Search'/>
    </>
  )
}
