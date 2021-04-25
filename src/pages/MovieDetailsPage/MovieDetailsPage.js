import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    title: "",
    // overview: '',
    // poster_path: '',
    // vote_average: '',
  };

  async componentDidMount() {
    const { moviesId} = this.props.match.params;
    const response = await Axios.get('https://api.themoviedb.org/3/movie/{movie_id}?api_key=3edb87365eb5f7934b30e53b3f8713fc');
    console.log(response.data.results);
    this.setState({ ...response.data });
  }
  render() {
    const {title}= this.state;
    return (
      <>
      <h1>страница с детальной информацией о кинофильме {this.props.match.params.moviesId}</h1>
      
        <h2>{title}</h2>
       </>
    ) 
      
  };
}
export default MovieDetailsPage;