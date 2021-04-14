import React, {useEffect, useState} from "react";

export default function SavannahWord(props:any) {
 const [style, setStyle] = useState({top:'4rem'});
 
 useEffect(()=> {
   setTimeout(()=> setStyle({top:'32rem'}), 50);
   let timer = setTimeout(() => {props.timer()}, 5000);
   return () => clearTimeout(timer);
 }, []);

 

return (//@ts-ignore
 <h2 className="savannah_word" style={style} >{props.word}</h2>
)
}