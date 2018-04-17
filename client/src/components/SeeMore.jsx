import React from 'react';

export default function SeeMore (props){
  let seeMoreConfirm;
  if (props.images.length >= 30 && props.imagesNum <= 89){
    seeMoreConfirm = (
      <div>
        <button onClick={props.seeMoreImages} className="input-field btn waves-effect waves-light">See More</button>
      </div>
      )
    }

  return (
    <div>
        {seeMoreConfirm}
    </div>
  )
};
