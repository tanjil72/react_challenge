import React, { useState } from "react";
import ListItems from "./List";
import CreateDialogueComp from "./CreateDialogueComp";
import { DebounceInput } from "react-debounce-input";

export default function HomePage({ setAuth }) {
  const [open, setOpen] = React.useState(false);
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="main">
        <div className="search">
          <DebounceInput
            style={{ width: "70%", height: 40 }}
            className="searchbar"
            debounceTimeout={500}
            placeholder="Search"
            onChange={inputHandler}
          />

          <button
            style={{ marginLeft: 10 }}
            title="Create"
            onClick={handleClickOpen}
          >
            Create
          </button>
        </div>

        <ListItems input={inputText} />
      </div>
      <CreateDialogueComp open={open} handleClose={handleClose} />
    </div>
  );
}
