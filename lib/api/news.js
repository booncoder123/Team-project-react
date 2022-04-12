import { request } from "./index";
import { HTTP_METHODS } from "./const";

class News {
  static GET_NEWS = "getNews";

  static get(options) {
    switch (options.type) {
      case News.GET_NEWS:
        return News.getNews(options);

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
}
export default News;
