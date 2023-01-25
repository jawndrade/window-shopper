import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function SignUp({ setCurrentUser}) {
//----------------->TODO: POST new User to users.json => Redirect to SHOP upon success <--------------
  
    const [users, setUsers] = useState();
    const navigate = useNavigate();

    const initialFormData = {
        name: "",
        email: "",
        password: "",
        gender: "Male"
    }
    const [formData, setFormData] = useState(initialFormData);


   //Fetch Users From db.json and store in state
   useEffect(() => {
    fetch(" http://localhost:3000/users")
    .then(res => res.json())
    .then(obj => setUsers(obj))
    .catch(err => console.log(err));
  }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSignUp = (e) => {

        e.preventDefault();

        const found = users.find(user => user.email === formData.email);

        const newUser = 
        {       "id": users.length + 1,
                "name": formData.name,
                "email": formData.email,
                "password": formData.password,
                "gender": formData.gender,
                "likes": {},
                "dislikes": {},
                "inCart": {}
        };

        //Check to see if user email already exists 
        //then post new user and update state
        
        if (found === undefined) {
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(() => {
                setCurrentUser(newUser);
                setUsers([...users, newUser]);
                navigate("/shop");
            })
            .catch(err => console.log(err));
        } else {
            alert("You already have an account! Try Logging in!");
        }
    }
    return (
        <>  
            <div>
                <h1>WindowShopper</h1>
            </div>

            <Link to='/'><button>Return To Login</button></Link>

            <form onSubmit={handleSignUp}>
                <input name="name" onChange={handleChange} type="text" placeholder="Name" value={formData.name} required />
                <input name="email" onChange={handleChange} type="text" placeholder="Email" value={formData.email} required />
                <input name="password" onChange={handleChange} type="text" placeholder="Password" value={formData.password} required />

                <label for="gender">Gender:</label>

                <select onChange={handleChange} name="gender" id="gender" value={formData.gender} required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="No Preference">Prefer Not To Say</option>
                </select>

                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}
