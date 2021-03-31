import React from "react";


export default function SavannahLifes({data}: any) {

return (
 <div className="savannah_lifes">
  {
   new Array(data).fill('../../img/nolife.png').map((e:string, i:number) => {
     return (<img key={i} src={e} alt="nolife"/>)
   })}
   {
   new Array(5-data).fill('../../img/life.png').map((e:string, i:number) => {
    return (<img key={i} src={e} alt="life"/>)
  })
  }
 </div>
)
}