import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch()
    //fetch trailer video using key of that raference(ex:yt,)
    //ANd updating the store
    const getMovieVideo=async ()=>{

        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos"
             ,API_OPTIONS
            )//api of tmdb is used to get video by keys/id
        const json=await data.json();
        // console.log(json);

       const filteredtrailer=json.results.filter(video=>video.type==="Trailer")
    //    console.log(filteredtrailer);
       const trailer=filteredtrailer.length ? filteredtrailer[1] : json.result[0];
    //    console.log(trailer);
       dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideo();
    },[])
}

export default useMovieTrailer