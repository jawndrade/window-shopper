import React, { useState } from 'react';

export default function Item() {

    //----------->   TODO: Handle Toggle Side for Description || Dynamically Update Price Img, etc.   <---------------

    const [side, setSide] = useState("front");

  return (
    <div>
        <img src="https://via.placeholder.com/150"/>
        <h4>Price</h4>
        <button>Like</button>
        <button>Dislike</button>
    </div>
  )
}
