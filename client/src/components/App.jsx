import React from 'react';
import axios from 'axios';
import API_KEY from './../../../config/keys.js';
import Search from './Search.jsx';
import AllResults from './AllResults.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      searchTerms: 'ceku',
      lastSearched: null,
      lastSpellChecked: null
    }
  }

  handleStateChange(state, property){
    this.setState({[state]:property});
  }

  handleSearchChange(event){
    this.setState({searchTerms:event.target.value})
  }

  fetchImages(){
    axios.get('/images', {
      params:{
        api:API_KEY,
        q:this.state.searchTerms
      }})
    .then((response) => {
      console.log(response);
      this.setState({images: response.data.images});
      this.setState({lastSpellChecked: response.data.spellCheckedQuery});
      this.setState({lastSearched: this.state.searchTerms});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render(){
    return (
      <div>
        <Search
          handleSearchChange={this.handleSearchChange.bind(this)}
          lastSearched={this.state.lastSearched}
          lastSpellChecked={this.state.lastSpellChecked}
          fetchImages={this.fetchImages.bind(this)}
        />
        <AllResults images={this.state.images} />
      </div>
    )
  }
}

export default App;
