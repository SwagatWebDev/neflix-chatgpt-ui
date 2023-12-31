import React, {useEffect, useState} from 'react';
import {HEADER_LOGO_URL} from "../utils/constants";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faQuestionCircle, faSignInAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {addUser, removeUser} from "../utils/userSlice";

export const Header = () => {

    const user = useSelector(store => store.user);

    const navigate = useNavigate();

    const [showDropdown, setShowDropDown] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            // navigate("/error")
        });
    }

    const handleDropdownClick = () => {
        setShowDropDown(!showDropdown);
    }

    const handleDropdownEnter = () => {
        setShowDropDown(!showDropdown);
    }

    const handleDropdownLeave = () => {
        setShowDropDown(!showDropdown);
    }

    return (
        <div
            className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img
                className="w-44 mx-auto md:mx-0"
                src={HEADER_LOGO_URL}
                alt="logo"
            />
            {user && <div
                className="relative flex p-4"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
            >
                <img
                    className="w-12 h-12 mr-2"
                    alt="userIcon"
                    src={user.photoURL}
                    onClick={handleDropdownClick}
                />
                {showDropdown ? (
                    <span className="cursor-pointer mt-2 text-white" onClick={handleDropdownClick}>
                        &#9650;
                    </span>
                ) : (
                    <span className="cursor-pointer mt-2 text-white" onClick={handleDropdownClick}>
                        &#9660;
                    </span>
                )}
                {showDropdown && (<div className="absolute right-0 mt-14 bg-black rounded shadow-lg p-6">
                    <ul>
                        <li
                            className="cursor-pointer text-white flex items-center whitespace-nowrap hover:underline"
                            onClick={() => console.log("Manager Profiles called")}
                        >
                            <FontAwesomeIcon icon={faUser} className="mr-2"/>
                            Manager Profiles
                        </li>
                        <li className="cursor-pointer text-white flex items-center whitespace-nowrap hover:underline"
                            onClick={() => console.log("Account called")}
                        >
                            <FontAwesomeIcon icon={faCog} className="mr-2"/>
                            Account
                        </li>
                        <li className="cursor-pointer text-white flex items-center whitespace-nowrap hover:underline"
                            onClick={() => console.log("Help Center")}
                        >
                            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2"/>
                            Help Center
                        </li>
                        <li className="cursor-pointer text-white flex items-center mt-2 border-t py-2 whitespace-nowrap hover:underline"
                            onClick={handleSignOut}
                        >
                            <FontAwesomeIcon icon={faSignInAlt} className="mr-2"/>
                            Sign out with Netflix
                        </li>
                    </ul>
                </div>
                )}
            </div>}
        </div>
    );
};

export default Header;
