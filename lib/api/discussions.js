import { request } from "./index";
import { HTTP_METHODS } from "./const";

class Post {
  static GET_DISCUSSIONS = "getDiscussions";
  static PUT_DISCUSSIONS = "putDiscussions";
  static CREATE_DISCUSSIONS = "createDiscussions";

  static get(options) {
    switch (options.type) {
      case Post.GET_DISCUSSIONS:
        return Post.getDiscussions(options);

      default:
        return Post.getDiscussions(options);
    }
  }
  static put(options){
    switch (options.type) {
      case Post.PUT_DISCUSSIONS:
        return Post.putLike(options);

      default:
        return Post.getDiscussions(options);
    }
  }

  static post(options) {
    switch (options.type) {
      case Post.CREATE_DISCUSSIONS:
        return Post.createDiscussions(options);
  
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
  static putLike(options) {
    const config = {
      method: HTTP_METHODS.put,
      url: `/v1/post/like`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static createDiscussions(options) {
    const config = {
      method: HTTP_METHODS.post,
      url: `/v1/post/create-post`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
}
export default Post;
