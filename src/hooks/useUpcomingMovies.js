import {useDispatch} from "react-redux";
import {API_OPTION} from "../utils/constants";
import {addUpcomingMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTION);
        const response = await data.json();
        console.log(response.results);
        dispatch(addUpcomingMovies(response.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;
