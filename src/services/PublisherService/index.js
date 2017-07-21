import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getPublishers() {
  return fetch(`${Const.server.local}/api/publisher/basic`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
