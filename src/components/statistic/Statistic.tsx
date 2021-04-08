import { Collapse, Divider, List, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Api } from '../../api/Api';
import { State } from '../../redux/reducer/rootReducer';
import "./Statistic.scss";

function Spoiler({games, data, percent, streak}: any) {
 
 const { Panel } = Collapse;




 const text = ['Изучено слов - ',
 'Процент правильных ответов - ',
 'Серия правильных ответов - '];

 return (
  <Collapse accordion>
    {
    games.map((game:string, index:number) => (
      <Panel header={`${game} game`} key={game}>
      <p><List.Item>
       {text[0] + data[index][game]}
     </List.Item></p>
     <p><List.Item>
       {text[1] + percent[game]["percent"] + '%'}
     </List.Item></p>
     <p><List.Item>
       {text[2] + streak[game]}
     </List.Item></p>
    </Panel>
    ))}
  </Collapse>
 )
}

export default function Statistic() {
  const { message, token, userId } = useSelector((state: State) => state.user);
  const games = ["Audiocall", "Savannah", "Sprint", "Our"];
  const [data, setData] = useState<any>({0: {"Savannah": 0} ,1:{"Audiocall": 0},2:{"Sprint": 0},3:{"Our": 0}}); 
  const [words, setWords] = useState<any>({
    "Sprint": 0,
    "Savannah": 0,
    "Our": 0,
    "Audiocall": 0
})
 const [percent, setPercent] = useState<any>({"Savannah": {"percent": 0},"Audiocall": {"percent": 0},"Sprint": {"percent": 0},"Our": {"percent": 0}}); 
 const [streak, setStreak] = useState<any>({
  Sprint: 0,
  Savannah: 0,
  Our: 0,
  Audiocall: 0,
});


  useEffect(()=> {
    Api.getUserStat(userId, token).then((response)=> {
      console.log(response);
      if (response.status === 200) {
        console.log(response);
        const obj = {};
        const objGames = games.map((e:any) => {
          let game = response.data.optional.words[e];
          let count = 0;
          for (let key in game) {
             count++;
          }
          return {[e]: count};
        })
        setWords(response.data.optional.words);
        setStreak(response.data.optional.streak);
        setData({...objGames});
        setPercent(response.data.optional.percent);
      }
    });
   }, []);

 let sumPercent = 0;
 let count = 0;
 for (let key in percent) { 
   if (percent[key].percent === 0) continue
   count++;
  sumPercent += +percent[key].percent;
  sumPercent = sumPercent/count;
 }

 let newWords:any = [];
 console.log('words ', words)
 for (let key in words) { 
  if (words[key] === 0) continue
    const wordGame = [];
    for (let i in words[key]) {wordGame.push(words[key][i]);}
    console.log(wordGame)
  const idNewWords = newWords ? newWords.map((e:any) => e["id"]) : [];
  const newWordsFiltred = wordGame.filter((e:any) => !idNewWords.includes(e["id"]));
  newWords = [...newWords, ...newWordsFiltred];
 }

 console.log(newWords);

 const dataText = [
  `Слов изучено сегодня - ${newWords.length}`,
  `Процент правильных ответов сегодня - ${sumPercent}%`,
];

console.log()

 return (
  <Content className="site-layout" style={{ padding: '0 50px', marginTop: 48 }}>
  <div className="site-layout-background" style={{ padding: 24, minHeight: 550 }}>
  <Divider orientation="left">Статистика</Divider>
    <Spoiler games={games} data={data} percent={percent} streak={streak}/>
    <List
      // header={<div>Сегодня</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={dataText}
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

