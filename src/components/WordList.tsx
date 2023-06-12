import WordListItem from "./WordListItem";
import { useContext, useEffect, useState } from "react";
import { WordsContext } from "../context/context";
import { typeWords, ContextProps } from "./type";
import "../styles/WordList.css";

type propsType = {
  choose: boolean;
  sort: string;
};

function WordList({ choose, sort }: propsType) {
  const [sortingWords, setSortingWords] = useState<typeWords[]>([]);
  const { words, fetchWords } = useContext(WordsContext) as ContextProps;

  const turkishSorting = (sort: string): void => {
    console.log("Sıralama : " + sort);
    if (sort === "Default") {
      console.log("Default");
      setSortingWords(words.sort((a, b) => a.turkish.localeCompare(b.turkish)));
    } else if (sort === "A-Z") {
      console.log("A-Z");
      setSortingWords(
        sortingWords.sort((a, b) => a.turkish.localeCompare(b.turkish))
      );
    } else if (sort === "Z-A") {
      console.log("Z-A");
      setSortingWords(
        sortingWords.sort((a, b) => b.turkish.localeCompare(a.turkish))
      );
    } else if (sort === "Son-İlk Eklenen ↓") {
      setSortingWords(words.reverse());
    } else if (sort === "İlk-Son Eklenen ↑") {
      setSortingWords(words);
    }
  };

  const englishSorting = (sort: string) => {
    console.log("geldi");
    if (sort === "Default") {
      setSortingWords(words.sort((a, b) => a.english.localeCompare(b.english)));
    } else if (sort === "A-Z") {
      setSortingWords(
        sortingWords.sort((a, b) => a.english.localeCompare(b.english))
      );
    } else if (sort === "Z-A") {
      setSortingWords(
        sortingWords.sort((a, b) => b.english.localeCompare(a.english))
      );
    } else if (sort === "Last-First ↓") {
      setSortingWords(words.reverse());
    } else if (sort === "First-Last ↑") {
      setSortingWords(words);
    }
  };

  useEffect(() => {
    fetchWords();
    if (choose) turkishSorting(sort);
    else englishSorting(sort);
    console.log(sortingWords[0]);
  }, [sort, choose]);

  return (
    <>
      <div className="wordMenu">
        <div className="wordList">
          {sortingWords.map((word, index) => {
            return (
              <WordListItem
                choose={choose}
                key={index}
                turkish={word.turkish}
                english={word.english}
              ></WordListItem>
            );
          })}
        </div>
        {choose ? (
          <p className="wordInfo">
            <strong>Toplam Kelime Sayınız: {sortingWords.length}</strong>
          </p>
        ) : (
          <p className="wordInfo">
            <strong>Total Word Count: {sortingWords.length}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default WordList;
