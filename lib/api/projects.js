import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Projects {
  static GET_PROJECTS = "getProjects";
  static GET_PROJECT_DETAIL = "getProjectDetail"

  static get(options) {
    switch (options.type) {
      case Projects.GET_PROJECTS:
        return Projects.getProjects(options);
        case Projects.GET_PROJECT_DETAIL:
        return Projects.getProjectDetail(options);

      default:
        return Projects.getProjects(options);
    }
  }

  static getProjects(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/project`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static getProjectDetail(options){
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/project/projectId`,
      body: options.body,
      token: options.token,
    };

    return request(config)
  }

}
export default Projects;