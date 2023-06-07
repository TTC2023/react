import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongList = ({ artist }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT_URL`, {
          params: {
            artist: artist,
          },
          // Add any necessary headers or authentication tokens
        });
        setSongs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSongs();
  }, [artist]);

  return (
    <div>
      <h2>Songs by {artist}:</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
