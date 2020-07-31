import React, { useEffect } from "react";

import Grid from "./Grid";
import FilteringArea from "./FilteringArea";
import Input from "./Input";
import Select from "./Select";
import Spinner from "./Spinner";
import Error from "./Error";

function HomePage(props) {
  useEffect(() => {
    document.querySelector("body").classList.remove("detail");
    document.querySelector("body").style.overflow = "initial";
  }, []);

  return (
    <main className="home">
      <FilteringArea>
        <Input changed={props.inputChanged} value={props.inputValue} />
        <Select changed={props.regionHandler} selected={props.selectedRegion} />
      </FilteringArea>
      {props.loading ? <Spinner /> : null}
      {!props.loading && (props.error || props.countries.length === 0) ? (
        <Error />
      ) : (
        <Grid items={props.countries} />
      )}
    </main>
  );
}
export default HomePage;
