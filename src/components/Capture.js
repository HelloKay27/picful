import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { addLog } from "../store/logs";

const Capture = ({ addLog }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [logDate, setLogDate] = useState(new Date());
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData();
          fd.append("file", file);
          fd.append("date", logDate);
          fd.append("description", description);
          addLog(fd);
          setFile(null);
          setDescription("");
          setLogDate(new Date());
        }}
      >
        <label>
          <small>Date</small>
        </label>
        <br />
        <DatePicker selected={logDate} onChange={(date) => setLogDate(date)} />
        <br />
        <label>
          <small>Upload your photo</small>
        </label>
        <br />
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <label>
          <small>Description</small>
        </label>
        <br />
        <input
          name='description'
          type='text'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  addLog: (fd) => dispatch(addLog(fd)),
});

export default connect(null, mapDispatch)(Capture);
