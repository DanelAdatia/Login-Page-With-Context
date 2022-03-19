import React from "react";
import { UserConsumer } from "./ContextFile";

const UponLogin = () => {
  return (
    <div>
      <UserConsumer>{(value) => <span>UserName is {value}</span>}</UserConsumer>
    </div>
  );
};

export default UponLogin;
