<template>
  <div>
    <b-card class="card" v-if="!networkShow">
      <span v-for="(network, index) in data" :key="index">
        <b-row class="business mt-3">
          <b-col>
            <b-avatar variant="primary" text="BV"></b-avatar>
          </b-col>
          <b-col class="min ">
            <p>
              <strong>Business </strong> <br />
              <small>
                <span>Business category - 36k Followers</span>
              </small>
            </p>
          </b-col>
          <b-col class="buttons">
            <span v-if="network.type == 'minus'" class="box ml-5">
              <b-button class="community ml-5" size="sm" variant="primary">
                <b-icon icon="dash-circle" class="pr-1"></b-icon>
                community
              </b-button>

              <b-button size="sm" class="ml-5 mb-1 mt-2" variant="primary">
                <b-icon icon="chat"></b-icon> Message
              </b-button>
            </span>
            <span v-if="network.type == 'plus'">
              <b-button
                class="ml-5 mb-1 mt-2 community"
                size="sm"
                variant="primary"
              >
                <b-icon icon="plus-circle" class="pr-1"></b-icon>
                Community
              </b-button>
            </span>
          </b-col>
        </b-row>
      </span>
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
      data: [{ type: "minus" }, { type: "plus" }],
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

.business {
  border-bottom: 1px solid #ccc;
}
.button {
  margin-left: 120px;
  display: flex;
}
.lnk {
  margin-left: 260px;
}
p {
  margin-left: -210px;
}

.drop {
  left: 1px;
}
.buttons {
  margin-left: 120px;
}
.community {
  border: none;
  display: flex;
}

@media only screen and (max-width: 768px) {
  .box {
    position: relative;
    left: -62px;
  }
  .button {
    margin-left: 0px;
  }
  .lnk {
    margin-left: 50px;
  }
  p {
    margin-left: -50px;
    font-size: 15px;
  }
  .drop {
    left: 10px;
  }
  .community {
    position: relative;
    top: 8px;
  }

  .btns {
    margin-bottom: 20px;
    left: 45px;
  }
  .min {
    margin-left: -50px;
  }
}
</style>
