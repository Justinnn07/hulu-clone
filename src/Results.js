import React, { useEffect, useState } from "react";
import "./Result.css";
import axios from "./axios";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move"


function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  console.log(movies);

  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
