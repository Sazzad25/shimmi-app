import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ topics }) => {
  const {_id, title, details, image_url } = topics;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {details.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."} <Link className="text-primary" to={`/topics/${_id}`}>Read More</Link>
              </>
            ) : (
              details
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
