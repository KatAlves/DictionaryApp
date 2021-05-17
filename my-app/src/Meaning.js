import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="meaning1">
      <h3 className= "text-capitalize">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <img src= "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/56/owl_1f989.png" alt="owl"></img>
             {definition.definition}
             <img src= "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/56/owl_1f989.png"alt="owl"></img>
              <br />
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div> 
        );
      })}
      </div>
    </div>
  );
}
