import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null, // nowPlayingMovies is like a placeholder
        PopularMovies: null, // nowPlayingMovies is like a placeholder
        TopRatedMovies: null, // nowPlayingMovies is like a placeholder
       UpcommingMovies: null, // nowPlayingMovies is like a placeholder
        trailerVideo: null, // nowPlayingMovies is like a placeholder
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
        state.PopularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
        state.TopRatedMovies = action.payload;
        },
        addUpcommingMovies: (state, action) => {
        state.UpcommingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
         state.trailerVideo=action.payload
        }
    }
});

export const { addNowPlayingMovies ,addUpcommingMovies,addTopRatedMovies,addPopularMovies,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
