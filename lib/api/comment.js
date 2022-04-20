import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Comments {
  static getComments(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/comment/get-all-comments-by-post-id`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static postComment(options) {
    const config = {
      method: HTTP_METHODS.post,
      url: `/v1/comment/create-comment`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
}
export default Comments;
