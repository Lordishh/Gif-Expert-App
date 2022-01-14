import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="title animate__animated animate__rubberBand">
        {" "}
        Gifs de la búsqueda de "{category}".
      </h3>

      {loading && (
        <p className="animate__animated animate__flash loading">Cargando...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  categoty: PropTypes.string.isRequired,
};

export default GifGrid;
