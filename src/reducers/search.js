export const CHANGE_USERDATA = "CHANGE_USERDATA";
export const CHANGE_REPODATA = "CHANGE_REPODATA";

const initialState = {
  userData: [],
  repoData: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERDATA:
      return { ...state, userData: action.payload };
    case CHANGE_REPODATA:
      return { ...state, repoData: action.payload };
    default:
      return state;
  }
};
