import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
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
        axios.post( "http://localhost:5000/p",data).then((e) => console.log(e))
    }
  return (
    <div>
        <input name='name' onChange={Update}/>
        <input name='email' onChange={Update}/>
        <input name='password' onChange={Update}/>
        <input name='phn' onChange={Update}/>
        <button onClick={Mydata}>click</button>
    </div>
  )
}

export default Signup;