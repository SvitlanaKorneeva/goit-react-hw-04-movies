import React, { Component } from "react";

import "./App.css";

import { v4 as genId } from "uuid";

// import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import Gallery from "./components/ImageGallery/ImageGallery";
import LoaderSpinner from "./components/Loader/Loader";
import getGalleryItems from "./services/pexelsApi";
const { getFetch } = getGalleryItems;


class App extends Component {
  state = {
    query: "",
    page: 1,
    gallery: [],
    isLoading: false,
    error: null,
    
    // showModal : false
  }
  
   componentDidMount() {
    const { query, page } = this.state;
    getFetch(query, page)
      .then((result) => {
        console.log(result);
        this.setState({ gallery: [...result] });
      })
      .catch((err) => {});
  }
   componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      getFetch(query, page)
        .then((result) => {
          console.log(result);
          this.setState((prev) => ({ gallery: [...prev.gallery, ...result] } ));
        })
        .catch((err) => { });
      this.fetchGallery();
      
    }
  }
  
  getQuery = (query) => {
    this.setState({query: query, page:1, gallery: [], error: null})
    
  }

  fetchGallery = () => {
    const { query, page, gallery } = this.state;
    
    this.setState ({isLoading: true})
      getFetch(query, page)
        .then((result) => {
          this.setState({
            gallery: [...gallery, ...result],
            page: page + 1,
          }); 
        }) .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }))
    
    window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
    
  }

  render() {
    const { gallery, isLoading, error, showModal } = this.state
    const { getQuery } = this;
    const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
      return (
        <div>
          {error && <h1>Ой ошибка, всё пропало!!!</h1>}
          <Searchbar getQuery={getQuery} />
          {isLoading && <h1>Loading...</h1>}
    
          <Gallery gallery={gallery} getQuery={getQuery} />
          {isLoading && <LoaderSpinner/>}
          {shouldRenderLoadMoreButton && (<Button onClick = {this.fetchGallery}/>)}
          
        </div>
    );
  }
}

  
export default App;
