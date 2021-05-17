import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyWord, setkeyWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] =useState();
  
  function handleResponse(response) {
    setResults(response.data[0]);
  }

 function handlePexelsResponse(response){
setPhotos(response.data.photos);

 }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey= "563492ad6f91700001000001377e4f9935b849ec946ceb8e9155c924";
    let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyWord}`;
    let headers= { headers: {Authorization : `Bearer ${pexelsApiKey}`}};
    axios.get(pexelsApiUrl, headers).then(handlePexelsResponse);
  }

  function handleOnchange(event) {
    setkeyWord(event.target.value);
  }
  

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="Search" placeholder = "Enter a word..." onChange={handleOnchange}></input>
      <input type="submit" value="Go!" />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
