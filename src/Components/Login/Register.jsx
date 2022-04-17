import '../../App.css';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerData} from "../../Redux/Register/action"
import {useSelector} from "react-redux";



export const Register = () => {
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register} = useSelector((store)=>store.register)

    console.log('register:', register)

    const handleChange = (e) => {
        let {name,value} = e.target;
        console.log('value:', value)
        console.log('name:', name)
        if(name==="role"){
            value = [value];
            console.log('value:', value)
        }

        setData({
            ...data,
            [name]:value,
        })
        console.log('data:>>', data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(registerData(data));
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
                
                <TextField id="outlined-basic" name='role'
                type="text" label="role" 
                onChange={handleChange}
                variant="outlined" style={{marginBottom:"10px"}} />
               
                <input style={{padding: "15px"}} type="submit" value="Register" />
            </form>
            <div className='App'>
                <p>Click here to <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}