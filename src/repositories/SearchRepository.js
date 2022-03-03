
import axios from "axios"

class Repository {

  async findUserByParam(credentials) {
    try {

      const { page, data } = credentials

      const response = (data.keyword) ? await axios.post(`search/listUsers/${page}?keyword=${data.keyword}`, { ...data, page }) : await axios.post(`search/listUsers/${page}`, { ...data, page })
      return {
        success: (response.data.data) ? true : false,
        data: (response.data.data) ? response.data.data : []
      }

    } catch (error) {
      console.log(error)
      return {
        success: false,
        data: error.response.data.message
      }
    }
  }

  async findPostByKeyword(credentials) {
    try {
      const { page, data } = credentials

      const response = await axios.post(`search/people/post/${page}?keyword=${data.keyword}`, { ...data, page })
      return {
        success: (response.data.data) ? true : false,
        data: (response.data.data) ? response.data.data : []
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.message
      }
    }
  }


  async matching(keyword) {
    try {
      

      const response = await axios.get(`search/category?keyword=${keyword}`)
      return {
        success: (response.data.data) ? true : false,
        data: (response.data.data) ? response.data.data : []
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.message
      }
    }
  }

  async findPostByBuisness(credentials) {
    try {
      const { page, data } = credentials
      const response = await axios.post(`search/business/post/${page}`, { ...data, page })
      return {
        success: (response.data.data) ? true : false,
        data: (response.data.data) ? response.data.data : []
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.message
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
        data: error.response.data.message
      }
    }
  }


  async sponsors() {
    try {
      const response = await axios.get(`business/sponsored`)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.message
      }
    }
  }

}

export default new Repository()


