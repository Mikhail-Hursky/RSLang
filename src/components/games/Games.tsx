import React from "react";
import { Link } from "react-router-dom";

import "./Games.scss";

export default function Games() {
return(
 <div className="games">
  <div className="games_1">
   <h2>Саванна</h2>
   <span className="material-icons icon" title="Игры">sports_esports</span>
   <button>Играть!</button>
  </div>
  <div className="games_2">
  <h2>Аудиовызов</h2>
  <span className="material-icons icon" title="Игры">sports_esports</span>
  <button>Играть!</button>
  </div>
  <div className="games_3">
  <h2>Спринт</h2>
  <span className="material-icons icon" title="Игры">sports_esports</span>
  <button>Играть!</button>
  </div>
  <div className="games_4">
  <h2>Своя игра</h2>
  <span className="material-icons icon" title="Игры">sports_esports</span>
  <button>Играть!</button>
  </div>
 </div>
)
}