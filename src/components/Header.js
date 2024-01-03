import React from 'react';
import {HEADER_LOGO_URL, USER_LOGO_URL} from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const Header = () => {

    const user = useSelector(store => store.user);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            // navigate("/error")
        });
    }

    return (
        <div
            className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img
                className="w-44 mx-auto md:mx-0"
                src={HEADER_LOGO_URL}
                alt="logo"
            />
            {user && <div className="flex p-4">
                <img className="w-12 h-12 mr-2" alt="userIcon" src={USER_LOGO_URL}/>
                <button onClick={handleSignOut} className="font-bold text-white cursor-pointer hover:underline">
                    Sign out of Netflix</button>
            </div>}
        </div>
    );
};

export default Header;
