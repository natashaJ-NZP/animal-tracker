import React from "react";
 

interface FormLoginProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string
}


export default function Login(props: any) { 


    return (

        /* LOGIN FORM */
        <div className="login flex justify-center h-screen bg-gray-100"> 
            <form>
                <div className="title">
                    <h1 className="ml-0 mt-0 mb-5">Login</h1>
                </div>
                <label className="text-gray-700 font-bold text-sm"> Email
                    <input
                        type="text" 
                        name="Email"
                        maxLength={255}
                        required
                        className="w-full py-2 bg-gray-lighter text-gray-500 font-normal px-1 outline-none mb-4" 
                    />
                </label>
             
                <label className="text-gray-700 font-bold text-sm"> Password
                    <input 
                        type="text" 
                        name="Password"
                        required  
                        className="w-full py-2 bg-gray-lighter text-gray-500 font-normal px-1 outline-none mb-4"/>
                </label>

                <div className="login-options flex justify-between mb-4">
                    <div>
                        <input 
                            id="remember"
                            type="checkbox"
                            name="password"
                            required
                            className="mb-4 mr-2"
                        />
                        <label className="text-gray-700 font-bold text-sm">Remember Me</label>
                    </div>

                    <div className="user-links">
                        <a className="font-bold text-sm hover:underline" href="#">Forgot Password?</a>
                    </div>
                </div>
        
                <button className="font-semibold w-full text-white py-2 bg-purple rounded" style={{ backgroundColor: props.backgroundColor }} type="submit">Login</button>
                <div className="new-account-link mt-5 ml-0 text-center text-sm">Don't have an account?<a href="#" className="text-purple hover:underline-offset-2 hover:underline"> Sign Up</a></div>
            </form>
        </div>
    );
} 