import React, { Component } from "react";
import s from "./ImageGallery.module.css";
import { v4 as genId } from "uuid";
import Modal from "../Modal/Modal"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class Gallery extends Component
{
    state = {
        queryValue: "",
        elem: null,
        showModal: false,
        // largeImageURL: {},
    };
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    
    }

   
    getElem = (elem) => {
    this.toggleModal();
    this.setState({ elem });
    }
    
    render() {
        const { gallery} = this.props;
        const {handleChange, handleSubmit, getElem } = this;
        const {  queryValue,showModal,elem,largeImageURL } = this.state;
        return (
            <>
        
                {showModal && <Modal
                    onClose={this.toggleModal}
                    source={elem.src.large}>
          </Modal>}
                    
    <ul className={s.ImageGallery}>
              {gallery.map((el) => (
                <ImageGalleryItem getElem={getElem} el={el}/>
   
))}
</ul>

        </>
    )
    }
}

export default Gallery