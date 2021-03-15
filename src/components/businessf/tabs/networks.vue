<template>
  <div>
    <b-card v-if="networkshow">
      <div class="networks ml-4 box">
        <div class="ml-4 sub" v-for="(post, index) in posts" :key="index">
          <b-card class="mb-2">
     
              <b-img width="230" :src="post.image"></b-img>
  
            <div>
              <h1>{{ post.title }}</h1>
              <b-row>
                <b-col>
                  <p><small>Public - 397 Members</small></p>
                </b-col>
                <b-col class="col-1">
                  <b-button
                    class="btnz"
                    v-if="post.state"
                    size="sm"
                    variant="primary"
                    ><small>
                      <fas-icon
                        class="mr-2"
                        :icon="['fas', 'check']"
                      />Joined</small
                    ></b-button
                  >
                  <b-button v-if="!post.state" size="sm" variant="success"
                    ><small>
                      <fas-icon
                        class="mr-2"
                        :icon="['fas', 'plus']"
                      />Join</small
                    ></b-button
                  >
                </b-col>
              </b-row>
            </div>
          </b-card>
        </div>
      </div>
    </b-card>
    <div class="no-network" v-if="networkShow">
      <div class="white-box">
        <h2>Builds networks around your Business</h2>
        <p>Create network to stay in touch with just the people</p>
        <p>you want Engage, share, Make Plans and much more</p>
        <b-button class="btn-add" variant="primary">Add Network</b-button>
      </div>
    </div>

    <b-modal hide-footer title="Add network" v-model="showModal">
      <b-form>
        <b-form-input v-model="text" placeholder="network name"></b-form-input>
        <b-form-file class="mt-1" id="file-small" size="sm"></b-form-file>
        <b-button class="mt-2 " variant="primary"> Add</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      networkshow: true,
      showModal: false,
      text: "",
      posts: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
          state: "1",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
          state: "1",
        },
      ],
    };
  },
  methods: {
    openNetwork() {
      this.networkShow = false;
    },

    addNetwork() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.no-network {
  width: 100%;
  height: 500px;
  background-color: #ccc;
  border-radius: 10px;
  padding: 30px;
  margin-top: 10px;
}

.sub {
  width: 280px;
}
.btnz:hover {
  background-color: #e75c18;
  border: none;
  color: black;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

.btn {
  width: 100px;
  margin-top: -20px;
  margin-left: -100px;
}

.networks {
  display: flex;
  flex-wrap: wrap;
}
.network {
  height: 190px;
  cursor: pointer;
}

.btn-add {
  margin-left: 0px;
  margin-top: 10px;
}
@media only screen and (max-width: 768px) {
  .box {
    position: relative;
    left: -62px;
  }
}
</style>
