// import React, { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Route, Switch } from "react-router-dom";

import { checkedCategory } from "../../redux/action/categoryAction";

import { Link } from "react-router-dom";
import { Card  } from 'antd';

// import { Category } from "../../interfaces/Category";

import "./Words-item.scss";

export default function WordsItem(props: any) {
  const dispatch = useDispatch();

  let wordsItems = props.categories;


  // const [categories, setCategories] = useState<Category[]>(props.categories);
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

    const number = 2;
    // const url = `https://afternoon-falls-25894.herokuapp.com/words?page=0&group=${number}`;
    const url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('data - ', data);
    console.log(index);
  }

  wordsItems = wordsItems.map((item: any, i: any) => {

    const divStyle = {
      backgroundColor: `${item.color}`
    };

      return (
        <Card
          key={i.toString()}
          className={`item-${item.id} item`}
          style={divStyle}
          data-id={item.id}
          // onClick={getQuote}
        >
          <Link to="/categories">
            <div
              onClick={() => {
                dispatch(checkedCategory(item.id));
              }}
            >
              <p>{item.title}</p>
            </div>
          </Link>
        </Card>
      );
    });


  return(
    <div className="wrap-words-item">{wordsItems}</div>
  )
}
