import React from "react";
import { Button, Card, Row } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import speaker from "../../assets/img/speaker.png";
import sprint from "../../assets/img/sprint.png";
import savannah from "../../assets/img/savannah.png";
import card from "../../assets/img/card.png";

const cardStyle = {
  margin: "15px",
  width: "300px",
};

const metaStyle = {
  display: "flex",
  justifyContent: "center",
};

export default function Games(props:any) {
  return (
    <>
      <Row justify="space-around" align="middle">
        <Link to={{
            pathname: "/games/audiocall",
            //@ts-ignore
            words: props.location.words
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
            words: props.location.words
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
            words: props.location.words
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
            words: props.location.words
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
