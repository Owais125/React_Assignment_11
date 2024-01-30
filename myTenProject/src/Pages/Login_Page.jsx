import React, { useState } from 'react'
import {data} from '../Config/Data'
import { useNavigate } from 'react-router-dom'



const Login_Page = () => {
  const navigate = useNavigate()
  const [userData,setUserData ] = useState()

  const onchangeHandle =(e)=>{
    const {id,value}=e.target

    setUserData({ ...userData, [id]: value });
    

  }

  const submitHandle = (e) => {
    e.preventDefault();
    const { username, password } = userData;
    if (
      username === data.username &&
      password === data.password
    ) {

      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }

 
  };
  return (
    <div>
        
<form onSubmit={submitHandle} className="px-7 h-screen grid justify-center items-center">
    <div className="grid gap-6 w-96" id="form" >

      <div className="grid gap-6 w-full">
        <input onChange={onchangeHandle} className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="text" placeholder="UserName" id="username" name="email"  required={true}/>
     
      </div>
      <div className="flex gap-3">
        <input onChange={onchangeHandle} className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required={true}/>
     
      </div>
      <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit">Login</button>
  
    </div>
  </form>




    </div>
  )
}


export  {Login_Page}












