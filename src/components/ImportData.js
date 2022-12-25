import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/ImportData.css";

function ImportData({ setGeneralInfo, setEdRecord, setExpRecord }) {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fetchImportData = () => {
    let read = new FileReader();

    read.readAsBinaryString(selectedFile);

    read.onloadend = function () {
      let myJson = JSON.parse(read.result);

      setGeneralInfo(myJson.general);
      setEdRecord(myJson.education);
      setExpRecord(myJson.experience);

      toast.success("User information imported.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        closeOnClick: true,
        toastId: "customId",
      });
    };
  };

  return (
    <div class="import-container">
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={fetchImportData}>Submit</button>
      </div>
    </div>
  );
}

export default ImportData;
