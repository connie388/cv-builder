import React, { useState, useEffect } from "react";
import ExperienceList from "./ExperienceList";
import "../styles/App.css";

function Experience({ expRecord, setExpRecord }) {
  const [updateIndex, setUpdateIndex] = useState(-1);

  // Store form information
  const [formData, setFormData] = useState([
    {
      companyName: "",
      title: "",
      jobDescription: "",
      mainTasks: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  function sortByStartDate(record) {
    record.sort(function (a, b) {
      var c = new Date(a.fromDate);
      var d = new Date(b.fromDate);
      return d - c;
    });
  }

  useEffect(() => {
    if (updateIndex !== -1) {
      setFormData(expRecord[updateIndex]);
    }
  }, [updateIndex, setFormData, expRecord]);

  function onSubmit(e) {
    e.preventDefault();
    const formJson = { ...formData };
    if (updateIndex !== -1) {
      // update record
      let updateRecord = [...expRecord];
      updateRecord[updateIndex] = formJson;
      sortByStartDate(updateRecord);
      setUpdateIndex(-1);
      setExpRecord(updateRecord); // <- expRecord not updated but will trigger useEffect
    } else {
      // new record
      //https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np

      let newRecord = [...expRecord, formJson];
      sortByStartDate(newRecord);
      setExpRecord(newRecord); // <- expRecord not updated but will trigger useEffect
    }

    // clear input fields
    setFormData({
      companyName: "",
      title: "",
      jobDescription: "",
      mainTasks: "",
      fromDate: "",
      toDate: "",
    });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h1 className="text-center">Experience</h1>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-4  col-sm-12 col-xs-12">
            <div className="form-floating mx-2">
              <input
                id="companyName"
                type="text"
                className="form-control fs-10 mb-2"
                required
                onChange={(e) => handleChange(e)}
                value={formData.companyName || ""}
              />
              <label htmlFor="companyName mb-1">Company Name</label>
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
                type="month"
                id="fromDate"
                min="2000-03"
                className="form-control fs-10 mb-2"
                required
                onChange={(e) => handleChange(e)}
                value={formData.fromDate || ""}
              />
              <label htmlFor="fromDate mb-1">Start Date</label>
            </div>
          </div>
          <div className="col-md-2  col-sm-12 col-xs-12">
            <div className="form-floating mx-2">
              <input
                type="month"
                id="toDate"
                min="2000-03"
                className="form-control fs-10 mb-2"
                onChange={(e) => handleChange(e)}
                value={formData.toDate || ""}
              />
              <label htmlFor="toDate mb-1">End Date</label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-4  col-sm-12 col-xs-12">
            <div className="form-floating mx-2">
              <input
                type="text"
                id="jobDescription"
                required
                className="form-control fs-10 mb-2"
                onChange={(e) => handleChange(e)}
                value={formData.jobDescription || ""}
              />
              <label htmlFor="jobDescription mb-1">Job Description</label>
            </div>
          </div>
          <div className="col-md-8  col-sm-12 col-xs-12">
            <div className="mx-2">
              <textarea
                id="mainTasks"
                className="form-control fs-10 mb-2"
                rows="5"
                onChange={(e) => handleChange(e)}
                value={formData.mainTasks || ""}
                placeholder="List your main tasks"
              />
              <label htmlFor="mainTasks mb-1">Main Tasks</label>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <button type="submit" className="col-md-4 btn btn-primary mb-2">
            Save
          </button>
        </div>
      </form>
      <ExperienceList
        expRecord={expRecord}
        setExpRecord={setExpRecord}
        setUpdateIndex={setUpdateIndex} // index of record to update
      />
    </div>
  );
}

export default Experience;
