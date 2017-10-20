import fetch from 'isomorphic-fetch'
import { http } from '../../auth'

export function getOccurrenceById(id) {
  return fetch(`http://api.gbif.org/v1/occurrence/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
export function getOccurrenceSearch(params, page) {
  const inicial = page || params ? "&": "?"
  const offset = page ? `?offset=${page}` : ''
  const p = params ? '&'+params : ''
  return fetch(`http://api.gbif.org/v1/occurrence/search${params}${offset}${inicial}country=CO`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}
export function getOccurrenceCount(id, key) {
  return fetch(`http://api.gbif.org/v1/occurrence/search?${key}=${id}&limit=0`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getDatasetsCount(id) {
  return fetch(`http://api.gbif.org/v1/dataset/search?publishing_org=${id}&limit=0`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getDatasetById(id) {
  return fetch(`http://api.gbif.org/v1/dataset/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getDatasetList(page) {
  const offset = page ? `&offset=${page}` : ''
  return fetch(`http://api.gbif.org/v1/dataset?limit=10&country=CO${offset}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getPublisherById(id) {
  return fetch(`http://api.gbif.org/v1/organization/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getPublisherList(page) {
  const offset = page ? `&offset=${page}` : ''
  return fetch(`http://api.gbif.org/v1/organization?limit=10&country=CO${offset}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
