
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
        data: response.data.message
      }

    } catch (error) {
      return {
        success: false,
        data: error
      }
    }
  }

  async commentLike(data) {
    console.log(data)
    try {
      const response = await axios.post(`comment/${data.comment}/like`, { networkId: data.network })
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


  async postLike(data) {
    try {
      const response = await axios.post(`post/${data.post}/like`, { networkId: data.network })
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
        data: error
      }
    }
  }

  async createComment({ post, data }) {
    try {
      const response = await axios.post(`post/comment/${post}`, data)
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

  async replyComment({ post, comment, data }) {
    try {
      const response = await axios.post(`reply/post/${post}/comment/${comment}`, data)
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
}

export default new Repository()