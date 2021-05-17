import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index} alt="Images">
                <a href={photo.src.original} target="_blank" />
                <img src={photo.src.landscape} className="img-fluid" />;
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return null;
}
