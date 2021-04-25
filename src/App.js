import React, { Component } from "react";

import "./App.css";

import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from './pages/NotFoundView/NotFoundView';
import { v4 as genId } from "uuid";

// import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import Gallery from "./components/ImageGallery/ImageGallery";
import LoaderSpinner from "./components/Loader/Loader";
import getGalleryItems from "./services/pexelsApi";
const { getFetch } = getGalleryItems;


const App = () => (
  <>
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/movies" >Movie</NavLink></li>
      <li><NavLink to="/movies/:movieId" >MovieDetail</NavLink></li>
    </ul>

    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies" component={MoviePage} />
    <Route path="/movies/:moviesId" component={MovieDetailsPage} />
    <Route component={NotFoundView} />
    </Switch>
    
   </>
  
)

// class App extends Component {
//   state = {
//     query: "",
//     page: 1,
//     gallery: [],
//     isLoading: false,
//     error: null,
    
//     // showModal : false
//   }
  
//    componentDidMount() {
//     const { query, page } = this.state;
//     getFetch(query, page)
//       .then((result) => {
//         console.log(result);
//         this.setState({ gallery: [...result] });
//       })
//       .catch((err) => {});
//   }
//    componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (query !== prevState.query) {
//       getFetch(query, page)
//         .then((result) => {
//           console.log(result);
//           this.setState((prev) => ({ gallery: [...prev.gallery, ...result] } ));
//         })
//         .catch((err) => { });
//       this.fetchGallery();
      
//     }
//   }
  
//   getQuery = (query) => {
//     this.setState({query: query, page:1, gallery: [], error: null})
    
//   }

//   fetchGallery = () => {
//     const { query, page, gallery } = this.state;
    
//     this.setState ({isLoading: true})
//       getFetch(query, page)
//         .then((result) => {
//           this.setState({
//             gallery: [...gallery, ...result],
//             page: page + 1,
//           }); 
//         }) .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ isLoading: false }))
    
//     window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
    
//   }

//   render() {
//     const { gallery, isLoading, error, showModal } = this.state
//     const { getQuery } = this;
//     const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
//       return (
//         <div>
//           {error && <h1>Ой ошибка, всё пропало!!!</h1>}
//           <Searchbar getQuery={getQuery} />
//           {isLoading && <h1>Loading...</h1>}
    
//           <Gallery gallery={gallery} getQuery={getQuery} />
//           {isLoading && <LoaderSpinner/>}
//           {shouldRenderLoadMoreButton && (<Button onClick = {this.fetchGallery}/>)}
          
//         </div>
//     );
//   }
// }

  
export default App;
