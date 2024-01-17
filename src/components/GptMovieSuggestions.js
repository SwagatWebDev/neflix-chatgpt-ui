import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const  GptMovieSuggestions= () => {
    const { movieNames, movieResults } = useSelector((store) => store.gpt);
    if (!movieNames) return null;
    console.log(movieResults);

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <div>
                {movieNames.map((movieName, index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index].results}
                    />
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;
