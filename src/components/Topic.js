import React from "react";
import { useLoaderData } from "react-router-dom";

const Topic = () => {
  const news = useLoaderData();
  
   const { title, image_url, details } = news;
   
  return (
    <div>
      <h1> News: {news?.length}</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
