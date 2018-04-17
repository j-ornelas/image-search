import React from 'react';

export default function Search (props){
  let confirmSearch;
  if (props.lastSpellChecked && props.lastSearched !== props.lastSpellChecked){
    confirmSearch = (<div>showing results for {props.lastSpellChecked}. <span onClick={props.fetchImages.bind(this, true)}>Search for {props.lastSearched} instead.</span></div>)
    }

  return (
    <div>
        <input className="input-field" type="text" placeholder="Search for images..." onChange={props.handleSearchChange}></input>
        <button className="input-field btn waves-effect waves-light" onClick={props.fetchImages.bind(this, false)}>Search</button>
        {confirmSearch}
    </div>
  )
};
