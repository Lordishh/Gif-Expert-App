import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=10&api_key=aDLU7OcWT5mfIdcxb97sOrolY0FLoC0N";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3> {category} </h3>

      {/* <ol>
        {images.map(({ id, title }) => (
          <li key={id}> {title} </li>
        ))}
      </ol> */}
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </>
  );
};

export default GifGrid;
