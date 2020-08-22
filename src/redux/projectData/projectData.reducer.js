import { ProjectDataActionTypes } from "./projectData.types";

const INITIAL_STATE = {
    currentProjectData: {}
}

const projectDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProjectDataActionTypes.CURRENT_PROJECT_DATA:
            return {
                ...state,
                currentProjectData: action.payload
            }
        default:
            return state;
    }
}

export default projectDataReducer;