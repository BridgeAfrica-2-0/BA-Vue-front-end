
import axios from "axios"

class Repository {

  async findUserByParam(credentials) {
    const { page, payload } = credentials
    const response = await axios.post(`search/listUsers/${page}`, { ...payload, page })
    return await response.data.data
  }

  async findPostByKeyword(credentials) {
    const { page, data, keyword } = credentials
    const response = await axios.post(`search/people/post/${keyword}`, data)
    return await response.data.data
  }

}


export default new Repository()