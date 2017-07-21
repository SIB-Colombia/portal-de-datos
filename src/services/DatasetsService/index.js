import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getDatasets() {
  return fetch(`${Const.server.local}/api/dataset/basic`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
