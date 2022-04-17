import '../../App.css';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerData } from '../../Redux/Login/action';



export const Register = () => {
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log('value:', value)
        console.log('name:', name)
        setData({
            ...data,
            [name]:value,
        })
        console.log('data:>>', data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://masai-api-mocker.herokuapp.com/auth/register',data)
        .then((res)=>{
            console.log('res:', res.data);
            alert("Register Successful");
            navigate('/login')
        })
        .catch((err)=>{
            console.log('err:', err);
        })
    }

    return (
        <div className='App'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",padding:"10px",width: "30%", border: "1px solid black",borderRadius: "5px",margin:"auto"}}>
                <TextField id="outlined-basic" name='name'
                type="text" label="Name" 
                onChange={handleChange}
                variant="outlined" style={{marginBottom:"10px"}} />
                <TextField id="outlined-basic" name='email'
                onChange={handleChange}
                 type="text" label="Email" variant="outlined" style={{marginBottom:"10px"}} />
                <TextField id="outlined-basic" name='password'
                onChange={handleChange}
                 type="password" label="Password" variant="outlined" style={{marginBottom:"10px"}} />
                 <TextField id="outlined-basic" name='username'
                type="text" label="Username" 
                onChange={handleChange}
                variant="outlined" style={{marginBottom:"10px"}} />
                <TextField id="outlined-basic" name='mobile'
                type="text" label="Mobile" 
                onChange={handleChange}
                variant="outlined" style={{marginBottom:"10px"}} />
                <TextField id="outlined-basic" name='description'
                type="text" label="Description" 
                onChange={handleChange}
                variant="outlined" style={{marginBottom:"10px"}} /><br/>
                <input style={{padding: "15px"}} type="submit" value="Register" />
            </form>
            <div className='App'>
                <p>Click here to <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}