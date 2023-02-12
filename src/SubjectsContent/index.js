import sample1 from "./DiditolForensics/Topic1";
import subjectNames from "../Utils/subjectVariables";
import dstTopics from "./DistrubutedSystems";
/*
data model : 
[subjectNames.digitolForensics] is a subject name
{ topic1: sample1, topic2: sample2 } in this object keys are data of dropdown for 
  particular subject
*/

const topics = {
  [subjectNames.distrubutedSystems]: dstTopics,

  // [subjectNames.penatrationTesting]: { topic1: sample1 },

  // [subjectNames.digitolForensics]: { topic1: sample1 },

  // [subjectNames.reactJs]: { topic1: sample1 },

  // [subjectNames.nodeJs]: { topics: nodejsTopics },

  // [subjectNames.reactNative]: { topic1: sample1 },

  // [subjectNames.dataStructures]: { topic1: sample1 },
};

export default topics;
