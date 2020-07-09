const INITIAL_STATE = {
    projectDataState: {}
}

const projectDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case popUpActionTypes.SET_PROJECT_DATA:
            return {
                ...state,
                projectDataState: action.payload
            }
        default:
            return state;
    }
}

export default projectDataReducer;