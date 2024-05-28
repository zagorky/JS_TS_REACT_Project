import { useState } from 'react';
import axios from 'axios';
import classes from './RandomAnime.module.scss'

const RandomAnime = () => {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomAnime = async () => {
    setLoading(true);
    setError(null);

    try {
      // Get a random anime ID (This is a simplistic approach)
      const randomId = Math.floor(Math.random() * 10000) + 1;

      const response = await axios.get(`https://api.jikan.moe/v4/anime/${randomId}`);
      setAnime(response.data.data);
    } catch (err) {
      setError('Could not fetch anime. Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>   
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {anime && (
        <div>
          <h2>{anime.title}</h2>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <p><strong>Жанры:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>
          <p>{anime.synopsis}</p>
        </div>
      )}
            <button className={classes.btn} onClick={getRandomAnime}>Искать аниме</button>

    </div>
  );
};

export default RandomAnime;