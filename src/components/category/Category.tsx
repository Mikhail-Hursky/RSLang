import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";
import axios from "axios";

import { Link } from "react-router-dom";
import { Card  } from 'antd';
import { Pagination } from 'antd';

import "./Category.scss";

export default function Category(props: any) {

  const group = useSelector((state: State) => state.setting.group);
  let [response, setResponse] = useState<any | null>(null);

  const baseUrl = 'https://afternoon-falls-25894.herokuapp.com/words';
  let pageToken = '0';
  const groupToken = group;
  let url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;

  useEffect(() => {
      axios.get(url).then(function (response) {
        console.log(response.data);
        setResponse(response.data);
      });
    }, [setResponse]);


  if(response) {
    response = response.map((item: any, i: any) => {
        return (
          <Card
            key={i.toString()}
            className={`item-${i} item`}
          >
            <p>{item.word}</p>
            <p>{item.wordTranslate}</p>
            <p>{item.transcription}</p>
            <div className="button">
              <button>прослушать</button>
            </div>
            <p>{item.textExample}</p>
            <p>{item.textExampleTranslate}</p>
          </Card>
        );
      });
  }


    function onChange(e: any) {
      window.scrollTo(0, 0);
      console.log(e);
      pageToken = e;
      url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;
      axios.get(url).then(function (response) {
        console.log(response.data);
        setResponse(response.data);
      });
      return e;
    }

    return(
      <div className="list-word">
        <h2>category {group + 1}</h2>
        <div className="wrap-list-word">
          {response}
        </div>
        <Pagination
          onChange={onChange}
          total={580}
          defaultPageSize={20}
          defaultCurrent={1}
          showSizeChanger={false}
          showQuickJumper
        />
      </div>
    )
}
