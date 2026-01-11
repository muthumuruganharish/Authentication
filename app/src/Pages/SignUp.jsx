import React from 'react'

const SignUp = () => {
  return (
    <div>
      
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
      />

      <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
