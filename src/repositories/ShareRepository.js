
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

  async getNetworks() {
    try {
      const response = await axios.get(`profile/user/networks`)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async getBusiness() {
    try {
      const response = await axios.get(`profile/user/businesses`)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async switch(uuid) {
    try {
      const response = (uuid) ? await axios.get(`switch?id=${uuid}`) : await axios.get(`switch`)
      return {
        success: true,
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