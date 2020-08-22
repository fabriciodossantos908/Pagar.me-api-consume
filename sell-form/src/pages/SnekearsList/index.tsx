import React from "react";
import SneakerItem from "../../components/SneakerItem";

import smokedAirForce from '../../assets/images/sneakers/nike/smoked-air-force.jpg'

import "./styles.css";

const sneakers = [
  {
    id: 0,
    name: "Nike air force 1",
    image: smokedAirForce,
    desc: "Made for our daily style",
  },
  {
    id: 1,
    name: "Nike air force 1",
    image: 'test',
    desc: "Made for our daily style",
  },
  {
    id: 2,
    name: "Nike air force 1",
    image: 'test',
    desc: "Made for our daily style",
  },
  {
    id: 3,
    name: "Nike air force 1",
    image: 'test',
    desc: "Made for our daily style",
  },
  {
    id: 4,
    name: "Nike air force 1",
    image: 'test',
    desc: "Made for our daily style",
  },
];

function SneakersList() {
  return (
    <div id="page-sneakers-list">
      <div id="page-sneakers-content" className="content">
        <div className="page-sneakers-title">
            <img src={sneakers[0].image} alt="" />
          <section>
            <h1>Your feet felling better in seconds!!</h1>
          </section>
        </div>
        <div id="page-sneakers-list">
          {/* {sneakers.map(( sneaker) => {
              return <SneakerItem key={sneaker.id} id={sneaker.id} name={sneaker.name} image={sneaker.image} desc={sneaker.desc} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default SneakersList;
