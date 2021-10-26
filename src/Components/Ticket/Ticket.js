import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import swal from "sweetalert";
import Swal from "sweetalert2";
import "./Ticket.css";

function Modal() {
  const { IdMovie } = useParams();
  const [forms, setfroms] = useState([]);
  const [totalTicket, setTotalTicket] = useState();

  useEffect(() => {
    const url = `https://api.tvmaze.com/search/shows?q=all}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setfroms(data));
  }, [IdMovie]);
  console.log(forms);
  const filteredData = forms.filter((score) => score?.show?.id == IdMovie);

  const ticketPrice = 20;
  const ticketValue = (e) => {
    console.log(e.target.value);
    const TotalTicketprice = e.target.value * ticketPrice;

    setTotalTicket(TotalTicketprice);
  };
  console.log(totalTicket);

  const sawlHandel = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Your Ticket is ready.",
      imageUrl: "https://i.ibb.co/WgsbFjG/ticket-2.jpg",
      imageWidth: 400,
      imageHeight: 200,

      imageAlt: "Custom image",
    });
  };
  return (
    <div className=" align-items-center d-flex justify-content-center ">
      <form className="background_color ">
        <div className="container form-group  mt-5">
          <h1 className="text-danger">
            movie name : {filteredData[0]?.show?.name}
          </h1>
          <h5 className="text-success"> ticket price : {ticketPrice}</h5>

          <input
            className="form-control ticket_form"
            onChange={ticketValue}
            type="text"
            placeholder="how many ticket"
            required
          ></input>
          <br></br>
          <br></br>
          <h6  className="text-success">Total cost : {totalTicket}</h6>
          <br></br>
          <br></br>
          <button
            type="submit"
            className="btn btn-success"
            onClick={sawlHandel}
          >
            {" "}
            confirm{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
