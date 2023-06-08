import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SONG_API_URL, MUSIC_API_KEY } from './API';
import { useParams } from 'react-router-dom';

const SongList = () => {
    const { '*': artistId } = useParams();
    const tailArtistId = artistId.split(':').pop();
    const [albums, setAlbums] = useState("")
    const [singles, setSingles] = useState("")
    const [artist, setArtist] = useState("")

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
                console.log(response.data);
                setArtist(response.data.data.artist.profile.name);
                setAlbums(response.data.data.artist.discography.albums.totalCount)
                setSingles(response.data.data.artist.discography.singles.totalCount)
            } catch (error) {
                console.error(error);
            }
        };

        fetchSongs();
    }, [tailArtistId]);

    return (
        <div>
            <h2>Discography By: {artist}</h2>
            <h3>Albums: {albums}</h3>
            <h3>Singles: {singles}</h3>
        </div>
    );
};

export default SongList;
