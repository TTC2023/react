import React from 'react';

const Result = (props) => {
  if (!Array.isArray(props.search)) {
    return <p></p>;
  } else{

    return (
      <div>
        {props.search.artists && props.search.artists.items.map((artist, index) => (
          <div key={index}>
            <p>{props.search.artists.items}</p>
          </div>
        ))}
      </div>
    );
  };
  }


export default Result;

