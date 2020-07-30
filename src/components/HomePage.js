import React, { useEffect } from "react";

import Grid from "./Grid";
import FilteringArea from "./FilteringArea";
import Input from "./Input";
import Select from "./Select";
import Spinner from "./Spinner";

function HomePage(props) {
  useEffect(() => {
    document.querySelector("body").classList.remove("detail");
    document.querySelector("body").style.overflow = "initial";
  }, []);

  return (
    <main className="home">
      {props.loading ? (
        <Spinner />
      ) : (
        <FilteringArea>
          <Input changed={props.inputChanged} value={props.inputValue} />
          <Select
            changed={props.regionChanged}
            selected={props.selectedRegion}
          />
        </FilteringArea>
      )}
      {!props.loading ? <Grid items={props.countries} /> : null}
    </main>
  );
}
export default HomePage;
