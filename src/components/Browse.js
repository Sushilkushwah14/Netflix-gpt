
import useNowPlayingMovies from '../hooks/usenowPlayingMovies'
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import usePopularMovies from "../hooks/usePopularMovies"
const Browse = () => {
useNowPlayingMovies();
useUpcommingMovies();
useTopRatedMovies();
usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
