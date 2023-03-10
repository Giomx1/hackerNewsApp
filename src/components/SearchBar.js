import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNewsFeed from "./MainNewsFeed";

const SearchBar = () => {
  const [term, setTerm] = useState("Weather");
  const [results, setResults] = useState([]);

  const key = process.env.REACT_APP_KEY;

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${term}&apiKey=${key}`
      );
      setResults(data.articles);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  return (
    <>
      <div className="ui form">
        <div className="field">
          <h1>
            HackerNews App
          </h1>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <MainNewsFeed results={results} />
    </>
  );
};

export default SearchBar;
