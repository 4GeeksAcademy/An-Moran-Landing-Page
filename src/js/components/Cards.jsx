import React from "react";

export default function Cards() {
  const cards = [1, 2, 3, 4];

  return (
    <div className="container-fluid my-5">
      <div className="row g-4 justify-content-center">
        {cards.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index}>
            <div className="card h-100 text-center">

              <div className="ratio ratio-16x9">
                <img
                  src="https://via.placeholder.com/500x325"
                  className="card-img-top object-fit-cover"
                
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                   Blah blah blah, propper name, place name, backstory stuff.
                </p>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary btn-sm">
                  Find Out More!
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
