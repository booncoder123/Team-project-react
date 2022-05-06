// import env from "config/env";
import axios from "axios";
import { ERROR_CODES, HTTP_METHODS, STATUS_CODES } from "./const";

import User from "./user";

export { User };

export async function request({
  baseURL = process.env.NEXT_PUBLIC_BASE_URL,
  body = null, // eg. for POST
  device = "",
  forceRenewToken,
  includeServerTime = false,
  // isGuestMode = StateStorage.isGuestMode(),
  isGuestMode = false,
  lang = "",
  method = HTTP_METHODS.get,
  multipart = false,
  params = undefined, // eg. for GET
  pdf = false,
  referer,
  responseType = "json",
  segmentAnonymousID = "",
  shop = "",
  stringify = false,
  timeout = 0,
  token = "",
  upload = false,
  url = "",
  userUID = "",
  withAuthorization = true,
  // formData = false,
}) {
  // TODO: find all component test cases that not handle promise then next line could be removed
  // const newToken =
  //   withAuthorization && forceRenewToken ? await renewToken() : token;

  return axios({
    baseURL,
    method,
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: body,
  }).then((res) => {
    return res;
  });
}
