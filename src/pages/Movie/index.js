import React from "react";
import { useParams } from "react-router";

function Movie() {
  const { movie } = useParams();
  return <p>soy la movie loco</p>;
}

export default Movie;
