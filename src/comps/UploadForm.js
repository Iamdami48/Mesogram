import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "../index.css";

function UploadForm() {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"];

  // Input Func

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      alert("File Type is not allowed please upload a PNG or JPEG Image");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
