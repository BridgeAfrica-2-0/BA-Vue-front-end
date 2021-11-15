
import axios from "axios"

class Repository {
  async business() {
    try {
      const response = await axios.get("/business/notificaitons")
      return {
        success: true,
        data: response.data.data
      }
    } catch (error) {
      return {
        success: false,
      }
    }
  }

  async logOut() {
    try {
      const response = await axios.post("/logout")
      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
      }
    }
  }

  async profile() {
  }

  async network() {
  }


}

export default new Repository()