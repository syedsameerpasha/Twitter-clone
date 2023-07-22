import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [data,setData]=useState({})

    function Update(e){
        const {name, value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    console.log(data);
    function Mydata(){
        axios.get("http://localhost:5000/").then((e) =>{
            console.log(e);
           
           
        })
        
    }

  return (
    <div>
        <input name='email' onChange={Update}/>
        <input name='password' onChange={Update}/>
        <button onClick={Mydata}>click</button>
    </div>
  )
}

export default Login;