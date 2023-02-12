import React, { useEffect, useState } from "react";
import topics from "../../SubjectsContent/index";
import CustomResponsiveFont from "../../Library/Typography";
import CustomImage from "./image";
import { OrderList, UnorderList } from "./list";
import { useLocation } from "react-router-dom";
const bold = "bold";
const text = "text";
const list = "list";
const orderList = "order";
const unOrderList = "unorder";
const linebreak = "br";
const heading = "heading";
const component = "component";
const textTypes = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
  "caption",
  "overline",
];
const image = "image";

function ContentArrengement({ sub, topic }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(topics[sub][topic]);
    console.log(topics[sub][topic]);
  }, [sub, topic]);

  return (
    <>
      {content.map((i, idx) => {
        if (i[0] == linebreak) {
          return <br />;
        } else if (i[0] == bold) {
          return (
            <CustomResponsiveFont
              variant="body1"
              content={<b>{i[1]}&nbsp;</b>}
              componet={i[2]?.span && "span"}
              style={i[2]}
            />
          );
        } else if (i[0] == list) {
          if (i[1]["type"] == orderList)
            return (
              <div style={i[1]?.style}>
                <OrderList
                  list={i[1]["content"]}
                  position={i[1]?.style?.textAlign}
                  style={i[1]?.style}
                  bold={i[1]?.bold}
                />
              </div>
            );
          return (
            <UnorderList
              list={i[1]["content"]}
              style={i[1]?.style}
              bold={i[1]?.bold}
            />
          );
        } else if (i[0] == component) {
          return i[1];
        } else if (i[0] == image) {
          return (
            <div style={{ textAlign: i[1]?.style?.textAlign }}>
              <CustomImage src={i[1].src} alt={i[1].alt} style={i[1]?.style} />
            </div>
          );
        } else {
          let a = i[0];
          function findCherries(va) {
            return va === a;
          }
          let varient = textTypes.find(findCherries);
          return (
            <CustomResponsiveFont
              variant={varient}
              align={i[2]?.textAlign}
              content={<>{i[1]}&nbsp;</>}
              componet={i[2]?.span && "span"}
              style={i[2]}
            />
          );
        }
      })}
    </>
    // <>
    //   {content.map((i, idx) => {
    //     return i.type == "title" ? (
    //       <div key={idx} style={{ ...i?.style, margin: "0.5% 0%" }}>
    //         <CustomResponsiveFont
    //           variant={i.variant}
    //           content={i.content}
    //           align={i?.position}
    //         />
    //       </div>
    //     ) : i.type == "text" ? (
    //       <div key={idx} style={i?.style}>
    //         <CustomResponsiveFont
    //           variant={i.variant}
    //           content={i.content}
    //           align={i.position}
    //         />
    //       </div>
    //     ) : i.type == "image" ? (
    // <div key={idx} style={{ textAlign: i?.style?.textAlign }}>
    //   <CustomImage
    //     src={i.source}
    //     alt={i.alternativeInformation}
    //     style={i?.style}
    //   />
    // </div>
    //     ) : i.type == "list" && i.variant == "order" ? (
    //       <div key={idx} style={i?.style}>
    //         <OrderList
    //           list={i.content}
    //           position={i?.position}
    //           width={i?.width}
    //         />
    //       </div>
    //     ) : i.type == "list" && i.variant == "unOrder" ? (
    //       <div key={idx} style={i?.style}>
    //         <UnorderList
    //           list={i.content}
    //           position={i?.position}
    //           width={i?.width}
    //         />
    //       </div>
    //     ) : (
    //       ""
    //     );
    //   })}
    // </>
  );
}

export default ContentArrengement;
