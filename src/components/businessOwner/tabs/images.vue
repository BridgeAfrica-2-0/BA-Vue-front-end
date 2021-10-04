<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <div class="img-gall" v-for="image in image" :key="image.id">
          <a href="#!"
            ><img
              class="card-img btn p-0"
              :src="image"
              :key="image.id"
              alt=""
              @click="testing(image.id)"
          /></a>
        </div>
        <b-modal v-model="mymodal" id="modal" title="Details">
          <div>
            <transition-group name="fade" tag="div">
              <div v-for="i in [currentIndex]" :key="i">
                <a :href="currentImg"><img :src="currentImg"/></a>
              </div>
            </transition-group>
            <a class="prev" @click="prev" href="#">&#10094; Previous</a>
            <a class="next" @click="next" href="#">&#10095; Next</a>
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </div>
        </b-modal>

        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img btn p-0"
              src="@/assets/img/m1.jpg"
              alt=""
              v-b-modal.modal-8
          /></a>

          <b-modal id="modal-8" title="Details">
            <img class="card-img" src="@/assets/img/m1.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown m-0 p-0">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img btn p-0"
              src="@/assets/img/m2.jpg"
              alt=""
              v-b-modal.modal-a
          /></a>

          <b-modal id="modal-a" title="Details">
            <img class="card-img" src="@/assets/img/m2.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>

        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img btn p-0"
              src="@/assets/img/m3.jpg"
              alt=""
              v-b-modal.modal-b
          /></a>

          <b-modal id="modal-b" title="Details">
            <img class="card-img" src="@/assets/img/m3.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img"
              src="@/assets/img/m4.jpg"
              alt=""
              v-b-modal.modal-c
          /></a>
          <b-modal id="modal-c" title="Details">
            <img class="card-img" src="@/assets/img/m4.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img"
              src="@/assets/img/m5.jpg"
              alt=""
              v-b-modal.modal-d
          /></a>
          <b-modal id="modal-d" title="Details">
            <img class="card-img" src="@/assets/img/m5.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img"
              src="@/assets/img/m6.jpg"
              alt=""
              v-b-modal.modal-e
          /></a>
          <b-modal id="modal-e" title="Details">
            <img class="card-img" src="@/assets/img/m6.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img"
              src="@/assets/img/m7.jpg"
              alt=""
              v-b-modal.modal-f
          /></a>
          <b-modal id="modal-f" title="Details">
            <img class="card-img" src="@/assets/img/m7.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>

        <div class="img-gall">
          <a href="#!"
            ><img
              class="card-img"
              src="@/assets/img/m8.jpg"
              alt=""
              v-b-modal.modal-g
          /></a>
          <b-modal id="modal-g" title="Details">
            <img class="card-img" src="@/assets/img/m8.jpg" alt="" />
            <h4>Post Title</h4>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
              doloribus id sit consequuntur tempora molestiae blanditiis.
            </p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <fas-icon
                      class="drop-color font-weight-bolder"
                      :icon="['fas', 'ellipsis-v']"
                    />
                  </template>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data: function() {
    return {
      model: 0,
      mymodal: false,
      activeImage: 0,

      timer: null,
      currentIndex: 0,
      imagee: [
        {
          id: "1",
          img: require("@/assets/img/m1.jpg"),
        },
        {
          id: "2",
          img: require("@/assets/img/m2.jpg"),
        },
        {
          id: "3",
          img: require("@/assets/img/m3.jpg"),
        },
        {
          id: "4",
          img: require("@/assets/img/m4.jpg"),
        },
        {
          id: "5",
          img: require("@/assets/img/m5.jpg"),
        },
        {
          id: "6",
          img: require("@/assets/img/m6.jpg"),
        },
        {
          id: "7",
          img: require("@/assets/img/m7.jpg"),
        },
        {
          id: "8",
          img: require("@/assets/img/m8.jpg"),
        },
      ],
      image: [
        require("@/assets/img/m1.jpg"),
        require("@/assets/img/m2.jpg"),
        require("@/assets/img/m3.jpg"),
        require("@/assets/img/m4.jpg"),
        require("@/assets/img/m5.jpg"),
        require("@/assets/img/m6.jpg"),
        require("@/assets/img/m7.jpg"),
        require("@/assets/img/m8.jpg"),
      ],
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800",
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg",
      ],
      index: 0,
    };
  },

  mounted: function() {
    //this.startSlide();
  },

  methods: {
    testing(id) {
      console.log(id);
      this.mymodal = true;
    },

    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.image[Math.abs(this.currentIndex) % this.image.length];
    },
  },
};
</script>

<style>
.text-design {
  align-items: first baseline;
}

.drop-color {
  color: black;
}

/* slider css */

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 600px;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

/* end of slider css */

@media (min-width: 960px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 20%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  @media (min-width: 1400px) {
    .lb-grid {
      height: 274px;
      margin-bottom: 8px;
    }
  }

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 19.1%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1331px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 31%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

@media (max-width: 762px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

.drag-textt {
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
  color: #000;
}
</style>
