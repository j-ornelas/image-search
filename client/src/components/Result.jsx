import React from 'react';
import ModalImage from 'react-modal-image'


export default function Result (props){
  return (
    <span className="results col s12 m4 l2 result-image">
    <ModalImage
      className="result-image"
      small={props.image.display_sizes[1].uri}
      large={props.image.display_sizes[0].uri}
      alt={props.image.title}
      />
    </span>
  )
};
