
import MovieAdd from './MovieAdd'
import MovieCard from './MovieCard'

function MovieListe({movies,setmovies,text,rate}) {
  return (
<div>
  <div className='btnadd'>
   <MovieAdd movies={movies} setmovies={setmovies} /></div>
    <div className='box'>
        {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el)=><MovieCard movie={el}/>).reverse()

        }
    </div></div>
  )
}

export default MovieListe