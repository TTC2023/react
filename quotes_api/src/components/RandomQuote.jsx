import axios from 'axios';
import { useEffect, useState } from 'react';

const RandomQuote = ({ color }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')

  const fetchRandomQuote = async () => {
    const randomQuote = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'X-RapidAPI-Key': '93aaed023emsh52d172e58097508p1e4c3djsn2b4051e8d716',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(randomQuote);
      setQuote(response.data.content);
      setAuthor(response.data.originator.name)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, [color]);

  return <div>
            <p style={{ color }}>{quote}</p>
            <p style={{ color }}>- {author}</p>
          </div>;
};

export default RandomQuote;
