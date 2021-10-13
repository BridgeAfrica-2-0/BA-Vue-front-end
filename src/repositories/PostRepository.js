
import axios from "axios"

class Repository {
  async comments(credentials) {
    try {
      const { page, uuid } = credentials
      const response = await axios.get(`search/comment/${uuid}/${page}`)
      return response.data.data
    } catch (error) {
      return false
    }

  }
}

export default new Repository()