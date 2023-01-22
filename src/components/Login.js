import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login( { setCurrentUser }) {
//-------------->TODO: Handle Login Events || onSubmit Verify User exists and is authenticated => Route to Home <----------------
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialFormData);

   //Fetch Users From db.json and store in state
   useEffect(() => {
    fetch(" http://localhost:3000/users")
    .then(res => res.json())
    .then(obj => setUsers(obj));
  }, []);
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleLogin = (e) => {
    const found = users.find(user => user.email === formData.email);
    e.preventDefault();
    if (found !== undefined) {
      if (found.password === formData.password){
        setCurrentUser(found);
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