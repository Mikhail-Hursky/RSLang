import React from "react";

import "./Link-top.scss";

export default function LinkTop() {

  function linkTop() {
    // window.scrollTo(0, 0);
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  return(
   <div className="link-top" onClick={linkTop}>
    <span className="material-icons btn-link">expand_less</span>
   </div>
  )
}
