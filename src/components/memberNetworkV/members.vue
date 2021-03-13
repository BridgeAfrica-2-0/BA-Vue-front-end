<template>
  <div>
    <fas-icon class="primary search" :icon="['fas', 'search']" />
    <input
      type="text"
      placeholder="Search Member"
      class="search-member"
      name=""
      id=""
    />
    <p class="mt-2">
      <strong>Metwork Admins ({{ admins.length }})</strong>
    </p>
    <hr />
    <div class="mt-1" v-for="(admin, index) in admins" :key="index">
      <b-avatar :src="admin.avatar"></b-avatar>
      <strong>
        {{ admin.name }}
      </strong>
    </div>

    <p class="mt-4">
      <strong>Businesses ({{ admins.length }})</strong>
    </p>
    <hr />
    <div class="mt-1" v-for="(admin, index) in admins" :key="index">
      <b-avatar :src="admin.avatar"></b-avatar>
      <strong>
        {{ admin.name }}
      </strong>
    </div>

      <p class="mt-4">
      <strong>All Members ({{ admins.length }})</strong>
    </p>
    <hr />
    <div class="mt-1" v-for="(admin, index) in admins" :key="index">
      <b-avatar :src="admin.avatar"></b-avatar>
      <strong>
        {{ admin.name }}
      </strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admins: [
        {
          name: "   Interacting as Mapoure Agrobusiness",
          avatar: "https://placekitten.com/300/300",
        },
        {
          name: "   Interacting as Mapoure Agrobusiness",
          avatar: "https://placekitten.com/300/300",
        },
      ],
    };
  },
};
</script>

<style scoped>
.search {
  position: relative;
  margin-left: 10px;
  top: 30px;
  z-index: 3;
  cursor: pointer;
}
.search-member {
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  height: 35px;
  padding-left: 30px;
}
.search-member:focus {
  outline: none;
}
</style>
