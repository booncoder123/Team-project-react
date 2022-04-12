import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Post {
  static GET_DISCUSSIONS = "getDiscussions";
  static CREATE_USER = "createUser";

  static get(options) {
    switch (options.type) {
      case Post.GET_DISCUSSIONS:
        return Post.getDiscussions(options);

      default:
        return Post.getDiscussions(options);
    }
  }

  static getDiscussions(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/get-disscusion-post`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
}
export default Post;
