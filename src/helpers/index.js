
import axios from "axios"

export const fullMediaLink = (media) => {
  
  if (media) {
    const scheme = axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)
    console.log(scheme,media.startsWith(scheme))
    console.log(media)
    return media.startsWith(scheme) ? media : `${scheme}${media}`
  }

  return ""

}