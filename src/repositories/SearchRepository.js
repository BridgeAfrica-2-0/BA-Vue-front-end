
import axios from "axios"

class Repository {

  async findUserByParam(credentials) {
    const { page, payload } = credentials
    const response = await axios.post(`search/listUsers/${page}`, { ...payload, page })
    return await response.data.data
  }

  async findPostByKeyword(credentials) {
    const { page, data, keyword } = credentials
    const response = await axios.post(`search/people/post/${keyword}/${page}`, { ...data, page })
    return await response.data.data
  }

  async findPostByBuisness(credentials) {
    const { page, data, keyword } = credentials
    const response = await axios.post(`search/business/post/${keyword}/${page}`, { ...data, page })
    return await response.data.data
  }

  async findPostByNetWork(credentials) {
    const { page, data, keyword } = credentials
    const response = await axios.post(`search/network/post/${keyword}/${page}`, { ...data, page })
    return await response.data.data
  }

}


export default new Repository()