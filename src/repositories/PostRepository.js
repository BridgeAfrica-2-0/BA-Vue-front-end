
import axios from "axios"

class Repository {
  async fetch({ uuid, page }) {
    try {
      const response = await axios.get(`post/comment/${uuid}/${page}`)
      return {
        success: (response.data.data) ? true : false,
        data: (response.data.data) ? response.data.data : []
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async SendToken(token) {
    try {
      const response = await axios.get(`user/token/`, { token })
      return {
        success: (response.data.data) ? true : false,
        data: (response.data.data) ? response.data.data : []
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

}

export default new Repository()