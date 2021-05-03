import React, { useState } from "react";

export default function Dictionary() {
let [keyWord, setkeyWord] = useState("");

  function Search(event) {
      event.preventDefault();
alert(`Searching for ${keyWord}`);

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
