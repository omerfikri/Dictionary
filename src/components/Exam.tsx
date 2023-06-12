import "../styles/Exam.css";
import { useEffect, useState, useContext } from "react";
import ExamItem from "./ExamItem";
import { WordsContext } from "../context/context";
import { ContextProps, typeWords } from "./type";

function Exam() {
  const { words } = useContext(WordsContext) as ContextProps;
  const [questions, setQuestions] = useState<number[]>([]);
  const [value, setValue] = useState(true);
  const [first, setFirst] = useState<typeWords[]>([]);

  useEffect(() => {
    //console.log(first);
  }, [value, questions, first]);

  const exam5 = () => {
    for (let i = 0; i < 5; i++) {
      const numbers = Math.floor(Math.random() * words.length);
      //console.log(words[numbers]);
      setFirst((first) => [...first, words[numbers]]);
      setValue(false);
      setQuestions((questions) => [...questions, numbers]);
    }
  };

  const exam10 = (): void => {
    for (let i = 0; i < 10; i++) {
      const numbers = Math.floor(Math.random() * words.length);
      setFirst((first) => [...first, words[numbers]]);
      setValue(false);
      setQuestions((questions) => [...questions, numbers]);
    }
  };
  return (
    <div className="examDiv">
      <h1>Sınav</h1>

      {value ? (
        <div className="tercih">
          <p>5 kelimelik veya 10 kelimelik sınavı seçin</p>
          <button className="btn5-10" onClick={exam5}>
            5
          </button>
          <button className="btn5-10" onClick={exam10}>
            10
          </button>
        </div>
      ) : (
        <div className="exam">
          {<ExamItem words={words} first={first} />}

          <button
            onClick={() => {
              setQuestions([]);
              setValue(true);
              setFirst([]);
            }}
          >
            Kontrol Et
          </button>
        </div>
      )}
    </div>
  );
}

export default Exam;
