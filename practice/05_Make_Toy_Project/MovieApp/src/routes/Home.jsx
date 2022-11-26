import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 1. fetch 방법
    // useEffect(()=>{
    //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year').then((response)=>response.json()).then((json)=>{
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
    // },[])
  
    // 2. async await 방법
    const getMovies = async () => {
  
      // const response = await fetch(
      //   'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      // )
      // const json = await response.json();
  
      const json = await (
        await fetch(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
      ).json();
  
      setMovies(json.data.movies);
      setLoading(false);
  
    };
    useEffect(()=>{
      getMovies();
    }, []);
  
    return (
      <div>
        {loading ? 
        <h1>Loading...</h1> : 
        <div>
          {movies.map((movie)=> 
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            />
          )}
        </div>}
      </div>
    );
}
