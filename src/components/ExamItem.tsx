import "../styles/Exam.css";
import { typeWords, typeAnswers } from "./type";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

type propsType = {
  words: typeWords[];
  first: typeWords[];
};

function ExamItem({ words, first }: propsType) {
  const [answers, setAnswers] = useState<typeAnswers[]>([]);
  //const [answer, setAnswer] = useState<string>("");
  // const [value, setValue] = useState<typeAnswers[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.name;
    first.map((word) => {
      if (word.id === value) {
        const deger = {
          value,
        };
        setAnswers({ ...answers });
      }
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.currentTarget.name === "115" && "çömelmek");

    const value = event.currentTarget.name;
    first.map((word) => {
      if (word.id === value) {
        const cevap = event.currentTarget.value.toString();
        const deger = {
          id: value,
          answer: cevap,
        };
      }
    });
  };

  useEffect(() => {
    first.map((word) => {
      console.log(word);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="questions">
          <div className="question">
            <label>{first[0].turkish}</label>
          </div>
          <div className="answer">
            <input onChange={handleChange} name={first[0].id} type="text" />
          </div>
          <AiOutlineCheck style={{ color: "green" }} />
          <AiOutlineClose style={{ color: "red" }} />
        </div>
        <div className="questions">
          <div className="question">
            <label>{first[1].turkish}</label>
          </div>
          <div className="answer">
            <input onChange={handleChange} type="text" />
          </div>
          <AiOutlineCheck style={{ color: "green" }} />
          <AiOutlineClose style={{ color: "red" }} />
        </div>
        <div className="questions">
          <div className="question">
            <label>{first[2].turkish}</label>
          </div>
          <div className="answer">
            <input onChange={handleChange} type="text" />
          </div>
          <AiOutlineCheck style={{ color: "green" }} />
          <AiOutlineClose style={{ color: "red" }} />
        </div>
        <div className="questions">
          <div className="question">
            <label>{first[3].turkish}</label>
          </div>
          <div className="answer">
            <input onChange={handleChange} type="text" />
          </div>
          <AiOutlineCheck style={{ color: "green" }} />
          <AiOutlineClose style={{ color: "red" }} />
        </div>
        <div className="questions">
          <div className="question">
            <label>{first[4].turkish}</label>
          </div>
          <div className="answer">
            <input onChange={handleChange} type="text" />
          </div>
          <AiOutlineCheck style={{ color: "green" }} />
          <AiOutlineClose style={{ color: "red" }} />
        </div>
      </div>

      <button type="submit">Kaydet</button>
    </form>
  );
}

export default ExamItem;
