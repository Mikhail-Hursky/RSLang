import React, { useEffect } from "react";
import { Modal, Progress, message, Button, Space } from 'antd';
import { soundWord } from "../../sound/sound";
import './StatisticModal.scss';
import { exitFullscreen } from "../../fullscreen";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import { Api } from "../../api/Api";

function StatisticModal({words, setStart}:any) {
const { token, userId } = useSelector((state: State) => state.user);
const userMessage = useSelector((state: State) => state.user.message);

 const handleOk = (e:any) => {
  setStart(false);
};

useEffect(()=> {
  exitFullscreen('game_fullscreen');
  Api.setUserStat(token, userId, words[0].length);
}, []);

const successMessage = () => {
  message.success('Слово успешно удалено!');
};

function onClick(event:any, i:number, words:any) {
  Api.setUserWord(token, userId, words[0]["id"], "DELETED");
  event.target.remove();
  successMessage();
}
 
return (
  <> 
    <Modal
     className="statistic_modal"
      title="Статистика игры"
      visible={true}
      onOk={handleOk}
      okButtonProps={{ disabled: false }}
      cancelButtonProps={{ disabled: true, style:{display: 'none'} }}
    >
      <Progress
      type="circle"
      strokeColor={'red'}
      percent={+((words[0].length+words[1].length)/words[2] * 100).toFixed(2)}
      success={{ percent: +(words[0].length/words[2] * 100).toFixed(2) }}
      style={{display:'flex', justifyContent: 'center', marginBottom: '15px'}}
      format={(percent, successPercent) => `${successPercent}%`}
    />
      <p className="statisticModal_words_title" style={{color:'#ff0707'}}>Я не знаю {words[1].length}</p>
     {words[1].map((e:any, i:any)=> {
      return (
      <div className="statistic_modal_word" key={i} >
       <img onClick={() => soundWord(`https://lang-en.herokuapp.com/${e['audio']}`)} src="../../img/sound.svg" alt="Озвучить"/>
        <p className="statisticModal_word_text">{`${e['word']} - ${e['wordTranslate']}`}</p>
        {userMessage === "Authenticated" ? <DeleteOutlined className="delete_word" onClick={(event:any) => onClick(event, i, words[1])} /> : <></>}
      </div> )
     }) }
      <p className="statisticModal_words_title" style={{color:'#02da3a'}}>Я знаю {words[0].length}</p>
      {words[0].map((e:any, i:any)=> {
       return (
      <div className="statistic_modal_word" key={i}>
       <img onClick={() => soundWord(`https://lang-en.herokuapp.com/${e['audio']}`)} src="../../img/sound.svg" alt="Озвучить" />
      <p className="statisticModal_word_text"> {`${e['word']} - ${e['wordTranslate']}`} </p>
      {userMessage === "Authenticated" ? <DeleteOutlined className="delete_word" onClick={(event:any) => onClick(event, i, words[0])} /> : <></>}
      </div> )
     }) }
    </Modal>
  </>
);
}

export default StatisticModal;