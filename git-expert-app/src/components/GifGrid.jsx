import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../utils/utils";
import { GiftItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <ol className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </ol>
    </>
  );
};
