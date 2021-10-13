
import axios from "axios"

class Repository {
  async userPost(credentials) {
    try {
      const response = await axios.post(`share/user`, credentials)
      return response.data.data
    } catch (error) {
      return false
    }
  }
}

export default new Repository()