import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
    console.log(posterPath);
    return (
        <div className="w-40 pr-4">
            <img className="cursor-pointer" alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
        </div>
    )
};

export default MovieCard;
