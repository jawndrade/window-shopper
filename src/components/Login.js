import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login( { setCurrentUser, setCartItems, setDislikedItems, setLikedItems }) {
  
  //State for Current DB of Users
  const [users, setUsers] = useState();

  // callback to useNavigate for use within function
  const navigate = useNavigate();

  // set initial form data
  const initialFormData = {
    email: "",
    password: ""
  };

  //Form Input State
  const [formData, setFormData] = useState(initialFormData);

   //Fetch Users From db.json and store in users State
   useEffect(() => {
    fetch(" http://localhost:3000/users")
    .then(res => res.json())
    .then(obj => setUsers(obj));
  }, []);
  
  // handle form input Change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  // Handle ON Login Which Checks for Email in db.json 
  // and then verifies that password is correct
  
  const handleLogin = (e) => {

    e.preventDefault();
    // Find user that's Email Corresponds with Database Email's
    const found = users.find(user => user.email === formData.email);

    // IF User Is Found, Then Check Password of User
    if (found !== undefined) {
      // If Password matches, then update state (Login) and nav to shop
      if (found.password === formData.password){
        setCurrentUser(found);
        setCartItems(found.inCart)
        setLikedItems(found.likes);
        setDislikedItems(found.dislikes);
        navigate("/shop");
      }
      // If Password does not match, alert the user
      else {
        alert("Password is incorrect, try again.");
      }
    }
    // If Email Is Not Found, aler the user to try again or sign up
    else {
      alert("Invalid Email, Try Again. Or Sign Up");
    }
  }

  return (
    <div>
        <div>
        <img src="" alt="" id=""/>
        </div>
        <h1>Window Shopper</h1>
        <form onSubmit={handleLogin}>
            <input name="email" type="text" placeholder="Email" onChange={handleChange} value={formData.email}/>
            <input name="password"type="text" placeholder="Password" onChange={handleChange} value={formData.password}/>
            <button type="submit">Login</button>
        </form>
        <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  )
}
export default Login;