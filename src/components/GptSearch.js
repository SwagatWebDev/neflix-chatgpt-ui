import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {LOGIN_LOGO_URL} from "../utils/constants";
import React from "react";

const  GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={LOGIN_LOGO_URL}
                    alt="logo"
                    className="object-cover w-full h-full"
                />
            </div>
            <GptSearchBar/>
            {/*<GptMovieSuggestions/>*/}
            {/*
              - GPT Based Search Bar
              - GPT Based Movie Suggestions
            */}
        </div>

    )
};

export default GptSearch;