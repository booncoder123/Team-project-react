import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Jobs {
  static GET_JOBS = "getJobs";
  static CREATE_JOB = "createJob"
  static GET_JOB_BY_ID = "getJobById"
  static GET_JOB_DETAIL = "getJobDetail"

  static get(options) {
    switch (options.type) {
      case Jobs.GET_JOBS:
        return Jobs.getJobs(options);
      case Jobs.GET_JOB_DETAIL:
        return Jobs.getJobDetail(options);
      // case Jobs.CREATE_JOB:
      //   return Jobs.createJob(options);
      case Jobs.GET_JOB_BY_ID:
        return Jobs.getJobById(options);
      default:
        return Jobs.getJobs(options);
    }
  }

  // static getJobById(options) {
  //   const config = {
  //     method: HTTP_METHODS.get,
  //     url: `v1/job/get-job-by-job-id`,
  //     body: options.body,
  //     token: options.token,
  //   };

  //   return request(config);
  // }

  static post(options) {
    switch (options.type) {

      case Jobs.CREATE_JOB:
        return Jobs.createJob(options);
  
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

  static post(options) {
    switch (options.type) {
      case Jobs.CREATE_JOB:
        return Jobs.createJob(options);

      default:
        return Jobs.eiei(options);
    }
  }

  static createJob(options) {
    const config = {
      method: HTTP_METHODS.post,
      url: `/v1/job/create-job`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }


  static getJobDetail(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/job/get-job-by-job-id`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
  
}
export default Jobs;
