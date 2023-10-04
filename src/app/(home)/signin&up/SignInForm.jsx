"use client"
import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, } from "react-icons/fa6";

const SignInForm = () => {
    const {register,handleSubmit,reset,formState: { errors }} = useForm();
    const {user,signIn}=useContext(AuthContext)
    console.log(user);

    const handleSignIn = ({email,password}) => {
        console.log(email,password);
        signIn(email,password)
        .then((userCredential) => {
            
            reset()
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div>
            <div className=" flex w-full md:w-80 items-center border rounded-md p-2">
                <span className="mr-2"><FaEnvelope /></span>
                <input type="text" {...register("email", { required: true })} placeholder='Enter your email' className="w-full focus:outline-none" />
            </div>
            {errors.email?.type === "required" && (
                    <p className="text-red-400">Email field is required</p>
                )}
            </div>
            <div>
            <div className="flex w-full md:w-80 items-center border rounded-md p-2">
                <span className="mr-2"><FaLock /></span>
                <input type="text" {...register("password", {required: true })} placeholder='Password' className="w-full focus:outline-none" />
            </div>
            {errors.password?.type === "required" && (
                    <p className="text-red-400">Please enter a password.</p>
                )}
            </div>
            <button type="submit" className="btn btn-sm btn-primary rounded-full px-8">Sign In</button>
        </form>

    );
};

export default SignInForm;