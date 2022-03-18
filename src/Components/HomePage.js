import React from "react";
import { useNavigate } from "react-router";

export default function HomePage() {

    const navigate=useNavigate()
    const logout=()=>{
        let auth=false
        localStorage.setItem('auth',JSON.stringify(auth))
        navigate('/login')
     
        
    }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <text style={{fontSize:30}}>Hello world</text>
      <button title="Logout" onClick={logout}> Logout</button>
    </div>
  );
}
