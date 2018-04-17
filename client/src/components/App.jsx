import React from 'react';
import axios from 'axios';
import API_KEY from './../../../config/keys.js';
import Search from './Search.jsx';
import Modal from 'react-awesome-modal';
import AllResults from './AllResults.jsx';
import SeeMore from './SeeMore.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      searchTerms: 'landscape',
      lastSearched: null,
      lastSpellChecked: null,
      imagesNum: 30,
      overrideSpellCheck: false
    }
  }

  componentDidMount(){
    this.fetchImages(false, 30)
  }

  handleSearchChange(event){
    this.setState({searchTerms:event.target.value});
    //we reset the number of results/override if a new query is entered
    this.setState({imagesNum:30})
    this.setState({overrideSpellCheck: false})
  }

  seeMoreImages(){
    let newNum = this.state.imagesNum + 30;
    this.setState({imagesNum:newNum});
    this.fetchImages(this.state.overrideSpellCheck, newNum);
  }

  overrideSpellCheck(){
    this.setState({overrideSpellCheck:!this.state.overrideSpellCheck})
    this.fetchImages(true, 30)
  }

  fetchImages(override, number){
    axios.get('/images', {
      params:{
        api:API_KEY,
        q:this.state.searchTerms,
        autoCorrectOverride:override,
        imagesNum:number
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
          overrideSpellCheck={this.overrideSpellCheck.bind(this)}
        />
        <AllResults images={this.state.images} />
        <SeeMore
          images={this.state.images}
          imagesNum={this.state.imagesNum}
          seeMoreImages={this.seeMoreImages.bind(this)}
        />
      </div>
    )
  }
}

export default App;
