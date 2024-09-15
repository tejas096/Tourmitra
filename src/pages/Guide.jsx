import React from "react";
import Card from "../components/Card";

const Guide = () => {
  return (
    <>
      <Card
        image={"https://example.com/guide.jpg"}
        name={"John Doe"}
        rating={4.8}
        amount={150}
        locations={["Paris", "London", "Rome"]}
      ></Card>
    </>
  );
};

export default Guide;
