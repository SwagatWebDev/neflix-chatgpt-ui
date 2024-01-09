import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

const  VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video absolute px-24 pt-[15%] bg-gradient-to-r from-black text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
                    ▶ Play
                </button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
                    <FontAwesomeIcon icon={faCircleInfo} className="mx-2"/>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;
