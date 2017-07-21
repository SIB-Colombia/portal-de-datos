import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getSpecies() {
  return fetch(`${Const.server.local}/api/species/basic`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
