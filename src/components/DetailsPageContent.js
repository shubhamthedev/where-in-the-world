import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Details from "./Details";
import Button from "./Button";

const DetailsPageContent = (props) => {
  const mapWithCommas = (array, withName) => {
    const checkForEmptyValue = (index) => {
      if (withName) {
        return index === array.length - 1 || !array[index + 1].name;
      } else {
        return (
          index === array.length - 1 ||
          array[index + 1].toString().trim() === ""
        );
      }
    };

    if (array[0].toString().trim() === "") {
      return "-";
    } else {
      return array.map((item, index) => {
        if (withName) {
          return checkForEmptyValue(index) ? item.name : item.name + ", ";
        } else {
          return checkForEmptyValue(index) ? item : item + ", ";
        }
      });
    }
  };

  return (
    <Zoom duration={600}>
      <div className="detail-page__container">
        <img
          className="detail-page__flag"
          src={props.details.flag}
          alt={props.details.name}
        />
        <div className="detail-page__content">
          <h2 className="detail-page__heading">{props.details.name}</h2>
          <div className="detail-page__details">
            <div className="detail-page__column">
              <Details title="Native Name" value={props.details.nativeName} />
              <Details
                number
                title="Population"
                value={props.details.population}
              />
              <Details title="Region" value={props.details.region} />
              <Details title="Sub Region" value={props.details.subregion} />
              <Details title="Capital" value={props.details.capital} />
            </div>
            <div className="detail-page__column">
              <Details
                title="Top Level Domain"
                value={mapWithCommas(props.details.topLevelDomain, false)}
              />
              <Details
                title="Currencies"
                value={mapWithCommas(props.details.currencies, true)}
              />
              <Details
                title="Languages"
                value={mapWithCommas(props.details.languages, true)}
              />
            </div>
          </div>
          <div
            className="detail-page__buttons-row"
            style={{
              display: props.borders.length === 0 ? "none" : "flex",
            }}
          >
            <span className="detail-page__buttons-title">
              Border Countries:
            </span>
            <div className="detail-page__buttons">
              {props.borders.map((border) => (
                <Link
                  to={"/details/" + border.code}
                  key={border.code}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button text={border.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default DetailsPageContent;
