import moment from 'moment'
import axios from "axios"

export const getRootSchemeForRedis = () => axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)

export const fullMediaLink = (media) => {

  if (media) {
    const scheme = axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)
    const render = media.startsWith("https://www.youtube.com")
      ? media
      : media.startsWith(scheme)
        ? media
        : media.startsWith("/storage/") ? `${scheme}${media}`
          : media
    return render
  }
  return ""
}

export const fromNow = (dateTime) => {
  const data = (new Date(dateTime)).toISOString()
  const newDate = moment(data, "YYYYMMDD")
  return newDate.fromNow()
}

export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}