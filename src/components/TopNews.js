import React, { useEffect, useState } from "react";
import axios from "axios";

const TopNews = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=63c435d0248a49d6b7b5a05290cde06f"
      );
      setResults(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <>
      <h1>Popular News</h1>
      {results.map((article, index) => {
        const { title, description, urlToImage, url } = article;
        return (
          <div key={index} className="ui segment">
            <img
              className="ui centered big rounded image"
              src={urlToImage}
              alt={title}
            />
            <h2 style={{ textAlign: "center" }}>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                {title}
              </a>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span dangerouslySetInnerHTML={{ __html: description }}></span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TopNews;
