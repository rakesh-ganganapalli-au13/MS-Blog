import { distributedSystems } from "../../../../../Utils/images";
import { primaryColor } from "../../../../../Utils/staticData";
import { UnorderList } from "../../../../../Components/ContentControl/list";

const topic1 = [
  {
    type: "title",
    style: {
      marginBottom: "1%",
      // textAlign: "le",
    },
    variant: "h5",
    content: "What is a Distributed System?",
    marginBottom: "10px",
  },

  {
    type: "text",
    variant: "body1",
    content: (
      <>
        Distributed System is a collection of autonomous computer systems that
        are physically separated but are connected by a centralized computer
        network that is equipped with "<b>distributed system software</b>"
      </>
    ),
  },

  {
    type: "image",
    style: {
      textAlign: "center",
      width: "50%",
      height: "50%",
      marginTop: "2%",
    },
    source: distributedSystems["tutorial-1"].image1,
  },

  {
    type: "text",
    variant: "body1",
    content: (
      <>
        <b>Example</b> : Facebook , it has multiple systems, each system has
        it's own responsibilites like
        <UnorderList
          list={[
            "maintaining user details",
            "handling friend requests",
            "chating",
            "streaming, etc..",
          ]}
          position="center"
          width="360"
        />
      </>
    ),
    style: {
      textAlign: "center",
    },
  },

  {
    type: "title",
    style: {
      marginBottom: "1%",
    },
    variant: "h5",
    content: "What is a Distributed System Software?",
    marginBottom: "10px",
  },

  {
    type: "text",
    variant: "body1",
    content:
      "Software which enables computers to coordinate their activities and to share the resources such as Hardware, Software, Data, etc.",
  },

  {
    type: "text",
    variant: "body1",
    content: (
      <>
        <b>Database</b>: It is used to store the processed data that are
        processed by each Node/System of the Distributed systems that are
        connected to the Centralized network
      </>
    ),
    style: {
      marginTop: "1%",
    },
  },
];

export default topic1;
