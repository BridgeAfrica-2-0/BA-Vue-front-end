
import axios from "axios"

export const fullMediaLink = (media) => {

  if (media) {
    const scheme = axios.defaults.baseURL.substring(0, axios.defaults.baseURL.length - 8)
    const render = media.startsWith("https://www.youtube.com")
      ? media
      : media.startsWith(scheme)
        ? media
        : media.startsWith("/storage/") ? `${scheme}${media}`
          : `https://www.youtube.com/watch?v=${media}`

    return render
  }

  return ""

}