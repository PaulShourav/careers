"use client"

import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEnvelope, FaLock, FaUserPen, } from "react-icons/fa6";

const SignUpForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signUp } = useContext(AuthContext)
    const handleSignUp = ({ email, password }) => {

        signUp(email, password)
            .then((userCredential) => {
                handleAddUser(email, password)

            })
            .catch((error) => {
                console.log(error.message);
                toast.error('Please Login.Already Sign up...')

            });
    }
    const handleAddUser = (email, password) => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        },)
            .then(res => res.json())
            .then(data => {
                toast.success(`${data.message}`)
                reset()
            })
    }
    return (
        <form onSubmit={handleSubmit(handleSignUp)} className=" space-y-4">
            <div className="flex gap-4">
                <div className="flex items-center border rounded-md p-2">
                    <span className="mr-2"><FaUserPen /></span>
                    <input type="text" placeholder='First name' className="w-full focus:outline-none" />
                </div>
                <div className="flex items-center border rounded-md p-2">
                    <span className="mr-2"><FaUserPen /></span>
                    <input type="text" placeholder='Last name' className="w-full focus:outline-none" />
                </div>
            </div>
            <div >
                <div className="flex items-center border rounded-md p-2">
                    <span className="mr-2"><FaEnvelope /></span>
                    <input type="text" {...register("email", { required: true })} placeholder='Enter your email' className="w-full focus:outline-none" />
                </div>
                {errors.email?.type === "required" && (
                    <p className="text-red-400">Email field is required</p>
                )}
            </div>
            <div>
                <div className="flex items-center border rounded-md p-2">
                    <span className="mr-2"><FaLock /></span>
                    <input type="password" {...register("password", { required: true })} placeholder='Password' className="w-full focus:outline-none" />
                </div>
                {errors.password?.type === "required" && (
                    <p className="text-red-400">Please enter a password.</p>
                )}
            </div>
            <button type="submit" className="btn btn-sm btn-primary rounded-full px-8">Sign Up</button>
        </form>
    );
};

export default SignUpForm;