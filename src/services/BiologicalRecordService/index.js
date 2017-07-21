import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getBiologicalRecord() {
  return fetch(`${Const.server.local}/api/biological/basic`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
