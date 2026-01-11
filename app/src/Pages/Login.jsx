import React from 'react'

const Login = () => {
  return (
    <div>
        
         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

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

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Login
      </button>


    </div>
  )
}

export default Login
