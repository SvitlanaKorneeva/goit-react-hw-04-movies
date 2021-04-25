import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import getFetch from '../../services/filmApi';
import Axios from 'axios';

class HomePage extends Component {
    state = {
        movieList: [],
    };

    async componentDidMount() {
    const apiKey = `3edb87365eb5f7934b30e53b3f8713fc`;
    const response = await Axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=3edb87365eb5f7934b30e53b3f8713fc');
    console.log(response.data.results);
    this.setState({ movieList: [...response.data.results] });
  }
    
    render() {
        console.log(this.props.match.url)
        return (
            <>
            <h1>домашняя страница со списком популярных кинофильмов</h1>
            <ul>
          {this.state.movieList.map(movie => (
              <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}> {movie.title}
                  </Link>
              </li>
          ))}
        </ul>
            </>)
    };
}
export default HomePage;