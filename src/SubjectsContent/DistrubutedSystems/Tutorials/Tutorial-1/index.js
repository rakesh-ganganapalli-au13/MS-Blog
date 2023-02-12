import { distributedSystems } from "../../../../Utils/images";
import {
  OrderList,
  UnorderList,
} from "../../../../Components/ContentControl/list";
import { textVarient, primaryColor } from "../../../../Utils/staticData";
import CustomGrid from "../../../../Components/ContentGrid";
import Img from "../../../../Components/ContentControl/image";

const { bold, body1, h5, image, list, unorder, order, subtitle1, linebreak } =
  textVarient;

const introduction = [
  [
    textVarient.h5,
    "What is a Distributed System?",
    { textAlign: "center", margin: "1%" },
  ],

  [
    textVarient.body1,
    `Distributed System is a collection of autonomous computer systems that
  are physically separated but are connected by a centralized computer
  network that is equipped with`,
    { span: true },
  ],

  [textVarient.bold, "distributed system software", { span: true }],

  [
    textVarient.image,
    {
      src: distributedSystems["tutorial-1"].image1,
      alt: "sf",
      style: {
        textAlign: "center",
        width: "50%",
        height: "50%",
        marginTop: "2%",
      },
    },
  ],

  [bold, "Example:", { span: true }],

  [
    body1,
    `Facebook , it has multiple systems, each system has
  it's own responsibilites like`,
    { span: true },
  ],

  [
    list,
    {
      type: unorder,
      content: [
        "maintaining user details",
        "handling friend requests",
        "chating",
        "streaming, etc..",
      ],
      style: {
        textAlign: "center",
      },
    },
  ],

  [bold, "Distributed System Software :", { span: true }],
  [
    body1,
    "Software which enables computers to coordinate their activities and to share the resources such as Hardware, Software, Data, etc.",
    { span: true },
  ],
  [linebreak],
  [bold, "Database : ", { span: true, display: "div" }],
  [
    body1,
    `It is used to store the processed data that are
    processed by each Node/System of the Distributed systems that are
    connected to the Centralized network`,
    { span: true },
  ],
];

export default introduction;
