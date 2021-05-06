import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
let [keyWord, setkeyWord] = useState("");

function handleResponse(response){
console.log(response.data[0]);
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
        <input type="Search" onChange={handleOnchange}></input>
      </form>
    </div>
  );
}

