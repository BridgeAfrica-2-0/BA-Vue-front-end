
import axios from "axios"

class Repository {
  async userPost(credentials, type) {
    try {
      const response = await axios.post(`share/user?poster_type=${type}`, credentials)
      return {
        success: true
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

  async blocking(data, uuid) {
    try {
      const response = await axios.post(`business/community-banned/${uuid}`, data)
      return {
        success: (response.data.data) ? true : false
      }
    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }


  async jointNetwork(data) {
    try {
      const response = await axios.post(`add-member`, data)
      return {
        success: true,
        data: response.data.message
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async removeNetwork(data) {
    try {
      const response = await axios.post(`remove-member`, data)
      return {
        success: true,
        data: response.data.message
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async showNetworkAndBussiness() {
    try {
      const response = await axios.get(`share/destination`)
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

  async getNetworkAndBusiness(networkId = null) {
    try {
      if (localStorage.getItem('isGuestUser')) return { success: true, data: [] };
      const link = networkId ? `user-business-network?networkId=${networkId}` : `user-business-network`

      console.log(link)
      const response = await axios.get(link)
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

  async getNetworks() {
    try {
      const response = await axios.get(`profile/networks/user`)
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

  async switch(uuid, type = "network") {
    try {
      const response = ("network" == type)
        ? await axios.post(`switch`, { networkId: uuid })
        : (uuid) ? await axios.post(`switch?id=${uuid}`) : await axios.post(`switch`)

      return {
        success: true,
        data: response.data.message
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async WhoIsConnect({ networkId, type }) {
    try {
      if (localStorage.getItem('isGuestUser')) return { success: true, data: [] };

      const response = await axios.get(type ? `interface?networkId=${networkId}` : `interface`)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async commentLike(data) {
    try {
      const response = await axios.post(`comment/${data.comment}/like`, { networkId: data.network })
      return {
        success: true,
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }


  async postLike(data) {
    try {
      const response = await axios.post(`post/${data.post}/like`, { networkId: data.network })
      return {
        success: true,
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async createPost(data) {
    try {
      const response = await axios.post(`network/create/post`, data)
      return {
        success: true,
        data: response.data.message
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async createComment({ post, data }) {
    try {
      const response = await axios.post(`post/comment/${post}`, data)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async createBusinessComment({ post, data }) {
    try {
      const response = await axios.post(`post/comment/${post}`, data)
      return {
        success: true,
        data: response.data.message
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async fetchReplyComment({ post, comment, page }) {
    try {
      const response = await axios.get(`reply/post/${post}/comment/${comment}/${page}`)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }

  async createReplyComment({ post, comment, data }) {
    try {
      const response = await axios.post(`reply/post/${post}/comment/${comment}`, data)
      return {
        success: true,
        data: response.data.data
      }

    } catch (error) {
      return {
        success: false,
        data: error.response.data.errors
      }
    }
  }
}

export default new Repository()