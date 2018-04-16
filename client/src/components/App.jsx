import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    }
  }
  
  handleStateChange(state, property){
    this.setState({[state]:property})
  }

  fetchImages(){
    axios.get('/images')
    .then((response) => {
      console.log(response)
      this.handleStateChange('images', response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }



  render(){
    return (
      <Search fetchImages={this.fetchImages.bind(this)}/>
    )
  }
}

export default App;
