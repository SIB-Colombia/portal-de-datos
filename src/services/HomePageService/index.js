import fetch from 'isomorphic-fetch'
import Const from '../../const'
import { http } from '../../auth'

export function getStatisticsData() {
  return fetch(`${Const.server.local}/api/statitics/occurrence/search`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
