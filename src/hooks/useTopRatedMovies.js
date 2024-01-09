import {useDispatch} from "react-redux";
import {API_OPTION} from "../utils/constants";
import {addTopRatedMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTION);
        const response = await data.json();
        console.log(response.results);
        dispatch(addTopRatedMovies(response.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;
