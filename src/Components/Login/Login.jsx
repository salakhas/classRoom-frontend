import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../../App.css';

export const Login = () => {
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
        dispatch(loginData(data));
        navigate('/');
    }
    const store = useSelector((store)=>store.login);
    console.log('store:', store)
    if(store.isAuthenticated){
        navigate('/');
    }

   
    return (
        <div className='App'>
            <h1>Login!</h1>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",padding:"10px",width: "30%", border: "1px solid black",borderRadius: "5px",margin:"auto"}}>
                <TextField id="outlined-basic" name='username'
                type="text" label="Username" 
                onChange={handleChange}
                variant="outlined" style={{marginBottom:"10px"}} />
                <TextField id="outlined-basic" name='password'
                onChange={handleChange}
                 type="password" label="Password" variant="outlined" style={{marginBottom:"10px"}} />
                
                <br/>
                <input style={{padding: "15px"}} type="submit" value="Login" />
            </form>
            <div className='App'>
                <p>Click here to <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}