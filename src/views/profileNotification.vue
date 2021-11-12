<template>
  <div>
    <nav-bar />
    <main class="container mt-header">
      <h5 class="font-weight-bold">Your Notifications</h5>
      <hr class="border-dark" />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">David</span> started following you</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">Alina</span> commented on your post</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">Maxine</span> liked your post</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">Paul</span> approuved your request to join the network</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">David</span> started following you</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">David</span> started following you</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">Alina</span> commented on your post</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">Maxine</span> liked your post</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">Paul</span> approuved your request to join the network</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-row align-items-center suggest-item cursor-pointer">
        <div><img src="resources/images/profile-pic.jpg" class="rounded-circle" alt="" width="40" height="40" /></div>
        <div class="d-flex flex-column ml-3">
          <div><span class="font-weight-bold">David</span> started following you</div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr />
      <div class="mt-3 w-100 text-center" v-if="loading">
        <div class="lds-spinner d-inline-block">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/navbar';
export default {
  name: 'allNotification',

  components: {
    NavBar,
  },

  data: () => ({
    loading: false,
    haveNotData: false,
  }),

  methods: {
    onscroll: async function (event) {
      if (this.loading) return false;

      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;

      if (this.callback && (bottomOfPage || pageHeight < visible) && !this.loaderState && !this.haveNotData) {
        this.loading = true;

        /*const request = await this.callback({
          ...this.getStack,
          page: this.getPage,
        });

        if (request.success) {
          if (request.data.length) {
            this.postStore(request.data);
            this.page(this.getPage + 1);
          } else this.haveNotData = true;
        }*/

        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.text-muted {
  color: #6c757d !important;
}

.small,
small {
  font-size: 80%;
  font-weight: 400;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.border-dark {
  border-color: #343a40 !important;
}
.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.flex-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.rounded-circle {
  border-radius: 50% !important;
}

img {
  vertical-align: middle;
  border-style: none;
}
</style>