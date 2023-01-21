import React from 'react';
import { Link } from "react-router-dom";

function Login() {
//-------------->TODO: Handle Login Events || onSubmit Verify User exists and is authenticated => Route to Home <----------------
  return (
    <div>
        <div>
        <img src="" alt="" id=""/>
        </div>
        <h1>Window Shopper</h1>
        <form>
            <input name="email" type="text" placeholder="Email"/>
            <input name="password"type="text" value="" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
        <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  )
}
export default Login;