'use client'

import LoadingUi from "@/components/LoadingUi";
import Navbar from "@/components/home/Navbar";
import useAuth from "@/hooks/useAuth";


const HomeLayout = ({ children }) => {
   const {loading}=useAuth()
   if(loading){
    return <LoadingUi/>
   }
    return (
        <>
            <Navbar />

            {children}
        </>
    );
};

export default HomeLayout;