import React, { useEffect, useState } from "react";
import AutoComplete from "../Library/AutoComplete";
import { topics } from "../Data/topics";
import "./style.css";
// const options =

function Routes() {
  const [subjects, setSubjects] = useState([]);
  const [selctSubject, setSelectSubject] = useState("");
  const [subTopics, setSubTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    const sub = Object.keys(topics);
    const sub1 = sub.map((i) => ({ label: i, value: i }));
    setSubjects(sub1);
  }, []);

  useEffect(() => {
    if (selctSubject.length) {
      const subTopics = topics[selctSubject];
      if (subTopics) {
        const topicsObj = subTopics.map((i) => ({ label: i, value: i }));
        setSubTopics(topicsObj);
      } else {
        setSubTopics([]);
      }
    } else {
      setSubTopics([]);
    }
  }, [selctSubject]);

  const changeFunc = (e) => {
    setSelectSubject(e.target.value);
  };

  const changeTopicFunc = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <>
      <div
        style={{ display: "flex", marginTop: "10px", justifyContent: "center" }}
        className="sub-select-parent"
      >
        <div className="sub-select-child">
          <AutoComplete
            options={subjects}
            label="Subject"
            onChange={changeFunc}
          />
        </div>
        <div className="topic-select-child">
          <AutoComplete
            options={subTopics}
            label="Topic"
            onChange={changeTopicFunc}
          />
        </div>
      </div>
    </>
  );
}

export default Routes;
