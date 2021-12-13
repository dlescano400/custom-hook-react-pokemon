import "./styles.css";
import React, { useState } from "react";

const Sprites = (props) => {
  const { sprites, shiny } = props;
  const { front_default, front_shiny } = sprites;
  return (
    <div>
      <img src={`${shiny ? front_shiny : front_default}`} alt="" />
    </div>
  );
};

const PokemonCard = (props) => {
  const [shiny, setShiny] = useState(false);
  const { data } = props;
  const { name, id, types, sprites, stats } = data;
  const backgroundType = types[0].type.name;
  const calculateId = (id) => {
    let ceros = "";
    if (id - 100 >= 0) {
      ceros = "";
    } else if (id - 10 >= 0) {
      ceros = "0";
    } else {
      ceros = "00";
    }
    return `#${ceros}${id}`;
  };

  return (
    <div className="item">
      <div className="header">
        <div className={`sprinte ${backgroundType}`}>
          <Sprites sprites={sprites} shiny={shiny} />
        </div>
        <div className="title">
          <h4>{name}</h4>
          <span>{calculateId(id)}</span>
          <div className="types">
            {types.map((t, i) => {
              return (
                <span
                  className={`chips ${t.type.name}`}
                  ket={i}
                >{`${t.type.name}`}</span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="stats">
        <h4>Base Stats</h4>
        <ul>
          {stats.map((stat, j) => {
            const porcent = `${Math.trunc((stat.base_stat / 255) * 100)}px`;
            return (
              <li key={j}>
                <span>{`${stat.stat.name}`}</span>
                <div className="data_state">
                  {`${stat.base_stat}`}
                  <div className="base_state">
                    <div
                      className="value_state"
                      style={{
                        width: `${porcent}`
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            setShiny(false);
          }}
        >
          Normal
        </button>
        <button
          onClick={() => {
            setShiny(true);
          }}
        >
          Shiny
        </button>
      </div>
    </div>
  );
};

export default PokemonCard