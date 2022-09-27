import React from "react";
import { useState } from "react";

const Record = (props) => (
  <tr key={props.index}>
    <td>{props.record.companyName}</td>
    <td>{props.record.title}</td>
    <td>{props.record.jobDescription}</td>
    <td>{props.record.mainTasks}</td>
    <td>{props.record.fromDate}</td>
    <td>{props.record.toDate}</td>
    <td>
      <button
        className="btn btn-link"
        onClick={() => {
          props.updateRecord(props.index);
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.index);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

// expRecord is an array of json objects
function ExperienceList({ expRecord, setExpRecord, setUpdateIndex }) {
  const [data, setData] = useState(false); // change state value to trigger reload of the list

  // This method will delete a record
  function deleteRecord(idx) {
    let newRecords = expRecord;
    newRecords.splice(idx, 1);
    setUpdateIndex(-1);
    setExpRecord(newRecords);
    setData(!data);
  }

  // This method will update a record
  function updateRecord(idx) {
    setUpdateIndex(idx);
  }

  // This method will map out the records on the table
  function recordList() {
    return expRecord.map((data, index) => {
      return (
        <Record
          record={data}
          deleteRecord={(index) => deleteRecord(index)}
          updateRecord={(index) => updateRecord(index)}
          index={index}
          key={index}
        />
      );
    });
  }
  return (
    <div>
      <h3>Experience List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Job Description</th>
            <th>Main Tasks</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}

export default ExperienceList;
