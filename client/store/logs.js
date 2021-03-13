import axios from "axios";

// action types
const GOT_LOGS = "GOT_LOGS";

// action creators
const gotLogs = (logs) => ({
  type: GOT_LOGS,
  logs,
});

// thunk creators
export const getLogs = () => {
  return async (dispatch) => {
    try {
      const { data: logs } = await axios.get("/api/logs/:userId");
      dispatch(gotLogs(logs));
    } catch (error) {
      console.error(error);
    }
  };
};

const logs: [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_LOGS:
      return {
        ...state,
        all: action.logs,
      };
    default:
      return state;
  }
}
