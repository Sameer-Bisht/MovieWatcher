
import MovieCard from "./MovieCard"
import './watchlist.css'
import Data from  "../api/data.json"
const Watchlist = ({currUser})=>{
  const userData = Data.users[currUser]
  console.log(userData)
     return (
        <div className="movie-card-container">
    {userData.map((currMovie)=>{
      const {name ,id, genre, img_url, rating,description} = currMovie
      return(
        
        <MovieCard key={id} name= {name} rating= { rating} id = {id} genre={genre} description={description} img_url={img_url}/>
      )
    })}
        </div>

    )

}
export default Watchlist;