import axios from 'axios';

class Repository {
  async findUserByParam(credentials) {
    try {
      const { page, data } = credentials;
      const response = await axios.post(`search/listUsers/${page}?keyword=${data.keyword}`, { ...data, page });
      return {
        success: response.data.data ? true : false,
        data: response.data.data ? response.data.data : [],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        data: error,
      };
    }
  }

  async findPostByKeyword(credentials) {
    try {
      const { page, data } = credentials;

      const response = await axios.post(`search/people/post/${page}?keyword=${data.keyword}`, { ...data, page });
      return {
        success: response.data.data ? true : false,
        data: response.data.data ? response.data.data : [],
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }

  async findPostByBuisness(credentials) {
    try {
      const { page, data } = credentials;
      const response = await axios.get(`search/business/post/${page}`, { ...data, page });
      return {
        success: response.data.data ? true : false,
        data: response.data.data ? response.data.data : [],
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }

  async findPostByNetWork(credentials) {
    try {
      const { page, data, keyword } = credentials;
      const response = await axios.post(`search/network/post/${keyword}/${page}`, { ...data, page });
      return {
        success: response.data.data ? true : false,
        data: response.data.data ? response.data.data : [],
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }
}

export default new Repository();
