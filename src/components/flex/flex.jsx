import React from "react";

function Flex(props) {
  const styleFlex = {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    felxWrap: "wrap",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default Flex;
