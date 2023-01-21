import React from 'react';
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>  
        <div>
            <h1>WindowShopper</h1>
        </div>

        <Link to='/'><button>Login</button></Link>

        <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Password" required />

            <label for="gender">Gender:</label>

            <select name="gender" id="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="custom">Prefer Not To Say</option>
            </select>

            <button type="submit">Sign Up</button>
        </form>
    </>
  )
}
