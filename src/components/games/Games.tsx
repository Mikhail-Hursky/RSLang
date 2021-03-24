import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Card  } from 'antd';

import "./Games.scss";

const contentStyle:any = {
 height: '80%',
 lineHeight: '160px',
 textAlign: 'center',
 background: 'rgb(99,180,255)',
};

export default function Games() {
  /*
return(
 <div className="games">
  <Carousel autoplay>
    <div className="game_card">
      <div style={contentStyle}>
       <h2>Аудиовызов</h2>
       <img src="./img/loudspeaker.png" width="150px" alt=""/>
       <Button>Начать!</Button>
      </div>
    </div>
    <div className="game_card">
    <div style={contentStyle}>
       <h2>Спринт</h2>
       <img src="./img/sprint.png" width="150px" alt=""/>
       <Button>Начать!</Button>
      </div>
    </div>
    <div className="game_card">
    <div style={contentStyle}>
       <h2>Саванна</h2>
       <img src="./img/savannah.png" width="150px" alt=""/>
       <Button>Начать!</Button>
      </div>
    </div>
    <div className="game_card">
    <div style={contentStyle}>
       <h2>Наша игра</h2>
       <img src="./img/game.png" width="150px" alt=""/>
       <Button>Начать!</Button>
      </div>
    </div>
  </Carousel>
 </div>
) */
return (
  <div className="games">
<Card title="Аудиовызов" bordered={true} >
<img src="./img/loudspeaker.png" alt=""/>
       <Button type="primary">Начать!</Button>
    </Card>
    <Card title="Спринт" bordered={true} >
       <img src="./img/sprint.png" alt=""/>
       <Button type="primary">Начать!</Button>
    </Card>
    <Card title="Саванна" bordered={true} >
       <img src="./img/savannah.png" alt=""/>
       <Button type="primary">Начать!</Button>
    </Card>
    <Card title="Наша игра" bordered={true} >
       <img src="./img/game.png" alt=""/>
       <Button type="primary">Начать!</Button>
    </Card>
  </div>
)
}