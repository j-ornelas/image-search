import React from 'react';

export default function Search (props){
  let confirmSearch;
  if (props.lastSpellChecked && props.lastSearched !== props.lastSpellChecked){
    confirmSearch = (
      <div className="spell-check-override-text">Currently showing results for {props.lastSpellChecked}. <span className="spell-check-override-link" onClick={props.overrideSpellCheck}>Search for {props.lastSearched} instead</span></div>
      )
    }

  return (
    <div>
        <input className="input-field" type="text" placeholder="Search for images..." onChange={props.handleSearchChange}></input>
        <button className="input-field btn waves-effect waves-light" onClick={props.fetchImages.bind(this, false, 30)}>Search</button>
        {confirmSearch}
    </div>
  )
};
