import React from "react";

interface Props {
  heading: string;
}

const Button = () => {
  return <button>JOIN</button>;
};

const JoinCard = (props: Props) => {
  return (
    <div>
      <div>{props.heading}</div>
      <Button />
    </div>
  );
};

export default JoinCard;
