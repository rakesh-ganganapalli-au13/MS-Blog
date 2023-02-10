import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { subjectSelector } from "../../Components/SubjectsTopics/redux/compnent.slice";
import ContentManagement from "../../Components/ContentControl";
import Loader from "../../Library/Loader";
import { homepageImage } from "../../Utils/images";
import "./style.scss";

function Home() {
  const subjectTopicSelector = useSelector(subjectSelector);
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [home, setHome] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (subjectTopicSelector.subject && subjectTopicSelector.topic) {
      setSubject(subjectTopicSelector.subject);
      setTopic(subjectTopicSelector.topic);
      setLoading(false);
    } else {
      setSubject("");
      setTopic("");
      setLoading(false);
    }
  }, [subjectTopicSelector]);

  return (
    <>
      {loading && <Loader />}
      {subject && topic ? (
        <ContentManagement sub={subject} topic={topic} />
      ) : (
        <div>
          <img src={homepageImage} alt="homepage" className="home-image" />
        </div>
      )}
    </>
  );
}

export default Home;
