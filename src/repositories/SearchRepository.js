
import axios from "axios"

class Repository {

  async findUserByParam(credentials) {
    try {
      const { page, payload } = credentials
      const response = await axios.post(`search/listUsers/${page}`, { ...payload, page })
      return response.data.data
    } catch (error) {
      return false
    }

  }

  async findPostByKeyword(credentials) {
    try {
      const { page, data, keyword } = credentials
      const response = await axios.post(`search/people/post/${keyword}/${page}`, { ...data, page })
      return response.data.data
    } catch (error) {
      return false
    }

  }

  async findPostByBuisness(credentials) {
    try {
      const { page, data, keyword } = credentials
      const response = await axios.post(`search/business/post/${keyword}/${page}`, { ...data, page })
      return response.data.data
    } catch (error) {
      return false
    }

  }

  async findPostByNetWork(credentials) {
    try {
      const { page, data, keyword } = credentials
      const response = await axios.post(`search/network/post/${keyword}/${page}`, { ...data, page })
      return response.data.data
    } catch (error) {
      return false
    }

  }

}


export default new Repository()