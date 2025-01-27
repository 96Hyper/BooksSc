import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
 
 
    return (
    <>
      <div className="flex h-screen items-center justify-center ">
        
        <div  className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            
            <h3 className="font-bold text-lg">Sign Up</h3>
            {/* {email} */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* {password} */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* {button} */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-300">
                Signup
              </button>
              <p>
                Have Account?
                <button
                  
                  className="underline text-blue-500 cursor-pointer"
                onClick={()=>{
                  document.getElementById("my_modal_3").showModal();}}
                >
                  Login 
                </button>
                <Login/>
              </p>
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
