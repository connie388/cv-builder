import React, { useState, useEffect } from "react";
import EducationList from "./EducationList";
import "../styles/App.css";

function Education({ edRecord, setEdRecord }) {
  // Store the index of the updated record after user clicked the edit button
  const [updateIndex, setUpdateIndex] = useState(-1);

  // Store form information
  const [formData, setFormData] = useState({
    schoolName: "",
    title: "",
    year: "",
  });

  function sortByYear(record) {
    record.sort(function (a, b) {
      var c = parseInt(a.year);
      var d = parseInt(b.year);
      return d - c;
    });
  }

  useEffect(() => {
    if (updateIndex !== -1) {
      setFormData(edRecord[updateIndex]);
    }
  }, [updateIndex, setFormData, edRecord]);

  function onSubmit(e) {
    e.preventDefault();
    const formJson = { ...formData };
    if (updateIndex !== -1) {
      // update record
      let updateRecord = [...edRecord];
      updateRecord[updateIndex] = formJson;
      sortByYear(updateRecord);

      setUpdateIndex(-1);
      setEdRecord(updateRecord);
    } else {
      // new record
      //https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np
      let newRecord = [...edRecord, formJson];
      sortByYear(newRecord);
      setEdRecord(newRecord); // <- edRecord not updated but will trigger useEffect
    }

    // clear input fields
    setFormData({
      schoolName: "",
      title: "",
      year: "",
    });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h1 className="text-center">Education</h1>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-4  col-sm-12 col-xs-12">
            <div className="form-floating mx-2">
              <input
                id="schoolName"
                type="text"
                className="form-control fs-10 mb-2"
                required
                onChange={(e) => handleChange(e)}
                value={formData.schoolName || ""}
              />
              <label htmlFor="schoolName mb-1">School Name</label>
            </div>
          </div>
          <div className="col-md-4  col-sm-12 col-xs-12">
            <div className="form-floating mx-2">
              <input
                type="text"
                id="title"
                required
                className="form-control fs-10 mb-2"
                onChange={(e) => handleChange(e)}
                value={formData.title || ""}
              />
              <label htmlFor="title mb-1">Title</label>
            </div>
          </div>
          <div className="col-md-2  col-sm-12 col-xs-12">
            <div className="form-floating mx-2">
              <input
                type="year"
                id="year"
                min="2000"
                className="form-control fs-10 mb-2"
                required
                onChange={(e) => handleChange(e)}
                value={formData.year || ""}
              />
              <label htmlFor="year mb-1">Year</label>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <button type="submit" className="col-md-4 btn btn-primary mb-2">
            Save
          </button>
        </div>
      </form>
      <EducationList
        edRecord={edRecord}
        setEdRecord={setEdRecord}
        setUpdateIndex={setUpdateIndex} // index of record to update
      />
    </div>
  );
}

export default Education;
