import React, {useEffect, useState} from "react";

export default function SprintWord(props:any) {
 
 
 useEffect(()=> {
   
 }, []);

 

return (
 <div className="sprint_word_contain">
 <h2 className="sprint_word"  >{props.word[0]}</h2>
 <p dangerouslySetInnerHTML={{__html: props.word[1]}}></p>
 </div>
)
}