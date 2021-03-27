import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card  } from 'antd';

import "./Category.scss";

export default function Category(props: any) {
  // let section = props.section;
  const [response, setResponse] = useState<any | null>(null);

  useEffect(() => {
      window.scrollTo(0, 0);
      // axios.post(URL + "country", { country: country }).then(function (response) {
      //
      //   setResponse(response.data);
      // });
    }, [setResponse]);



  return(
    <div className="wrap-words-item">
      <h2>page empty</h2>
      <p>categories - 0</p>
    </div>
  )
}
