import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(()=> {
    
    const topRateUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    
    getTopRatedMovies(topRateUrl);

  }, [])


  console.log(moviesURL, apiKey);

  return (
    <div>

    {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}

    </div>
  )
}

export default Home