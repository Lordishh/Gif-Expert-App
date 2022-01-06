import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  return (
    <>
      <h3 className="title"> Gifs de la búsqueda de "{category}".</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
