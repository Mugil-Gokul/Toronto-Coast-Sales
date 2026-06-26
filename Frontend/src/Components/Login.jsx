import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "./Api";


const Login = () => {


  const navigate = useNavigate();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");


  const handleLogin = async(e)=>{

    e.preventDefault();


    try{

      const res = await Api.post("/auth/login",{
        email,
        password
      });


      // store token

      localStorage.setItem(
        "adminToken",
        res.data.token
      );


      navigate("/admin/dashboard");


    }catch(err){

      setError(
        err.response?.data?.message ||
        "Login failed"
      );

    }

  }



  return (

    <div className="min-h-screen flex items-center justify-center">


      <form
      onSubmit={handleLogin}
      className="w-96 p-8 shadow-lg rounded-lg"
      >


        <h2 className="text-2xl font-bold mb-6">
          Admin Login
        </h2>


        {
          error &&
          <p className="text-red-500 mb-3">
            {error}
          </p>
        }


        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full border p-3 mb-4"
        />


        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="w-full border p-3 mb-4"
        />


        <button
        className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>


      </form>


    </div>

  )
}


export default Login;