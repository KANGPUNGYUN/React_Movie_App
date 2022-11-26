import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
    )
    console.log(json);
  };
  useEffect(()=>{
    getMovie();
  }, [])
  return (
    <div>Detail</div>
  )
}
