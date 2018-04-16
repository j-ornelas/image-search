import React from 'react';
import Result from './Result.jsx'

export default function AllResults (props){
  let mappedResults = props.images.map((image, index) =>
    <Result key={index} image={image} />
  )
  return (
    <div>{mappedResults}</div>
  )
};
