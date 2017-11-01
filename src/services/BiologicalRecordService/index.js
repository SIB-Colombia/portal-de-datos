import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getBiologicalRecord(id) {
  return fetch(`${Const.server.local}/api/biological/basic/`+id, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
