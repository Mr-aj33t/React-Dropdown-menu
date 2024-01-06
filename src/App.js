import "./styles.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}
