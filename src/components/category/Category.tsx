import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";

import { Link } from "react-router-dom";
import { Card  } from 'antd';
import { Pagination } from 'antd';

import "./Category.scss";

export default function Category(props: any) {

  const group = useSelector((state: State) => state.setting.group);
  const [response, setResponse] = useState<any | null>(null);

  useEffect(() => {
    setResponse(getData());
  }, [setResponse]);

    async function getData() {
      const baseUrl = 'https://afternoon-falls-25894.herokuapp.com/words';
      const pageToken = '0';
      const groupToken = group;
      const wordList = `${baseUrl}?page=${pageToken}&group=${groupToken}`;
      const res = await fetch(wordList);
      const data = await res.json();
      console.log(data);
      return data;
    }

    function onChange() {

    }

    return(
      <div className="list-word">
        <h2>categories {group + 1}</h2>
        <Pagination onChange={onChange} total={600} />
      </div>
    )
}
