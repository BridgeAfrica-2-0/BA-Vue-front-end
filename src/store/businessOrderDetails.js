import axios from 'axios';

export default {
  namespaced: true,

  state: {
    order_details: {
      // orderId: '000026',
      // orderDate: '2021-11-04T18:29:48.000000Z',
      // businessesName: ['Dr. Cassandra Willms'],
      // orderItems: [
      //   {
      //     id: 46,
      //     order_id: 23,
      //     quantity: 10,
      //     price: '2000.00',
      //     sub_total: '20000.00',
      //     tax_amount: '100.00',
      //     shipping_amount: '1000.00',
      //     product_id: 1,
      //     product_name: 'SafeLink TCL A2 4G LTE Prepaid Smartphone 1f512_locked - Black ',
      //     product_picture: '/storage/network/1/album/4bJIfH6Wf0LjLqXq0jxBgUWNa4iBkH31eAMJsD6J.jpg',
      //     product_description:
      //       'This Safelink Handset does not automatically enroll or guarantee Lifeline benefits. This Handset is to be used to transfer and active your current Safelink service.\r\nGet the TCL A2 in Black from SafeLink with unbeatable nationwide coverage on the largest and most dependable networks in America. Get the full picture with a 5.5” full view display and stay connected with a dedicated Google Assistant and fast processor. With up to 15 hours of talk time, this phone will keep up with your daily demands, however busy you are.\r\nHigh-Quality Photos with Depth: Take sharp pictures with the 8MP rear camera and share stylish portraits with the 5MP selfie camera that allows you to focus on your subject in real-time with a blurred background effect.',
      //     product_price: '200000.00',
      //     product_in_stock: 1,
      //     business_id: 1,
      //     business_name: 'Dr. Cassandra Willms',
      //     created_at: '2021-11-04T18:29:48.000000Z',
      //     status: 'pending',
      //   },
      //   {
      //     id: 48,
      //     order_id: 23,
      //     quantity: 10,
      //     price: '4000.00',
      //     sub_total: '40000.00',
      //     tax_amount: '200.00',
      //     shipping_amount: '1000.00',
      //     product_id: 3,
      //     product_name: 'KoaLa Blanc',
      //     product_picture: '/storage/network/1/album/y4sgFXwkl3iK89NQGAre1xci10Vzeuo1YeMC3z1w.jpg',
      //     product_description: 'le montre de lee',
      //     product_price: '1556.00',
      //     product_in_stock: 1,
      //     business_id: 1,
      //     business_name: 'Dr. Cassandra Willms',
      //     created_at: '2021-11-04T18:29:48.000000Z',
      //     status: 'pending',
      //   },
      // ],
      // shippingAdress: {
      //   id: 1,
      //   user_id: 1,
      //   name: 'Rond Point Damas',
      //   phone: '6978644',
      //   email: 'edsonelmar@gmail.com',
      //   country_id: 1,
      //   region_id: 1,
      //   council_id: 1,
      //   division_id: 1,
      //   city: 'Yaounde',
      //   neighbourhood_id: 1,
      //   created_at: '2021-10-18T13:00:32.000000Z',
      //   updated_at: '2021-10-18T13:00:32.000000Z',
      // },
      // TotalPrice: 60000,
      // TotalShippingFee: 2000,
      // Total: 62300,
    },
  },

  getters: {
    getOrderDetails(state) {
      return state.order_details;
    },
  },

  mutations: {
    setOrderDetails(state, order_details) {
      state.order_details = order_details;
    },
  },

  actions: {
    getOrderDetails({ commit , state}, data) {
      return axios.get(`/order/${data.orderId}/${data.businessId}/items`).then( response  => {
        console.log("----------------------------------s");
        console.log(response);
        commit('setOrderDetails', response.data.data);
        console.log(state.order_details);
      });
    },

    nextPage({commit }, data){

      return axios.get(`/order/${data.orderId}/${data.businessId}/items?page=${data.page}`).then( response  => {
        console.log("----------------------------------s");
        console.log(response);
        commit('setOrderDetails', response.data.data);
        console.log(state.order_details);
      });

    }
  },
};
