import { ProjectDataActionTypes } from "./projectData.types";

const INITIAL_STATE = {
    currentProjectData: []
}

const projectDataReducer = (state = INITIAL_STATE, action) => { //This here -> state = INITIAL_STATE <- will make state return currentProjectData: [] if state is undefined, but return the value it has if it is defined
    switch (action.type) {
        case ProjectDataActionTypes.CURRENT_PROJECT_DATA:
            return {
                ...state,//This is the *NOT* the WHOLE STATE being spread out, 
                currentProjectData: action.payload //here you're just updating the specific property currentProjectData within that whole state, so no, the spread operator up there doesn't actually take care of the currentProjectData maintaining the previous updates and adding the new updates, to display more than one trip card at a time
            }
        default:
            return state; //currentProjectData: []
    }
}

export default projectDataReducer;