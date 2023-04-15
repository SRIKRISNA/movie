import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './movie.css';
import { Link } from 'react-router-dom';
// import apis from '../db.json';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchMovies = async () => {
            const res = await axios.get('http://localhost:3004/movies');
            setMovies(res.data);
            setLoading(false);
        }
        fetchMovies();

    }, []);

    return (
        <div className='movie-container'>
            <div className="title"><h1>Movies API</h1></div>
            <div className="movie">
                {
                    loading ? (
                        <h2>Loading...</h2>
                    ) :
                        (movies.map((movie, idx) => (
                            <Link key={movie.id} to={"/" + movie.id} >
                                <Card movie={movie} key={movie.id} />
                            </Link>
                        )))
                }
            </div>

        </div>
    )
}

export default Movies