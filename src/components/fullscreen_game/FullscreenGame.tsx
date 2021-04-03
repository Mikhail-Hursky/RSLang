import react, {useState} from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import "./FullscreenGame.scss";
import {enterFullscreen, exitFullscreen} from "../../fullscreen";

export default function FullscreenGame() {
 const [screen, setScreen] = useState(false);
 return !screen ? (<FullscreenOutlined id="fullscreenBtn" className="fullscreengame_icon" onClick={() => {
    enterFullscreen('game_fullscreen');
    setScreen(!screen);
   }
   } />) : (<FullscreenExitOutlined id="fullscreenBtn" className="fullscreengame_icon" onClick={() => {
    exitFullscreen('game_fullscreen');
    setScreen(!screen);
   }
   }/>);
  
   
   
 
}