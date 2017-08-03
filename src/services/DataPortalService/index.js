import fetch from 'isomorphic-fetch';
import Const from '../../const';
import { http } from '../../auth';

// Api Humboldt
/*Data Portal*/

//Get getOccurrenceCount v1.5 iu
export function getOccurrenceCount(param) {
  return fetch(`${Const.server.api_bio_v1_5}/occurrence/count${param ? `?isGeoreferenced=true` : ''}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

//Get getOccurrenceGrid v1.5
export function getOccurrenceGrid(params) {

  return fetch(`${Const.server.api_bio_v1_5}/occurrence/grid${params}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get getOcurrenceGridPbf v1.5
export function getOcurrenceGridPbf() {

  return fetch(`${Const.server.api_bio_v1_5}/occurrence/grid/${z}/${x}/${y}.pbf`, http('GET')).then((response) => {
    return response.json() //Este campo es binario?
  }).then((data) => {
    return data
  })
}
//Get getOccurrenceSearch v1.5
export function getOccurrenceSearch(params, page) {
  const offset = page ? `page=${page}` : ''
  return fetch(`${Const.server.api_bio_v1_5}/occurrence/search${params ? `${params}&` : '?'}${offset}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}
//Get getRegistryDepartment v1.5
export function getRegistryDepartment() {

  return fetch(`${Const.server.api_bio_v1_5}/registry/department`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

//Get getRegistryCounty v1.5
export function getRegistryCounty() {

  return fetch(`${Const.server.api_bio_v1_5}/registry/county`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}
