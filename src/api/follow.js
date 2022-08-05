import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";


export function checkFollowApi(idUser){
  const url = `${API_HOST}/consultaRelacion?id=${idUser}`;

  const params = {
    method: "GET",
    headers: {
      Authorization: getTokenApi()
    }
  }


  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    })
}