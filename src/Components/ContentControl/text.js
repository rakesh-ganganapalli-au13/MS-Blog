import React from "react";
import CustomResponsiveFont from "../../Library/Typography";
import { OrderList, UnorderList } from "./list";
const linebreak = "br";
const bold = "bold";
const text = "text";
const list = "list";
const orderList = "order";
const unOrderList = "unorder";

function CustomText({ content }) {
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
              componet="span"
            />
          );
        } else if (i[0] == text) {
          return (
            <CustomResponsiveFont
              variant="body1"
              content={<>{i[1]}&nbsp;</>}
              componet="span"
            />
          );
        } else if (i[0] == list) {
          if (i[1]["type"] == orderList)
            return (
              <div style={i[1]?.style}>
                <OrderList
                  list={i[1]["content"]}
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
        }
      })}
    </>
  );
}

export default CustomText;
