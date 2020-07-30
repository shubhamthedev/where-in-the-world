import React from "react";
// import Link from "react-router-dom";
import Card from "./Card";
import { Link } from "react-router-dom";

function Grid(props) {
  return (
    <section className="grid">
      {props.items.map((item) => (
        <Link
          to={`/details/${item.alpha3Code}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={item.alpha3Code}
        >
          <Card
            flag={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        </Link>
      ))}
    </section>
  );
}
export default Grid;
