
import axios from "axios"

class Repository {

  async comments(credentials) {
    const { page, uuid } = credentials
    const response = await axios.get(`search/comment/${uuid}/${page}`)
    return await response.data.data
  }
}

export default new Repository()