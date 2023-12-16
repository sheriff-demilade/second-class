import React from "react";
import { players } from "../player";
import Player from "./Player";

const PlayerList = () => {
  return (
    <div className="p-5 d-flex justify-content-between">
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;
