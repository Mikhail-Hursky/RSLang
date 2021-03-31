import React from "react";
import { Modal, Progress } from 'antd';
import { soundWord } from "../../sound/sound";
import './StatisticModal.scss';

function StatisticModal({words, setStart}:any) {

 const handleOk = (e:any) => {
  setStart(false);
};
 
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
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={words[0].length * 10}
      style={{display:'flex', justifyContent: 'center', marginBottom: '15px'}}
    />
      <p className="statisticModal_words_title" style={{color:'#ff0707'}}>Я не знаю {words[1].length}</p>
     {words[1].map((e:any, i:any)=> {
      return (
      <div className="statistic_modal_word" key={i} >
       <img onClick={() => soundWord(`https://lang-en.herokuapp.com/${e['audio']}`)} src="../../img/sound.svg" alt="Озвучить"/>
        <p className="statisticModal_word_text">{`${e['word']} - ${e['wordTranslate']}`}</p>
      </div> )
     }) }
      <p className="statisticModal_words_title" style={{color:'#02da3a'}}>Я знаю {words[0].length}</p>
      {words[0].map((e:any, i:any)=> {
       return (
      <div className="statistic_modal_word" key={i}>
       <img onClick={() => soundWord(`https://lang-en.herokuapp.com/${e['audio']}`)} src="../../img/sound.svg" alt="Озвучить" />
      <p className="statisticModal_word_text"> {`${e['word']} - ${e['wordTranslate']}`} </p>
      </div> )
     }) }
    </Modal>
  </>
);
}

export default StatisticModal;