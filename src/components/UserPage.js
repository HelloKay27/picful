import React, { useEffect } from "react";
import { getLogs } from "../store/logs";
import { connect } from "react-redux";

const UserPage = ({ logs, getLogs }) => {
  useEffect(() => getLogs(), [getLogs]);
  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className='logs'>
      {sortedLogs.map((log, idx) => {
        const date = new Date(log.date);
        return (
          <div
            key={log.id}
            data-aos={idx % 2 ? "fade-up-right" : "fade-up-left"}
            data-aos-duration='1800'
          >
            <p>{`${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`}</p>
            <img alt={log.description} src={log.imageUrl} height={400} />
            <p>
              <small>{log.description}</small>
            </p>
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
