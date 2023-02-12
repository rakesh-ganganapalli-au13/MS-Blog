import React, { useEffect, useState } from "react";
import AutoComplete from "../../Library/AutoComplete";
import topiccs from "../../SubjectsContent";
import "./style.scss";
import { changeSubName, changeTopicName } from "./redux/compnent.slice";
import { useDispatch } from "react-redux";
import { CustomSearchIcon } from "../../Library/Icons";
import { useNavigate } from "react-router-dom";
import { endPoints } from "../../Utils/routeEndPoints";
import Toast from "../../Library/Toast/toast";
import { errorMessage } from "../../Utils/errorMessages";

function Routes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [selctSubject, setSelectSubject] = useState("");
  const [subTopics, setSubTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  //subject dropdown data arrengement
  useEffect(() => {
    const sub = Object.keys(topiccs);
    const sub1 = sub.map((i) => ({ label: i, value: i }));
    setSubjects(sub1);
  }, []);

  //topics arrengement based on
  useEffect(() => {
    if (selctSubject) {
      setSelectedTopic("");
      const subTopics = Object.keys(topiccs[selctSubject]);
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
      // dispatch(changeSubName({ subject: e.value }));
    } else {
      setSelectedTopic("");
      setSelectSubject("");
      dispatch(changeSubName({ subject: "" }));
      dispatch(changeTopicName({ topic: "" }));
    }
  };

  const changeTopicFunc = (e) => {
    if (e?.value) {
      setSelectedTopic(e.value);
      // dispatch(changeTopicName({ topic: e?.value }));
    } else {
      setSelectedTopic("");
      // dispatch(changeTopicName({ topic: "" }));
    }
  };

  const handleSearchClick = () => {
    if (!selctSubject || !selectedTopic) {
      Toast.warning(errorMessage["Please Enter Subject or Topic"]);
    } else {
      dispatch(changeSubName({ subject: selctSubject }));
      dispatch(changeTopicName({ topic: selectedTopic }));
      // navigate(endPoints.content, {
      //   state: { sub: selctSubject, topic: selectedTopic },
      // });
    }
  };

  // const handleKeyDown = (e) => {
  //   if (e.key == "Enter") {
  //     if (!selctSubject || !selectedTopic) {
  //       Toast.error(errorMessage["Please Enter Subject or Topic"]);
  //     } else {
  //       dispatch(changeSubName({ subject: selctSubject }));
  //       dispatch(changeTopicName({ topic: selectedTopic }));
  //       navigate(endPoints.home);
  //     }
  //   }
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="sub-select-parent"
        // onKeyDown={handleKeyDown}
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
        <div className="header-search-icon">
          <CustomSearchIcon onClick={handleSearchClick} />
        </div>
      </div>
    </>
  );
}

export default Routes;
