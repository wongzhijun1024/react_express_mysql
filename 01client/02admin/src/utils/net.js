import axios from "axios";
import qs from "qs";
import { Socket } from "net";
const serverUrl = "http://localhost:8888/";

let net = {
  get: "",
  post: "",
  uploadFile: ""
};
net.get = function(api, object, call) {
  //1,封装请求地址
  let url = serverUrl + api;
  //2,根据请求地址和请求数据发出请求
  axios
    .get(url, {
      params: object
    })
    .then(function(response) {
      call(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

net.post = function(api, object, call) {
  //1,封装请求地址
  let url = serverUrl + api;
  axios
    .post(url, qs.stringify(object))
    .then(function(response) {
      if (response.status === 200) {
        call(response.data);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default net;
