import React from "react";
import CustomResponsiveFontSizes from "../../Library/Typography";

function NotFound() {
  return (
    <div>
      <CustomResponsiveFontSizes
        variant={"h4"}
        content="404 Not Found"
        align="center"
      />
    </div>
  );
}

export default NotFound;
