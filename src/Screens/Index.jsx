import React from "react";
import { useState } from "react";

function Index() {
  const [contact, setContact] = useState("anmol");

  function me() {
    setContact("priya");
    console.log(contact);
  }
  return (
    <div>
      <p>{contact}</p>
      <button onClick={me}>Click Me</button>
    </div>
  );
}

export default Index;
