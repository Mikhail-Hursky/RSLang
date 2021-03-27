import React from "react";
import { Card  } from 'antd';
import "./Words-item.scss";

export default function WordsItem(props: any) {
  let categories = props.categories;

  async function getQuote(e: any) {

    const baseUrl = 'https://afternoon-falls-25894.herokuapp.com/words';
    const pageToken = '0';
    // const groupToken = '0';
    // const wordList = `${baseUrl}?page=${pageToken}&group=${groupToken}`;

    //---
    let target = e.target;
    while(!target.classList.contains('item')) {
      target = target.parentElement;
    }
    const index = target.getAttribute('data-id');
    const groupToken = index;
    //---
    
    // const url = `https://afternoon-falls-25894.herokuapp.com/words?page=0&group=${number}`;
    const url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('data - ', data);
    console.log(index);
  }

  let wordsItems = categories.map((item: any, i: any) => {

    const divStyle = {
      backgroundColor: `${item.color}`
    };

      return (
        <Card
          key={i.toString()}
          className={`item-${item.id} item`}
          style={divStyle}
          data-id={item.id}
          onClick={getQuote}
        >
          <p>{item.title}</p>
        </Card>
      );
    });


  return(
    <div className="wrap-words-item">{wordsItems}</div>
  )
}
