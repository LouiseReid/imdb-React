import React from 'react';
import FilmList from './FilmList';
import ShowtimesBtn from './ShowtimesBtn'


class ListingsBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [
        {id: 1, name: "Sausage Party", times:"19:00, 20:00"},
        {id: 2, name: "Cafe Society", times:"14.55, 19.10"},
        {id: 3, name: "Morgan", times:"17.45, 20.10"},
        {id: 4, name: "The 9th Life of Louis Drax", times:"19:30"},
        {id: 5, name: "Naam Hai Akira", times:"12:00, 14:15"},
        {id: 6, name: "Equity", times:"19:00"},
        {id: 7, name: "Things to Come", times:"20:30"},
      ],
    }
  }

  render(){
    return (
      <div className="listings-box">
        UK Opening This Week
        <FilmList films={this.state.films}/>
        <a href="">See more opening this week >></a>
        <ShowtimesBtn />
      </div>
    )
  }
}

export default ListingsBox
