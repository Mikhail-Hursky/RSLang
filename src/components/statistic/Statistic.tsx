import { Collapse, Divider, List, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Api } from '../../api/Api';
import { State } from '../../redux/reducer/rootReducer';
import "./Statistic.scss";

function Spoiler() {
 const [data, setData] = useState<any>([]); 
 const { Panel } = Collapse;
 const { message, token, userId } = useSelector((state: State) => state.user);
 const games = ["Audiocall", "Savannah", "Sprint", "Our"];

 useEffect(()=> {
  Api.getUserStat(userId, token).then((response)=> {
    console.log(response)
    const obj = {};
   const objGames = games.map((e:any) => {
     let game = response.data.optional.words[e];
     let count = 0;
     for (let key in game) {
        count++;
     }
     return {[e]: count};
   })
   console.log(objGames);
   setData(objGames);
  });
  console.log(data);
 }, []);

 const text = ['Изучено слов - ',
 'Процент правильных ответов - ',
 'Серия правильных ответов - '];

 

 return (
  <Collapse accordion>
    {
    games.map((game, index) => (
      <Panel header={`${game} game`} key={game}>
      <p>{text.map((e,i)=> (
       <List.Item key={'1' + i}>
       {data.length ? e + data[index][game] : e + '0'}
     </List.Item>
      ))}</p>
    </Panel>
    ))
    /* <Panel header="Audiocall game" key="1">
      <p>{text.map((e,i)=> (
       <List.Item key={'1' + i}>
       {e}
     </List.Item>
      ))}</p>
    </Panel>
    <Panel header="Savannah game" key="2">
     <p>{text.map((e,i)=> (
       <List.Item key={'2' + i}>
       {e}
     </List.Item>
      ))}</p>
    </Panel>
    <Panel header="Sprint game" key="3">
     <p>{text.map((e,i)=> (
       <List.Item key={'3' + i}>
       {e}
     </List.Item>
      ))}</p>
    </Panel>
    <Panel header="Our game" key="4">
     <p>{text.map((e,i)=> (
       <List.Item key={'4' + i}>
       {e}
     </List.Item>
      ))}</p>
    </Panel> */}
  </Collapse>
 )
}

export default function Statistic() {

 const data = [
  'Слов изучено сегодня - 00',
  'Процент правильных ответов сегодня - 74%',
];

 return (
  <Content className="site-layout" style={{ padding: '0 50px', marginTop: 48 }}>
  <div className="site-layout-background" style={{ padding: 24, minHeight: 550 }}>
  <Divider orientation="left">Статистика</Divider>
    <Spoiler />
    <List
      // header={<div>Сегодня</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
  </div>
</Content>
 )
}

