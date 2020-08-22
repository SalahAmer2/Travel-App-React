import { ProjectDataActionTypes } from "./projectData.types";

export const currentProjectData = projectData => ({
    type: ProjectDataActionTypes.CURRENT_PROJECT_DATA,
    payload: projectData
})
