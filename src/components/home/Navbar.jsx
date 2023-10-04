'use client'
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import profile from '@/assets/images/profile.jpg'
import { FaAngleDown, FaAngleUp, FaArrowRightFromBracket } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const { user, logout,loading } = useAuth()
    const commonNavLink = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Contact</Link></li>
    </>
    const beforeSignInNavLink = <>
        <li><Link href={'/signin&up'}>Singin/Up</Link></li>
    </>
    const afterSignInNavLink = <>
        <li>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} onClick={() => setIsOpenDropdown(!isOpenDropdown)} className="flex items-center justify-center gap-3 border border-indigo-500 rounded-full p-[2px] bg-slate-200">
                    <div className="avatar">
                        <div className="w-7 rounded-full">
                            <Image src={profile} alt="profile" width={28} height={28} />
                        </div>
                    </div>
                    <span className="pe-1">{isOpenDropdown ? <FaAngleDown /> : <FaAngleUp />}</span></label>
                {
                    isOpenDropdown && <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-e border-indigo-400 animate-custom mt-3 w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <button onClick={()=>logout()} className="flex items-center space-x-2px-4"><FaArrowRightFromBracket /><span>Logout</span>
                            </button>
                        </li>
                    </ul>
                }
            </div>
        </li>
    </>


    const navLink = user? afterSignInNavLink : beforeSignInNavLink;
    return (
        <div className="my-container">
            <p className="flex  justify-center text-xl md:text-3xl font-bold pt-4 md:py-8">Career Website</p>

            <div className="navbar min-h-[40px] bg-base-100 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {commonNavLink}
                        </ul>
                    </div>
                    <div className=" w-[320px] md:flex hidden items-center border rounded-full p-1">
                        <input type="text" placeholder="Search" className="w-full focus:outline-none ps-2" />
                        <div className="mx-2 ">
                            <FiSearch />
                        </div>
                    </div>
                </div>
                <div className="navbar-end ">
                    <ul className="md:flex hidden items-center justify-center gap-10">
                        {commonNavLink}
                        {navLink}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;