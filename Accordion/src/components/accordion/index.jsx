import React from "react";
import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMutiple = [...multiple];
    const findIndexOfCurrentId = copyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyMutiple.push(getCurrentId);
    else copyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMutiple);
  }
  console.log(selected, multiple);
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h2>{dataItem.question}</h2>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>No Data Found!</div>
          )}
        </div>
      </div>
    </>
  );
}
