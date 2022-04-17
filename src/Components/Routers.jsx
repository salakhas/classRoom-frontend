import { useSelector } from "react-redux";
import {Link, Navigate, Route, Routes } from "react-router-dom"
import { ClassDetails } from "./ClassDetails";
import { Home } from "./Home";
import { Login } from "./Login/Login"
import { Register } from "./Login/Register";

const PrivateRoute = ({isAuthenticated,children}) =>{
    return isAuthenticated ? children : <Navigate to="/login"/>;
}


export const Routers = () => {
    const {isAuthenticated} = useSelector((state)=>state.login);
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-around",padding: "24px",
            backgroundColor: "#F56D91"}} className="navigation">
                <Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}} to="/">Home</Link>
                <Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}} to="/login">Log In</Link>
                <Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}} to="/register">Register</Link>
            </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/teacher/:id" element={<ClassDetails/>}/>
        <Route path="/"
        element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
                
            </PrivateRoute>
        }></Route>
        </Routes>
        </>
    )
} 