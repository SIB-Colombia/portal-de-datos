import fetch from 'isomorphic-fetch'
import { http } from '../../auth'

export function getOccurrenceById(id) {
  return fetch(`http://api.gbif.org/v1/occurrence/search?occurrenceid=${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
