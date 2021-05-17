import React from "react";

export default function Phonetics(props) {
return(
    <div className="Phonetics">
     🔊
<a className="Listen" href= {props.phonetic.audio} target="_blank "> Listen </a>

 <span className="Text">
{props.phonetic.text}
</span>
    </div>
)
    
}