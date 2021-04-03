import React from "react";
import { useDispatch } from "react-redux";
import { counterMinus, counterPlus } from "../../redux/action/settingAction";
import './Home.scss'

export default function Home() {
 const dispatch = useDispatch();
 return (
   <div className='wrap-home'>
     <div className="col-left">

     </div>
     <div className="col-right">
       <div className="description">
         <p>
           Приложение для изучения иностранных слов, включающее электронный
           учебник с базой слов для изучения, игры для их повторения и
           возможности отслеживания индивидуального прогресса
         </p>
       </div>
       <div className="button">
         <button>узнать о приложении</button>
       </div>
     </div>
   </div>
 );
}

// <h2>Home</h2>
// <button onClick={() => dispatch(counterPlus())}>+++</button>
// <button onClick={() => dispatch(counterMinus())}>---</button>
