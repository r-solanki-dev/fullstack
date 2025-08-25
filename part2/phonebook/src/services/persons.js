import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

function getAll() {
  return axios.get(baseUrl)
}

function create(newObject) {
  return axios.post(baseUrl, newObject)
}

function remove(id) {
  return axios.delete(`${baseUrl}/${id}`)
}

function update(id, newObject) {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, remove, update }