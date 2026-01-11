import React from 'react'
import { useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const App = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white p-6 rounded-xl shadow-lg">
        {isLogin ? <Login /> : <SignUp />}

        <p className="text-center text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-blue-500 ml-1 font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
 
  )
}

export default App
