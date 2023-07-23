import axios from 'axios'

const getSeries = async (url) => {
  const data = await axios.get(`https://anime-scraper-six.vercel.app/otakudesu/v1/${url}`)
  return data.data.data
}
export {
  getSeries
}