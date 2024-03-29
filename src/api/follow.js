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


export function followUserApi(idUser){
  const url = `${API_HOST}/altaRelacion?id=${idUser}`;

  const params = {
    method: "POST",
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


export function unfollowUserApi(idUser){
  const url = `${API_HOST}/bajaRelacion?id=${idUser}`;

  const params = {
    method: "DELETE",
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
