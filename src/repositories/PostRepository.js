
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
        data: error.response.message
      }
    }
  }

  async delete(uuid) {
    try {
      const response = await axios.delete(`comment/${uuid}`)
      return {
        success: true,
      }

    } catch (error) {
      console.log(error.message.data)
      return {
        success: false,
        data: error.response.message
      }
    }
  }

  async update({ uuid, text }) {
    try {
      const response = await axios.post(`update/comment/${uuid}`, { comment: text })
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.message
      }
    }
  }
}

export default new Repository()