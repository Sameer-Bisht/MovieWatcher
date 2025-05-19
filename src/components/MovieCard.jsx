import "./moviecard.css"
import {React} from 'react'
import {useState, useEffect} from "react";
const MovieCard = ({name, id, genre, description, img_url,rating})=>{

    // Helper to count lines in description
    const getLineCount = (text) => {
        // Create a temporary element to measure rendered lines
        const el = document.createElement("div");
        el.style.position = "absolute";
        el.style.visibility = "hidden";
        el.style.width = "300px"; // adjust to your card width
        el.style.fontSize = "16px"; // adjust to your CSS
        el.style.lineHeight = "1.5"; // adjust to your CSS
        el.innerText = text;
        document.body.appendChild(el);
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const height = el.offsetHeight;
        document.body.removeChild(el);
        return Math.round(height / lineHeight);
    };

    const [showReadMe, setShowReadMe] = useState(false);

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