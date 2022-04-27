import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Profile {
  static GET_DISCUSSIONS = "getDiscussions";

  static get(options) {
    switch (options.type) {
      case Profile.GET_DISCUSSIONS:
        return Profile.getDiscussions(options);

      default:
        return Profile.getDiscussions(options);
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
}
export default Profile;
