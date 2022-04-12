import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Jobs {
  static GET_JOBS = "getJobs";

  static get(options) {
    switch (options.type) {
      case Jobs.GET_JOBS:
        return Jobs.getJobs(options);

      default:
        return Jobs.getJobs(options);
    }
  }

  static getJobs(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/job/get-all-jobs`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
}
export default Jobs;
