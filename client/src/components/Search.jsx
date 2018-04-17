import React from 'react';

export default function Search (props){
  let confirmSearch;
  if (props.lastSpellChecked && props.lastSearched !== props.lastSpellChecked){
    confirmSearch = (<div>showing results for {props.lastSpellChecked}. Search for {props.lastSearched} instead.</div>)
    }

  return (
    <div>
        <input onChange={props.handleSearchChange}></input>
        <button onClick={props.fetchImages}></button>
        {confirmSearch}
    </div>
  )
};
