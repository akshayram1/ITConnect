import React from 'react'

function Login() {
  return (
    <div className="flex h-screen bg-black">
    <div className="m-auto p-8 bg-gray-800 rounded shadow-lg w-96">
      <h2 className="text-white text-2xl mb-4">Welcome Back</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
        />
        <button className="btn">Login</button>
      </form>
    </div>
  </div>
  )
}

export default Login