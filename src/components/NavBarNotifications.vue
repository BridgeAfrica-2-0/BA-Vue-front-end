<template>
  <div class="popover-body">
    <p class="font-weight-bold">Notifications</p>
    <hr class="h-divider" />
    <div v-for="index in 5" :key="index">
      <div class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer">
        <div>
          <img src="@/assets/img/profile-pic.jpg" class="rounded-circle" alt="" width="30" height="30" />
        </div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">David</span> started following you</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr class="h-divider" />
    </div>
    <a href="/settings" class="text-ored"><u>See all Notifications</u></a>
  </div>
</template>

<script>
export default {
  name: 'NavBarNotifications',
  data(){
    return{

    }
  }
};
</script>

<style scoped></style>
