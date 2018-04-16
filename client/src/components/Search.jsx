import React from 'react';

export default function Search (props){
  return (
    <div>
        <input></input>
        <button onClick={props.fetchImages}></button>
    </div>
  )
};
