import React from "react";

import PromoDescription from "../promo-description/Promo-description";
import PromoGames from "../promo-games/Promo-games";
import PromoVideo from "../promo-video/Promo-video";
import LinkTop from "../link-top/Link-top";

import "./Promo.scss";

export default function Promo() {

  return(
   <div className="wrap-promo">
      <PromoDescription />
      <PromoGames />
      <PromoVideo />
      <LinkTop />
   </div>
  )
}
