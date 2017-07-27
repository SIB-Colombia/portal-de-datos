import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getEntitiesRecord() {
  return fetch(`${Const.server.local}/api/entities/basic`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getEntitiesList() {
  return fetch(`${Const.server.local}/api/entities/list`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
