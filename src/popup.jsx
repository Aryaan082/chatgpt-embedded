import React from "react";
import { render } from "react-dom";
import ToggleSwitch from "./ToggleSwitch";
import "./input.css";

function Popup() {
  return (
    <div className="popup">
      <h1 className="text-center flex flex-col items-center">Quick Settings</h1>
      <div className="flex items-center justify-between px-1">
        <p className="w-100">Embeds</p>
        <ToggleSwitch label="Notifications" />
      </div>
      <div className="flex items-center justify-between px-1">
        <p className="w-100">Max Response Height</p>
        <ToggleSwitch label="Subscribe" />
      </div>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
