import React, {useEffect, useState} from "react";

export default function SavannahWord(props:any) {
 const [style, setStyle] = useState({top:'4rem'});
 
 useEffect(()=> {
   setTimeout(()=> setStyle({top:'32rem'}), 50);
 }, []);

 

return (//@ts-ignore
 <h2 className="savannah_word" style={style} onClick={(event) => console.log(event)}>{props.word}</h2>
)
}