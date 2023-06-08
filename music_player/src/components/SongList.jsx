import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SONG_API_URL, MUSIC_API_KEY } from './API';
import { useParams } from 'react-router-dom';

const SongList = ({ artist }) => {
    const { '*': artistId } = useParams();
    const tailArtistId = artistId.split(':').pop();

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`${SONG_API_URL}`, {
                    params: {
                        id: tailArtistId,
                    },
                    headers: {
                        'X-RapidAPI-Key': MUSIC_API_KEY,
                        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                    },
                });
                setSongs(response.data);
                console.log(response.data);
                console.log(tailArtistId);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSongs();
    }, [tailArtistId]);

    return (
        <div>
            <h2>Songs by {artist}:</h2>
            <ul>
            </ul>
        </div>
    );
};

export default SongList;
