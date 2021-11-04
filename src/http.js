import AppRepository from './repositories';

export default {
  install(Vue, options) {
    Vue.prototype.$repository = AppRepository;
  },
};
