import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    blocking: [],
    roles: [],
    networkMembers: [],
    roleAssignment: [],
    editors: [],
    memberRequest: [],
    pendingPosts: [],
    keywordAlerts: [],
    notifications: [],
  },
  getters: {
    //getting blocked users from store
    getBlocked(state) {
      return state.blocking;
    },
    //getting networkss
    getNetwork(state) {
      return state.networks;
    },

    //getting roles
    allRoles(state) {
      return state.roles;
    },

    //getting members
    allMembers(state) {
      return state.networkMembers;
    },
    //getting editors
    allEditors(state) {
      return state.editors;
    },

    //all member request
    allMemberRequest(state) {
      return state.memberRequest;
    },

    //all pending post
    allPendingPost(state) {
      return state.pendingPosts;
    },

    //all keyword alerts
    allAlerts(state) {
      return state.keywordAlerts;
    },

    //all notifications
    allNotifications(state) {
      return state.notifications;
    },
  },
  mutations: {
    // setting network info
    saveChange(state, payload) {
      state.networks = payload;
    },
    //setting blocked users
    setBlockedUsers(state, payload) {
      state.blocking = payload;
    },
    //setting unblock users
    setUnblock(state, payload) {
      state.blocking = payload;
    },
    //setting networks
    setNetwork(state, payload) {
      state.networks = payload;
    },

    //setting network roles
    setRoles(state, payload) {
      state.roles = payload;
    },
    //setting network members
    setMembers(state, payload) {
      state.networkMembers = payload;
    },
    //role assignment
    assignRole(state, payload) {
      state.roleAssignment = payload;
    },
    //setting editors
    setEditors(state, payload) {
      state.editors = payload;
    },

    //setting memebre request
    setMemberRequest(state, payload) {
      state.memberRequest = payload;
    },

    //set approve member
    setApprove(state, payload) {
      state.memberRequest = payload;
    },

    //set decline member
    setDecline(state, payload) {
      state.memberRequest = payload;
    },

    //setting pending post
    setPendingPost(state, payload) {
      state.pendingPosts = payload;
    },

    //set approved pending post
    setApprovedPost(state, payload) {
      state.pendingPosts = payload;
    },

    //set decline pending post
    setDeclinedPost(state, payload) {
      state.pendingPosts = payload;
    },

    //set keywprds alerts
    setAlerts(state, payload) {
      state.keywordAlerts = payload;
    },

    //set approve keywords alerts
    setApprovedAlerts(state, payload) {
      state.pendingPosts = payload;
    },

    //set decline keywprds alerts
    setDeclinedAlerts(state, payload) {
      state.keywordAlerts = payload;
    },

    //set notifications
    setNotifications(state, payload) {
      state.notifications = payload;
    },
  },
  actions: {
    async getNetworks({ commit }, networkId) {
      const res = await axios.get(`network/${networkId}`);

      commit("setNetwork", res.data);
    },

    async saveChange({ commit }, info, networkId) {
      const res = await axios.post(`network/update/${networkId}`, info);

      commit("saveChange", res.data);
    },

    async getBlockedUsers({ commit }) {
      const res = await axios.get("network/users/blocked");

      commit("setBlockedUsers", res.data);
    },

    async unblockUser({ commit }, networkId, userId) {
      const res = await axios.post(
        `network/users/unblocked/${networkId}/${userId}`
      );

      commit("setUnblock", res.data);
    },

    //getting network roles
    async getRoles({ commit }) {
      const res = await axios.get("network/roles");

      commit("setRoles", res.data);
    },

    //getting network members
    async getMembers({ commit }, networkId) {
      const res = await axios.get(`network/${networkId}/members`);

      commit("setMembers", res.data);
    },

    // assigning roles
    async assignRole({ commit }) {
      const res = await axios.post("");

      commit("assignRole", res.data);
    },

    // getting editors
    async getEditors({ commit }, id) {
      const res = await axios.get(`network/${id}/editors`);

      commit("setEditors", res.data);
    },

    //edit editor
    async editEditor({ commit }, id) {
      const res = await axios.post(`network/roles/${id}/assign`);

      commit("editEditor", res.data);
    },

    //edit editor
    async deleteEditor({ commit }, id) {
      const res = await axios.post(`network/roles/${id}`);

      commit("deletetEditor", res.data);
    },

    //getting membre request
    async getMemberRequest({ commit }, networkId) {
      const res = await axios.get(`network/${networkId}/members`);

      commit("setMemberRequest", res.data);
    },

    //approve member request
    async approveUser({ commit }, id) {
      const res = await axios.post("", id);

      commit("setApprove", res.data);
    },

    //decline member request
    async declineUser({ commit }, id) {
      const res = await axios.post("", id);

      commit("setDecline", res.data);
    },

    //getting pending post
    async getPendingPost({ commit }) {
      const res = await axios.get("");

      commit("setPendingPost", res.data);
    },

    //approve pending post
    async approvedPost({ commit }, id) {
      const res = await axios.post("", id);

      commit("setApprovedPost", res.data);
    },

    //decline pending post
    async unapprovedPost({ commit }, id) {
      const res = await axios.post("", id);

      commit("setDeclinedPost", res.data);
    },

    //getting keyword alerts
    async getAlerts({ commit }) {
      const res = await axios.get("");

      commit("setAlerts", res.data);
    },

    //approve keyword alerts
    async approvedAlerts({ commit }, id) {
      const res = await axios.post("", id);

      commit("setApprovedAlerts", res.data);
    },

    //decline keyword alerts
    async unapprovedAlerts({ commit }, id) {
      const res = await axios.post("", id);

      commit("setDeclinedAlerts", res.data);
    },

    //getting notifications
    async getNotifications({ commit }) {
      const res = await axios.get("");

      commit("setNotification", res.data);
    },
  },
};
