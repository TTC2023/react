import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Result from './components/Result';
import Search from './components/Search.jsx'
import SongList from './components/SongList';

function App() {

  const [search, setSearch] = useState([])
  const [artist, setArtist] = useState("")

  useEffect(() => {
    console.log('Search updated:', search);
  }, [search]);

  useEffect(() => {
    console.log('Artist updated:', artist);
  }, [artist]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search search={search} setSearch={setSearch} artist={artist} setArtist={setArtist} />} />
        <Route path='/' element={<Result search={search} />} />
        <Route path='/songs/*' element={<SongList artist={artist}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
