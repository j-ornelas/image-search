import React from 'react';
import axios from 'axios';
import API_KEY from './../../../config/keys.js';
import Search from './Search.jsx';
import Modal from 'react-awesome-modal';
import AllResults from './AllResults.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      searchTerms: '',
      lastSearched: null,
      lastSpellChecked: null
    }
  }

  toggleModal(){
    this.setState({visible: !this.state.visible});
  }
  handleSearchChange(event){
    this.setState({searchTerms:event.target.value})
  }

  fetchImages(override){
    axios.get('/images', {
      params:{
        api:API_KEY,
        q:this.state.searchTerms,
        autoCorrectOverride:override
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
