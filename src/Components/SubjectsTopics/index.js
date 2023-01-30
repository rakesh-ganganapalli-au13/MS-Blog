import React, { useEffect, useState } from "react";
import AutoComplete from "../../Library/AutoComplete";
import { topics } from "../../Data/topics";
import "./style.scss";
import { changeSubName, changeTopicName } from "./redux/compnent.slice";
import { useDispatch } from "react-redux";
// const options =

function Routes() {
  const dispatch = useDispatch();
  const [subjects, setSubjects] = useState([]);
  const [selctSubject, setSelectSubject] = useState("");
  const [subTopics, setSubTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    const sub = Object.keys(topics);
    const sub1 = sub.map((i) => ({ label: i, value: i }));
    setSubjects(sub1);
  }, []);

  useEffect(() => {
    if (selctSubject) {
      const subTopics = topics[selctSubject];
      setSelectedTopic("");
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
    if (e?.value) {
      setSelectSubject(e.value);
      dispatch(changeSubName({ subject: e.value }));
    } else {
      setSelectedTopic("");
      setSelectSubject("");
      dispatch(changeSubName({ subject: "" }));
      dispatch(changeTopicName({ topic: "" }));
    }
  };

  const changeTopicFunc = (e) => {
    setSelectedTopic(e?.value);
    dispatch(changeTopicName({ topic: e.value }));
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="sub-select-parent"
      >
        <div className="sub-select-child" key="sub-select-child">
          <AutoComplete
            options={subjects}
            label="Subject"
            onChange={changeFunc}
            value={selctSubject}
          />
        </div>
        <div className="topic-select-child" key="topic-select-child">
          <AutoComplete
            options={subTopics}
            label="Topic"
            onChange={changeTopicFunc}
            value={selectedTopic}
          />
        </div>
      </div>
    </>
  );
}

export default Routes;
