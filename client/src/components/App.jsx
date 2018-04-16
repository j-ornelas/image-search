import React from 'react';
import axios from 'axios';
import API_KEY from './../../../config/keys.js';
import Search from './Search.jsx';
import AllResults from './AllResults.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    }
  }

  handleStateChange(state, property){
    this.setState({[state]:property});
  }

  fetchImages(){
    axios.get('/images', {params:{api:API_KEY}})
    .then((response) => {
      console.log(response);
      this.handleStateChange('images', response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }



  render(){
    return (
      <div>
        <Search fetchImages={this.fetchImages.bind(this)}/>
        <AllResults images={this.state.images} />
      </div>
    )
  }
}

export default App;
