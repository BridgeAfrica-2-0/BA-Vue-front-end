<template>
  <div>
    <b-card v-if="networkshow">
      <div class="networks ml-4">
        <div class="ml-2 mt-2" v-for="post in posts" :key="post.id">
          <b-card
          
            title="Group name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-5 prod"
          >
            <b-card-text>
              <b-row>
                <b-col>
                  <p class="small">public - 397 Members</p>
                </b-col>

                <p class="approved small">Approved</p>
              </b-row>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </b-card>
    <div class="no-network" v-if="networkShow">
      <div class="white-box">
        <h2>Builds networks around your Business</h2>
        <p>Create network to stay in touch with just the people</p>
        <p>you want Engage, share, Make Plans and much more</p>
        <b-button class="btn" variant="primary">Add network</b-button>
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
        },
      ],
    };
  },
  methods: {
    opennetwork() {
      this.networkShow = false;
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
}

.white-box {
  position: relative;
  width: 60%;
  background-color: #fff;
  min-height: 200px;
  left: 200px;
  top: 100px;
  padding: 20px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

h2,
p {
  text-align: center;
}

.btn {
  margin-left: 250px;
}
.networks {
  display: flex;
  flex-wrap: wrap;
}

.approved {
  color: green;
}
.pending {
  color: yellow;
}

.network:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}

.network:hover .text-static {
  display: none;
}

.btn-view {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-view:focus {
  outline-color: transparent;
  border: none;
}

.network-name {
  color: #e75d29;
  text-align: center;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.sp:hover .pic-name {
  opacity: 1;
}

.pic {
  cursor: pointer;
  background-color: transparent;
}
.pic:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.create {
  position: relative;
  height: 210px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;
  width: 300px;
  top: 5px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10;
}

.text {
  margin-top: 50px;
}

.network {
  height: 190px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .networks {
    position: relative;
    left: -25px;
  }

  .network {
    margin-top: 20px;
  }

  .create {
    height: 150px;
  }
  .text {
    margin-top: 30px;
  }

  .white-box {
    position: relative;
    width: 80%;
    background-color: #fff;
    min-height: 200px;
    left: 35px;
    top: 100px;
    padding: 20px;
  }
  .btn {
    margin-left: 60px;
  }
}
</style>
