import React from "react";

export default function Jumbotron() {
  return (
    <div className="container-fluid mt-4">
      <div className="p-5 bg-light">
        <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
        <p className="lead">
          Blah blah blah, propper name, place name, backstory stuff.
        </p>
        <button className="btn btn-primary btn-lg">
          Call to action!
        </button>
      </div>
    </div>
  );
}
