import { React, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
  }, 3000);
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="60"
      visible={visible}
    />
  );
};

export { Loader };
