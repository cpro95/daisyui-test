import React, { useEffect, useState } from "react";
import AutoComplete from "./auto_complete";

type Country = {
  name: {
    common: string;
  };
};

const CountriesAutoComplete = () => {
  // query
  const [value, setValue] = useState("");

  // a list to hold all the countries
  const [countries, setCountries] = useState<string[]>([]);

  // a list to show on the dropdown when user types
  const [items, setItems] = useState<string[]>([]);

  // query rest countries api and set the countries list
  useEffect(() => {
    async function fetchData() {
      const url = "https://restcountries.com/v3.1/all?fields=name";
      const response = await fetch(url);
      const countries = (await response.json()) as Country[];
      const newItems = countries.map((p) => p.name.common).sort();
      setCountries(newItems);
      console.log(newItems);
    }

    fetchData();
  }, []);

  useEffect(() => {
    // if there is no value, return the countries list
    if (!value) {
      setItems(countries);
      return;
    }

    // if the value changes, we filter items  so that it can be filtered, and set it as new state
    const newItems = countries
      .filter((p) => p.toLowerCase().includes(value.toLowerCase()))
      .sort();
    setItems(newItems);
  }, [countries, value]);
  return <AutoComplete items={items} value={value} onChange={setValue} />;
};

export default CountriesAutoComplete;
