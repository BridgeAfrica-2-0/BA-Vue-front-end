
import axios from "axios"

class Repository {

  async findUserByParam(credentials) {
    try {
      const { page, payload } = credentials
      const response = await axios.post(`search/listUsers/${page}`, { ...payload, page })
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

  async findPostByKeyword(credentials) {
    try {
      const { page, data, keyword } = credentials
      const response = await axios.post(`search/people/post/${keyword}/${page}`, { ...data, page })
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

  async findPostByBuisness(credentials) {
    try {
      const { page, data, keyword } = credentials
      const response = await axios.post(`search/business/post/${keyword}/${page}`, { ...data, page })
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

  async findPostByNetWork(credentials) {
    try {
      const { page, data, keyword } = credentials
      const response = await axios.post(`search/network/post/${keyword}/${page}`, { ...data, page })
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