
import axios from "axios"

class Repository {

  async findUserByParam(credentials) {
    const { page, payload } = credentials
    const response = await axios.post(`search/listUsers/${page}`, payload)
    return await response.data.data
  }

}


export default new Repository()