import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Projects {
  static GET_PROJECTS = "getProjects";

  static get(options) {
    switch (options.type) {
      case Projects.GET_PROJECTS:
        return Projects.getProjects(options);

      default:
        return Projects.getProjects(options);
    }
  }

  static getProjects(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/get-project-post`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

}
export default Projects;
