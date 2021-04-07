import { Collapse, Divider, List, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Api } from '../../api/Api';
import { State } from '../../redux/reducer/rootReducer';
import "./Statistic.scss";

function Spoiler() {
 const [data, setData] = useState<any>({}); 
 const { Panel } = Collapse;
 const { message, token, userId } = useSelector((state: State) => state.user);

 useEffect(()=> {
  Api.getUserStat(userId, token).then((response)=> {
   console.log(response.data.optional.words["Our"].length);
   setData(response.data.optional.words);
  });
  console.log(data);
 }, []);

 const text = ['Изучено слов - ',
 'Процент правильных ответов - ',
 'Серия правильных ответов - '];

 const games = ["Audiocall", "Savannah", "Sprint", "Our"];

 return (
  <Collapse accordion>
    {
    games.map(game => (
      <Panel header={`${game} game`} key={game}>
      <p>{text.map((e,i)=> (
       <List.Item key={'1' + i}>
       {data[game] ? e + data[game].length : e + '0'}
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

