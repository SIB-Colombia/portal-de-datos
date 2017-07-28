import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getDataset() {
  return fetch(`${Const.server.local}/api/dataset/basic`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getDatasetsList() {
  return fetch(`${Const.server.local}/api/dataset/list`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}