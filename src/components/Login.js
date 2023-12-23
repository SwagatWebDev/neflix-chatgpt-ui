import React, {useRef, useState} from 'react'
import Header from './Header';
import {LOGIN_LOGO_URL} from '../utils/constants';
import {checkValidLoginData} from '../utils/validate';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        let validationMessage;
        console.log(email.current.value);
        console.log(password.current.value);
        if (!fullName.current) {
            validationMessage = checkValidLoginData(email.current.value, password.current.value, null);
        } else {
            console.log(fullName);
            validationMessage = checkValidLoginData(email.current.value, password.current.value, fullName.current.value);
        }
        console.log(validationMessage);
        setErrorMessage(validationMessage);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    src={LOGIN_LOGO_URL}
                    alt="logo"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && <input
                        ref={fullName}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                }
                <input
                    ref={email}
                    className="p-4 my-4 w-full bg-gray-700"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    ref={password}
                    className="p-4 my-4 w-full bg-gray-700"
                    type="password"
                    placeholder="Password"
                />
                <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
                <button
                    className="p-4 my-6 bg-red-700 w-full cursor-pointer"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="p-4 cursor-pointer"
                   onClick={toggleSignInForm}
                >{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In now"}</p>
            </form>
        </div>
    )
}

export default Login;
