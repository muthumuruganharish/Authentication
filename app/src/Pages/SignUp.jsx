import React from 'react'
import { useState } from 'react'

const SignUp = () => {

  //getting data
  const[username,setUserName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  // for sending data to backend

  const handleSignUp=async()=>{

    const userData={
      username,
      email,
      password
    }
    const res=await fetch("http://localhost:5000/api/signup"  ,{    // which means waits until backend replies
    
    method:"POST", //which means we are sending data to backend

    headers:{

       "Content-Type": "application/json"
      
    },
     body: JSON.stringify(userData) // which means we sending json format



    }  

    ) 

    const data=await res.json()
    alert(data.message)



  }


  return (
    <div>
      
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e)=>setUserName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
