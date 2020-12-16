import { ProjectDataActionTypes } from "./projectData.types";

export const currentProjectData_Update = projectData => ({
    type: ProjectDataActionTypes.CURRENT_PROJECT_DATA_UPDATE,
    payload: projectData// So far this payload is an array
})

export const currentProjectData_Delete = tripID => ({
    type: ProjectDataActionTypes.CURRENT_PROJECT_DATA_DELETE,
    payload: tripID// So far this payload is an array
})