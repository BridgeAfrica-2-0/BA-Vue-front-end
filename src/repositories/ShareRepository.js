
import axios from "axios"

class Repository {
  async userPost(credentials) {
    try {
      const response = await axios.post(`share/user`, credentials)
      return {
        success: (response.data.message) ? true : false
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async getNetworkorBusiness() {
    try {
      const response = await axios.post(`share/user`)
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