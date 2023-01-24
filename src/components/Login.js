import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login( { setCurrentUser, setCartItems }) {
//-------------->TODO: Handle Login Events || onSubmit Verify User exists and is authenticated => Route to Home <----------------
  
  //State for Current DB of Users
  const [users, setUsers] = useState();

  // callback to useNavigate for use within function
  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: ""
  };

  //Form Input State
  const [formData, setFormData] = useState(initialFormData);

   //Fetch Users From db.json and store in state
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
    const found = users.find(user => user.email === formData.email);
    e.preventDefault();
    if (found !== undefined) {
      if (found.password === formData.password){
        setCurrentUser(found);
        setCartItems(found.inCart)
        navigate("/shop");
      }
      else {
        alert("Password is incorrect, try again.");
      }
    }
    else {
      alert("Invalid Email, Try Again");
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