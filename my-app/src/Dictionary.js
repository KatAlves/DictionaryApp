import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setkeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
