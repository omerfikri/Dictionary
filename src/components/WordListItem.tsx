import React from "react";
import "../styles/WordList.css";

type propsType = {
  choose: boolean;
  turkish: string;
  english: string;
};

function WordListItem({ choose, turkish, english }: propsType) {
  return (
    <>
      {choose ? (
        <div className="wordItem">
          <div className="word">
            <p className="kart on">{turkish}</p>
          </div>
          <div className="word">
            <p className="kart arka">{english}</p>
          </div>
        </div>
      ) : (
        <div className="wordItem">
          <div className="word">
            <p className="kart on">{english}</p>
          </div>
          <div className="word">
            <p className="kart arka">{turkish}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default WordListItem;
