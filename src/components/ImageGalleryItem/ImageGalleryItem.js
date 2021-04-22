import React from "react";
import s from "./ImageGalleryItem.module.css";
import { v4 as genId } from "uuid";

const ImageGalleryItem = ({ el, getElem}) => {
    return (
        <li key key={genId()} className={s.ImageGalleryItem}>  
                    <div >
                    <a
                     href="#" onClick={() => {
                        getElem(el);
                      }}
                    >
                    <img
                        src={el.src.tiny}
                        alt={el.alt}
                        className={s.ImageGalleryItem_image} />
                    </a>
                  </div>
                        
                    </li>
    )
}

export default ImageGalleryItem