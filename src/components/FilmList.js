import React from 'react';
import Film from './Film'

class FilmList extends React.Component {
  render(){
    const films = this.props.films.map(film => {
      return(
        <Film name={film.name} key={film.id}>{film.times}</Film>
      )
    })

    return(
      <div className="film-list">
        {films}
      </div>
    )
  }
}

export default FilmList;
