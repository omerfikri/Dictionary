import React from "react";
import "../styles/Choose.css";
import { useState, useEffect, useContext } from "react";
import { WordsContext } from "../context/context";
import { ContextProps } from "./type";
import Loading from "./Loading";
import WordList from "./WordList";

function Choose() {
  const [choose, setChoose] = useState(false);
  const [first, setFirst] = useState(false);
  const [sort, setSort] = useState<string>("Default");

  const { fetchWords } = useContext(WordsContext) as ContextProps;

  useEffect(() => {
    fetchWords();
  }, [choose]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <div className="choose">
      <button
        className="chooseBtn"
        onClick={() => {
          setChoose(true);
          setFirst(true);
        }}
      >
        Türkçe
      </button>
      <button
        className="chooseBtn"
        onClick={() => {
          setChoose(false);
          setFirst(true);
        }}
      >
        English
      </button>

      {first ? (
        <>
          <p className="wordTitle">Kelimelerimiz</p>
          {choose ? (
            <div className="dropdown">
              <select
                onChange={handleChange}
                className="options"
                placeholder="Sıralama"
              >
                <option className="option">A-Z</option>
                <option className="option">Z-A</option>
                <option className="option">Son-İlk Eklenen ↓</option>
                <option className="option">İlk-Son Eklenen ↑</option>
              </select>
            </div>
          ) : (
            <div className="dropdown">
              <select
                onChange={handleChange}
                className="options"
                placeholder="Sıralama"
              >
                <option className="option">A-Z</option>
                <option className="option">Z-A</option>
                <option className="option">Last-First ↓</option>
                <option className="option">First-Last ↑</option>
              </select>
            </div>
          )}

          <WordList choose={choose} sort={sort} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Choose;
