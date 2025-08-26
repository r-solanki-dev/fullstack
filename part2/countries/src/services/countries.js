import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

function getAllCountries() {
  return axios.get(`${baseUrl}/all`)
}

function getCountryDetails(name) {
  return axios.get(`${baseUrl}/name/${name}`)
}

export default { getAllCountries, getCountryDetails }