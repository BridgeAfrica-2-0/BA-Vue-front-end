import axios from 'axios';
import store from '@/store'

class Repository {
  async business() {
    try {
      const response = await axios.get('/business/notificaitons');
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
