import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 6) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    {" "}
                  </a>
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="Images"
                  />
              
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  }

  return null;
}
