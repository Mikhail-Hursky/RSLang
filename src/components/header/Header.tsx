import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="wrap-header">
        <h1>RS Lang</h1>
        <div className="header-buttons">
          <div>
            <button>войти</button>
          </div>
          <div>
            <button>регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
}
