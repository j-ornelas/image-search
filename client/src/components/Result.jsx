import React from 'react';


export default function Result (props){
  return (
    <div><img src={props.image.display_sizes[1].uri} /></div>
  )
};
