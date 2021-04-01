import React from "react";
import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import WordsItem from "../words-item/Words-item";

import "./Words.scss";

export default function Words() {

  const categories = CATEGORIES_WORDS;

  return(
   <div className="words">
    <h3>В каждой категории доступен определенный набор слов - выберите <b>по уровню сложности</b>, чтобы продолжить</h3>
    <WordsItem categories={categories} />
   </div>
  )
}
