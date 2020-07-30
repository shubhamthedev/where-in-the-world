import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./sass/main.scss";
function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialList = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      initialList.current = response.data;
      setCountries(initialList.current);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage countries={countries} loading={loading} />}
        />
      </Switch>
    </>
  );
}

export default App;
