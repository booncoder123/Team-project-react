import { request } from "./index";
import { HTTP_METHODS } from "./const";

class News {
  static GET_NEWS = "getNews";
  static CREATE_NEWS = "createNews";

  static get(options) {
    switch (options.type) {
      case News.GET_NEWS:
        return News.getNews(options);

      default:
        return News.getNews(options);
    }
  }

  static post(options) {
    switch (options.type) {
      case News.CREATE_NEWS:
        return News.createNews(options);
  
      default:
        return News.getNews(options);
    }
  }

  static getNews(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/post/get-news-post`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
  static putNews(options) {
    const config = {
      method: HTTP_METHODS.put,
      url: `/v1/post/update-post`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static createNews(options) {
    const config = {
      method: HTTP_METHODS.post,
      url: `/v1/post/create-post`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
}
export default News;
