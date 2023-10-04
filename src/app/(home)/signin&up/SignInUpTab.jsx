"use client"


const SignInUpTab = ({tabActive,setTabActive}) => {

    return (
        <div className="flex justify-center mt-16">
            <div className="flex  border border-gray-400 rounded-full w-60 h-10">
                <div className={`basis-1/2 flex items-center justify-center ${tabActive=='signin'?'bg-indigo-600 text-white rounded-s-full':''}`}>
                   <button onClick={()=>setTabActive('signin')}> Sign In </button>
                </div>
                <div className={`basis-1/2 flex items-center justify-center ${tabActive=='signup'?'bg-indigo-600 text-white rounded-e-full':''}`}>
                    <button onClick={()=>setTabActive('signup')}> Sign Up  </button>
                </div>
            </div>
        </div>
    );
};

export default SignInUpTab;