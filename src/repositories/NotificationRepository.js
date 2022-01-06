import axios from 'axios';
import store from '@/store'

class Repository {

  async changeLanguage(lg) {
    try {
      const response = await axios.get(`/profile/language?language=${lg}`);
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  }
  async business(uuid) {
    try {
      const response = await axios.get(`/notification/business/${uuid}`);
      return {
        success: true,
        data: response.data.data,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  }

  async logOut() {
    try {
      const response = await axios.post("/logout")
      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
      }
    }
  }

  async profile() {
    await axios
      .get('user/notifications', {
      })
      .then(({ data }) => {
        console.log('Nav bar notifs', data);
        store.commit('notification/NEW_PROFILE_NOTIFICATION', { init: true, data: data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async network() {}
}

export default new Repository();
