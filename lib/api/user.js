import { request } from "./index";
import { HTTP_METHODS } from "./const";

class User {
  static CREATE_USER = "createUser";
  static GET_USER_BY_ID = "getUserById";
  static UPDATE_USER_DETAIL = "updateUserDetail";

  static get(options) {
    switch (options.type) {
      case User.USER_GET_USER_DETAIL:
        return User.getDetail(options);
      case User.GET_USER_BY_ID:
        return User.getUserById(options);

      default:
        return User.getDetail(options);
    }
  }
  static getUserById(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/user/get-user-detail`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static getUserStoreDetail(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/user/store-user-detail`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static post(options) {
    switch (options.type) {
      case User.CREATE_USER:
        return User.createUser(options);
      case User.UPDATE_USER_DETAIL:
        return User.updateUserDetail(options);

      default:
        return User.eiei(options);
    }
  }
  static updateUserDetail(options) {
    const config = {
      method: HTTP_METHODS.post,
      url: `/v1/user/update-user-detail`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static getUserStoreDetail(options) {
    const config = {
      method: HTTP_METHODS.get,
      url: `/v1/user/store-user-detail`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }

  static createUser(options) {
    const config = {
      method: HTTP_METHODS.post,
      url: `/v1/user/create-user`,
      body: options.body,
      token: options.token,
    };

    return request(config);
  }
  static eiei = (options) => {
    console.log("eiei");
  };
}
export default User;
