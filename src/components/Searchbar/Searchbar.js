import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component
{
    state = {
        queryValue: "",
    };
    
   
handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ queryValue: e.target.value })
    }

handleSubmit = (e) => {
    e.preventDefault();
    const { getQuery } = this.props;
    getQuery(this.state.queryValue)
    this.state.queryValue = "";
}
    
    render() {
        const {handleChange, handleSubmit} = this;
        const {  queryValue } = this.state;
        return (
            <>
                 
        <div> <header className={s.Searchbar}>         
     <form className={s.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={s.SearchForm_button}>
    <span className={s.SearchForm_button_label}>Search</span>
    </button>

    <input
    className={s.SearchForm_input}
      type="text"
    //   autocomplete="off"
    autofocus
    placeholder="Search images and photos"
        name="query"
        onChange={handleChange}
        value={queryValue}
    />
  </form>
            </header></div>

        </>
    )
    }
}

export default Searchbar