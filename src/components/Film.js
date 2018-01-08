import React from 'react';

class Film extends React.Component {
  render(){
    return(
      <div className="film">
        <h5>{this.props.name}</h5>
        {this.props.children.hidden}
      </div>

    )
  }
}

export default Film
