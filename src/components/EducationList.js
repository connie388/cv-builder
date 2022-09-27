import React from "react";
import { useState } from "react";

const Record = (props) => (
  <tr>
    <td>{props.record.schoolName}</td>
    <td>{props.record.title}</td>
    <td>{props.record.year}</td>
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
function EducationList({ edRecord, setEdRecord, setUpdateIndex }) {
  const [data, setData] = useState(false); // change state value to trigger reload of the list

  // This method will delete a record
  function deleteRecord(index) {
    let newRecords = edRecord;
    newRecords.splice(index, 1);
    setUpdateIndex(-1);
    setEdRecord(newRecords);
    setData(!data);
  }

  // This method will update a record
  function updateRecord(idx) {
    setUpdateIndex(idx);
  }

  // This method will map out the records on the table
  function recordList() {
    return edRecord.map((data, index) => {
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
      <h3>Education</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>School</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}

export default EducationList;
