import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import randomColor from "randomcolor";
import RandomQuote from './components/RandomQuote';


function App() {
  const [color, setColor] = useState('blue');

  const click = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <div
        className="container bg-white d-flex flex-column justify-content-end align-items-center"
        style={{
          height: '200px',
          width: '600px',
          margin: '15%',
          borderRadius: '10px'
        }}
      >
        <RandomQuote color={color} />
        <button
          onClick={() => click(randomColor())}
          style={{
            color,
            alignSelf: 'flex-end',
            marginBottom: '15px',
            borderRadius: '10px'
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
