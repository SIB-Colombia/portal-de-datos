import fetch from 'isomorphic-fetch';
import Const from '../../const';
import {http} from '../../auth';

//Api Local

//Get Comments by file
export function getComments(id) {

  return fetch(`${Const.server.local}/api/comment/show/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get Comments by file

export function newComment(data) {

  return fetch(`${Const.server.local}/api/comment/create`, http('POST', data)).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get list Files

export function getList() {

  return fetch(`${Const.server.amazon}/lista`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

// Api Humboldt

//Get last update record
export function getLastUpdatedRecords() {

  return fetch(`${Const.server.api_v1_5}/last_updated_records`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get individual Record v1.5 / example: 56c4fe28f0106c67230e7394
export function getFile(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

// Get Complete Record v1.5
export function getFileComplete(id) {

  return fetch(`${Const.server.api_v1_5}/complete-record/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get fullDescription v1.5
export function getFullDescription(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}/full_description/1`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}
