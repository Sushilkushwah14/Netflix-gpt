import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null, // nowPlayingMovies is like a placeholder
        trailerVideo: null, // nowPlayingMovies is like a placeholder
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
         state.trailerVideo=action.payload
        }
    }
});

export const { addNowPlayingMovies ,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
