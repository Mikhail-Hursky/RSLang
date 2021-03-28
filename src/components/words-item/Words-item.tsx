import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";
import { checkedCategory } from "../../redux/action/settingAction";

import { Link } from "react-router-dom";
import { Card  } from 'antd';
import "./Words-item.scss";

export default function WordsItem(props: any) {

  const dispatch = useDispatch();
  let wordsItems = props.categories;


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
