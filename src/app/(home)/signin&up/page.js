"use client"
import signInLottie from '../../../../public/lottie/signinlottie.json'
import Lottie from "lottie-react";
import SignInUpTab from "./SignInUpTab";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";



const SignInUp = () => {
    const [tabActive, setTabActive] = useState('signin')

    return (
        <div className="my-container">
            <SignInUpTab tabActive={tabActive} setTabActive={setTabActive} />
            <div>
                
                <div className='flex items-center justify-center mt-12 '>
                    <div className="basis-1/2 flex items-center justify-center">
                        <Lottie animationData={signInLottie} style={{ width: '350px' }} loop={true} />
                    </div>
                    {/* Sign in */}
                    <div className={`basis-1/2   ${tabActive == 'signup' ? 'hidden' : ''}`}>
                        <SignInForm/>
                    </div>
                    {/* Sign up */}
                    <div className={`basis-1/2 ${tabActive == 'signin' ? 'hidden' : ''}`}>
                        <SignUpForm/>
                    </div>



                </div>
                

            </div>
        </div>
    );
};

export default SignInUp;