import React, { useEffect, useState } from "react";
import topics from "../../Pages/SubjectsContent/index";
import CustomResponsiveFont from "../../Library/Typography";
import CustomImage from "./image";
import { OrderList, UnorderList } from "./list";

function ContentArrengement({ sub, topic }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(topics[sub][topic]);
  }, [topic]);

  return (
    <>
      {content.map((i, idx) => {
        return i.type == "text" ? (
          <div key={idx} style={{ textAlign: i.position }}>
            <CustomResponsiveFont
              variant={i.variant}
              content={i.content}
              align={i.position}
            />
          </div>
        ) : i.type == "image" ? (
          <div key={idx} style={{ textAlign: i.position }}>
            <CustomImage
              src={i.source}
              alt={i.alternativeInformation}
              style={{ width: "30%", height: "30%" }}
            />
          </div>
        ) : i.type == "list" && i.variant == "order" ? (
          <div key={idx}>
            <OrderList list={i.content} position={i.position} />
          </div>
        ) : i.type == "list" && i.variant == "unOrder" ? (
          <div key={idx}>
            <UnorderList list={i.content} position={i.position} />
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
}

export default ContentArrengement;
