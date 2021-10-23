
import axios from "axios"

export const fullMediaLink = (media) => {
  if (media) {
    const scheme = axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)
    return media.startsWith(scheme) ? media : `${scheme}${media}`
  }

  return ""

}