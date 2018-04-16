import React from "react";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test: true
    }
  }


  render(){
    return (
      <div> this is the main component</div>
    )
  }
}

export default Main;
