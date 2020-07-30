import React from "react";
import Fade from "react-reveal/Fade";

import Details from "./Details";

function Card(props) {
  return (
    <Fade bottom duration={700}>
      <div style={{ height: "100%" }}>
        <div className="card">
          <img src={props.flag} alt={props.name} className="card__flag" />
          <div className="card__content">
            <h3 className="card__title">{props.name}</h3>
            <Details number title="Population" value={props.population} />
            <Details title="Region" value={props.region} />
            <Details title="Capital" value={props.capital} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Card;
