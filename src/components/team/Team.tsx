import React from "react";

import { GithubFilled } from "@ant-design/icons";

import teamlead from "../../assets/img/Mikhail2.jpg";
import developer2 from "../../assets/img/Pavel2.jpg";
import developer1 from "../../assets/img/Marina2.jpg";

import { DATA_TEAM } from "../../mock-data/dataTeam";

import "./Team.scss";

export default function Team() {
  const avatar = [teamlead, developer1, developer2];

  let listTeam: any = DATA_TEAM;

  listTeam = listTeam.map((item: any, i: number) => {
    return (
      <div key={i.toString()} className={`item-${item.id} item`}>
        <div className="avatar">
          <img src={avatar[i]} alt="" />
        </div>
        <p className="name">
          <span>
            {item.name}
            <a href={item.link} target="_blank" title="gitHub">
              <GithubFilled />
            </a>
          </span>
        </p>
        <p className="position">{item.position}</p>
        <p className="description">{item.description}</p>
        <p className="title-description-work">
          <span>Вклад в проект:</span>
        </p>
        <p className="description-work">{item.descriptionWork}</p>
      </div>
    );
  });

  return (
    <div className="team">
      <h2>Команда:</h2>
      <div className="list-team">{listTeam}</div>
    </div>
  );
}
