import React from 'react';
import './movie.css';
import pic from './pic.jpg';
// import { useNavigate } from 'react-router-dom';
const Card = ({movie, id}) => {
    // const navigate = useNavigate();

  return (

    <div className='card-container' >
        {/* image not displaying url so added src img */}
        <img src={pic} alt='img' width='220px' height='auto' />
        <h4>Movie : {movie.movie_name}</h4>
        <span><strong>IMDB Rating: </strong>{movie.ratings}</span>
        <span><strong>Genre: </strong>{movie.genre + " "}</span>
        <p><strong>Release date: </strong>{movie.release_date}</p>
    </div>
  )
}

export default Card;