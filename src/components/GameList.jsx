// import react from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/scraper'); // Change this to the URL of your API
                setGames(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading games: {error.message}</p>;

    return (
        <div>
            <h1>Video Games</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <h2>{game.name}</h2>
                        <p>{game.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;