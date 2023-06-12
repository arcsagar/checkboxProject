import { useState } from "react";
import "./App.css";
import MultiSelect from "./MultiSelect/MultiSelect";

function App() {
  const [readOnly, setReadOnly] = useState(true);
  const allOption = [
    {
      chValue: "test1",
      chChecked: true,
      readOnly,
    },
    {
      chValue: "test2",
      chChecked: true,
      readOnly,
    },
    {
      chValue: "test1",
      chChecked: false,
      readOnly,
    },
  ];
  return (
    <div>
      <div>
      <input
        type="checkbox"
        id="readonlyMode"
        checked={readOnly}
        onChange={(e) => {
          setReadOnly(e.target.checked)
        }}
      />
      <label for="readonlyMode"> Read Only</label>
      </div>
      <MultiSelect allOption={allOption} />
    </div>
  );
}

export default App;
