import "./moviecard.css"

const MovieCard = ({name, id, genre, description, img_url,rating})=>{

    // Helper to count lines in description
 

    useEffect(() => {
        if (description) {
            setShowReadMe(getLineCount(description) > 3);
        }
    }, [description]);

    return (
        <div className="movie-card">
            <img
                src={img_url}
                alt="Movie Poster"
                className="movie-card__poster"
            />
            <div className="movie-card__details">
                <section className="movie-card__details_heading">

                <h1 className="movie-card__title gradient">{name}</h1>
                </section>
                <p className="movie-genre">{genre && Array.isArray(genre) ? genre.join('-') : genre}</p>
                <p className="movie-description">{description}</p>
               
                <p className="movie-rating">Rating : {rating}</p>
            </div>
        </div>
    )
}
export default MovieCard;