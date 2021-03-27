import React from "react";
import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import WordsItem from "../words-item/Words-item";

import "./Words.scss";

export default function Words() {

  const categories = CATEGORIES_WORDS;

  return(
   <div className="words">
    <h3>Изучайте слова по своему выбору - в каждой категории доступен определенный набор слов:</h3>
    <WordsItem categories={categories} />
   </div>
  )
}
