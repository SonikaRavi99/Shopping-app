import React, { useState } from "react";
import "./Main.css";
import OpenDialog from "./OpenDialog";

function Main() {
  const [searchString, setSearchString] = useState();
  return (
    <>
      <div className="main-container">
        <img
          className="image"
          src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?w=740&t=st=1705389956~exp=1705390556~hmac=6d6a73308337e94708584a4c17305bebfa832139155b99a4c40ce09ecce909ec"
        ></img>
      </div>
      <div className="searchcontainer">
        <div className="textField">
          <input
            onChange={(e)=>setSearchString(e.target.value)}
            className="inputbox"
            placeholder="Search"
          ></input>
        </div>
        
      </div>
      {searchString && <OpenDialog open={searchString} />}
    </>
  );
}

export default Main;
