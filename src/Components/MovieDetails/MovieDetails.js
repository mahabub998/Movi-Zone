import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetails.css";
import { Link } from "react-router-dom";

function MovieDetails() {
  const { IdMovie } = useParams();
  console.log(IdMovie);
  const [details, setDetails] = useState([]);
  console.log(details);

  useEffect(() => {
    const url = `https://api.tvmaze.com/search/shows?q=all}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [IdMovie]);
  console.log(details);

  const filteredData = details.filter((score) => score?.show?.id == IdMovie);
  console.log(filteredData[0]);

  return (
    <div className="container mt-5 row mb-5">
      <h1 className="text-center">
        Movie Name : {filteredData[0]?.show?.name}
      </h1>
      <div className="col-md-6 justify-content-start">
        <img
          src={filteredData[0]?.show?.image.original}
          class="card-img-top"
          alt="..."
          className="img_handel mt-5"
        />
      </div>
      <div className="col-md-6 justify-content-start mt-5 ">
        <h4> runtime: {filteredData[0]?.show?.runtime}</h4>
        <h4>language: {filteredData[0]?.show?.language}</h4>
        <p>summary : {filteredData[0]?.show?.summary}</p>

        <h3>Day: {filteredData[0]?.show?.schedule.days}</h3>
        <h3>Time: {filteredData[0]?.show?.schedule.time}</h3>
        <Link to={`/form/${filteredData[0]?.show?.id}`}>
          <button className="mt-5 text-center btn btn-success">Book now</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
