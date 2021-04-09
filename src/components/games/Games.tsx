import React, { useEffect, useState } from "react";
import { Button, Card, Row, Select } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import speaker from "../../assets/img/speaker.png";
import sprint from "../../assets/img/sprint.png";
import savannah from "../../assets/img/savannah.png";
import card from "../../assets/img/card.png";
import { Api } from "../../api/Api";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";

const cardStyle = {
  margin: "15px",
  width: "300px",
};

const metaStyle = {
  display: "flex",
  justifyContent: "center",
};
function randomInteger(min:number, max:number) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
 }

function setRandomIndexWords(min:number, max:number) {
  const wordsNums:Array<number> = [];
  for (let i=0; i<=23; i++) {
   const random = Math.abs(randomInteger(min,max));
   if (!wordsNums.includes(random)) {
    wordsNums.push(random);
   } else {
    i--;
   }
  }
  return wordsNums;
 }

export default function Games(props:any) {
  const [group, setGroup] = useState(0);
  const [words, setWords] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const { userWords } = useSelector((state: State) => state.user);
  const { Option } = Select;

  function handleChange(value:any) {
    setGroup(value);
  }

  useEffect(()=> {
    if (!props.location.words) {
      Api.getGroupsArr(group).then((response) => {
        const groupWords = response.data.filter((res: any) => {
          if (!userWords.filter((e:any) => e.difficulty === "DELETED").map((e:any)=> e['wordId']).includes(res.id)) return res;
        });
        let arrayWords:any = setRandomIndexWords(0, groupWords.length-1);
        setWords(arrayWords.map((e:number)=> groupWords[e]));
        setAllWords(groupWords);
      })
    } else {
      const groupWords = props.location.words;
      console.log(groupWords);
      let arrayWords:any = setRandomIndexWords(0, groupWords.length-1);
      setWords(arrayWords.map((e:number)=> groupWords[e]));
      setAllWords(groupWords);
      console.log(words);
    }
  }, []);

  return (
    <>
    {!props.location.words ? <Select defaultValue="0" style={{ width: 400, margin: '2rem 4.5rem'}} onChange={handleChange}>
      <Option value="0">Слова 1 раздела</Option>
      <Option value="1">Слова 2 раздела</Option>
      <Option value="2">Слова 3 раздела</Option>
      <Option value="3">Слова 4 раздела</Option>
      <Option value="4">Слова 5 раздела</Option>
      <Option value="5">Слова 6 раздела</Option>
    </Select> : ''}
      <Row justify="space-around" align="middle">
        <Link to={{
            pathname: "/games/audiocall",
            //@ts-ignore
            words: words.slice(4)
        }}>
          <Card
            hoverable={true}
            style={cardStyle}
            bordered={true}
            title="Аудиовызов"
            actions={[<Button type="primary">Играть!</Button>]}
          >
            <Meta style={metaStyle} avatar={<img src={speaker} alt="speaker"/>} />
          </Card>
        </Link>
        <Link to={{
            pathname: "/games/sprint",
            //@ts-ignore
            words: allWords
        }}>
        <Card
          hoverable={true}
          style={cardStyle}
          bordered={true}
          title="Спринт"
          actions={[<Button type="primary">Играть!</Button>]}
        >
          <Meta style={metaStyle} avatar={<img src={sprint} alt="sprint" />} />
        </Card>
        </Link>
        <Link to={{
            pathname: "/games/savannah",
            //@ts-ignore
            words: words
        }}>
        <Card
          hoverable={true}
          style={cardStyle}
          bordered={true}
          title="Саванна"
          actions={[<Button type="primary">Играть!</Button>]}
        >
          <Meta style={metaStyle} avatar={<img src={savannah}  alt="savannah"/>} />
        </Card>
        </Link>
        <Link to={{
            pathname: "/games/ourgame",
            //@ts-ignore
            words: words
        }}>
        <Card
          hoverable={true}
          style={cardStyle}
          bordered={true}
          title="Наша игра"
          actions={[<Button type="primary">Играть!</Button>]}
        >
          <Meta style={metaStyle} avatar={<img src={card} alt="card" />} />
        </Card>
        </Link>
      </Row>
    </>
  );
}
