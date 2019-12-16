import axios from "./axios";

export const getTodoListRequest = () => {
  return axios.get("http://rest.apizza.net/mock/50e17034ef72fa536235e396dbf66023/todo");
};
