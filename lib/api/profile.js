import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Profile {
  static GET_DISCUSSIONS = "getDiscussions";
  static DELETE_DUSCUSSIONS = "deleteDiscussions";

  static get(options) {
    switch (options.type) {
      case Profile.GET_DISCUSSIONS:
        return Profile.getDiscussions(options);

      default:
        return Profile.getDiscussions(options);
    }
  }
  static delete(options){
    switch(options.type){
      case Profile.DELETE_DUSCUSSIONS:
        return Profile.deleteDiscussions(options);
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

  static deleteDiscussions(options){
    const config = {
      method: HTTP_METHODS.delete,
      url: `/v1/post/delete-post`,
      body: options.body,
      token: options.token,
    };

    return request(config)
  }
}
export default Profile;
