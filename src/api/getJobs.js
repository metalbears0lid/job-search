import axios from 'axios'

async function getJobs() {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const response = await axios.get(`${baseUrl}/jobs`)
  console.log('Received jobs data from backend', response.data)
  return response.data
}

export default getJobs
