import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Profile {
  static GET_DISCUSSIONS = "getDiscussions";
  static DELETE_DUSCUSSIONS = "deleteDiscussions";
  static GET_NEWS = "getnews";
  static GET_PROJECTS = "getProjects";
  static GET_JOBS = "getJobs";
  static DELETE_JOBS = "deleteJobs";

  static get(options) {
    switch (options.type) {
      case Profile.GET_DISCUSSIONS:
        return Profile.getDiscussions(options);
      case Profile.GET_NEWS:
        return Profile.getNews(options);
      case Profile.GET_PROJECTS:
        return Profile.getProjects(options);
      case Profile.GET_JOBS:
        return Profile.getJobs(options);

      default:
        return Profile.getDiscussions(options);
    }
  }
  static delete(options){
    switch(options.type){
      case Profile.DELETE_DUSCUSSIONS:
        return Profile.deleteDiscussions(options);
      case Profile.DELETE_JOBS:
        return Profile.deleteJobs(options);
      default:
        return
    }
  }


  static getDiscussions(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/discussion`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static getNews(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/news`,
      body: options.body,
      token: options.token,
    };
    return request(config);
  }

  static getProjects(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/projects`,
      body: options.body,
      token: options.token,
    };
    return request(config);
  }

  static getJobs(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/job/jobs`,
      body: options.body,
      token: options.token,
    };
    return request(config);
  }

  static deleteDiscussions(options){
    const config = {
      method: HTTP_METHODS.delete,
      url: `/v1/post/delete-post`,
      body: options.body,
      token: options.token,
    };

    return request(config)
  }

  static deleteJobs(options){
    const config = {
      method: HTTP_METHODS.delete,
      url: `/v1/job/delete-job`,
      body: options.body,
      token: options.token,
    };

    return request(config)
  }
}
export default Profile;
