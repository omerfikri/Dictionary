import axios from "axios";
import { typeWords, ContextProps } from "../components/type";
import React, { useState, createContext, FC, useEffect } from "react";

export const WordsContext = createContext<ContextProps | null>(null);

export const WordsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [words, setWords] = useState<typeWords[]>([]);

  const addWord = async (turkish: string, english: string): Promise<void> => {
    const turkishControl = words.filter(function (word) {
      return word.turkish === turkish;
    });

    const englishControl = words.filter(function (word) {
      return word.english === english;
    });

    if (turkishControl.length !== 0) {
      console.log("Hata");
      alert("Bu Türkçe Kelimeyi Daha Önce Eklemişsiniz!!!!!!!!");
    } else if (englishControl.length !== 0) {
      console.log("Hata");
      alert("Bu İngilizce Kelimeyi Daha Önce Eklemişsiniz!!!!!!!!");
    } else {
      const response = await axios.post("http://localhost:3001/words", {
        turkish,
        english,
      });

      const cretatedTask = [...words, response.data];
      setWords(cretatedTask);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    const response = await axios.get("http://localhost:3001/words");
    setWords(response.data);
  };

  return (
    <WordsContext.Provider value={{ addWord, words, fetchWords }}>
      {children}
    </WordsContext.Provider>
  );
};
