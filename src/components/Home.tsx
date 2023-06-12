import React from "react";
import "../styles/Home.css";
import { useState, useEffect, useContext } from "react";
import { ContextProps, typeWords } from "./type";
import { WordsContext } from "../context/context";

function Home() {
  const { addWord } = useContext(WordsContext) as ContextProps;

  const [turkish, setTurkish] = useState<string>("");
  const [english, setEnglish] = useState<string>("");

  const handleTurkish = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTurkish(event.target.value);
  };

  const handleEnglish = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnglish(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (turkish !== "" && english !== "") {
      //event.preventDefault();
      addWord(turkish, english);
    }
  };

  return (
    <div className="home">
      <form className="addWord">
        <h2 className="header">Kelime Ekle</h2>
        <div className="words">
          <div className="turkish">
            <h3 className="head">Türkçe</h3>
            <label className="label">Kelime : </label>
            <input
              className="input"
              type="text"
              onChange={handleTurkish}
              value={turkish}
              required
            />
          </div>
          <div className="english">
            <h3 className="head">English</h3>
            <label className="label">Word : </label>
            <input
              className="input"
              type="text"
              onChange={handleEnglish}
              value={english}
              required
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="add">
          Add <strong>/</strong> Ekle
        </button>
      </form>
    </div>
  );
}

export default Home;
