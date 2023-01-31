import sample1 from "./DiditolForensics/Topic1";
import sample2 from "./DiditolForensics/Topic2";
import subjectNames from "../../Utils/subjectVariables";

/*
data model : 
[subjectNames.digitolForensics] is a subject name
{ topic1: sample1, topic2: sample2 } in this object keys are data of dropdown for 
  particular subject
*/

const topics = {
  [subjectNames.digitolForensics]: { topic1: sample1, topic2: sample2 },
};

export default topics;
