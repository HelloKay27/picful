import React, { useEffect } from "react";
import { getLogs } from "../store/logs";
import { connect } from "react-redux";

const UserPage = ({ logs, getLogs }) => {
  useEffect(() => getLogs(), [getLogs]);
  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div>
      {sortedLogs.map((log) => {
        const date = new Date(log.date);
        return (
          <div key={log.id}>
            <p>{`${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`}</p>
            <img alt={log.description} src={log.imageUrl} height={100} />
            <p>{log.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapState = (state) => ({
  logs: state.logs,
});
const mapDispatch = (dispatch) => ({
  getLogs: () => dispatch(getLogs()),
});

export default connect(mapState, mapDispatch)(UserPage);
