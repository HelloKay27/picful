import axios from "axios";

// action types
const GOT_LOGS = "GOT_LOGS";
const ADDED_LOG = "ADDED_LOG";

// action creators
const gotLogs = (logs) => ({
  type: GOT_LOGS,
  logs,
});
const addedLog = (log) => ({
  type: ADDED_LOG,
  log,
});

// thunk creators
export const getLogs = () => {
  return async (dispatch) => {
    try {
      const { data: logs } = await axios.get("//localhost:4000/api/logs");
      dispatch(gotLogs(logs));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addLog = (fd) => {
  return async (dispatch) => {
    try {
      const { data: log } = await axios.post(
        "//localhost:4000/api/capture",
        fd
      );
      dispatch(addedLog(log));
    } catch (error) {
      console.error(error);
    }
  };
};

const logs = [];

const reducer = (state = logs, action) => {
  switch (action.type) {
    case GOT_LOGS:
      return action.logs;
    case ADDED_LOG:
      return [...state, action.log];
    default:
      return state;
  }
};

export default reducer;
