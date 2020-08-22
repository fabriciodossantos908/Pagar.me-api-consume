import React from "react";

import "./styles.css";

interface Sneaker {
  id: number;
  name: String;
  image: String;
  desc: String;
}

const SneakerItem: React.FC<Sneaker> = ({ id, name, image, desc }) => {
  return (
    <div id="sneaker-item">
      <div id="sneaker-item-content">
        <img src={image.toString()} alt={name.toString()} className='image' />
        <article>
          <h1>Id {name}</h1>
          <h1>{desc}</h1>

        </article>
      </div>
    </div>
  );
};

export default SneakerItem;
