<template>
  <div>
    <img
      class="card-img btn p-0"
      :src="media[0]"
      :alt="alt"
      @click="$bvModal.show(id)"
    />

    <b-modal :id="id" title="Details">
      <img class="card-img" :src="media[0]" alt="alt" />
      <h4>Post Description</h4>
      <p class="my-4">
        {{ content }}
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

            <b-dropdown-item
             :href="media"
             :download="(media[0].split('/'))[(media[0].split('/')).length-1]"
            >
              Download
            </b-dropdown-item>

            <b-dropdown-item
              v-for="action in imageActions"
              :key="action.id"
              :href="action.link+id"
              @click.prevent="(action.method)(id)"
            >
              {{ action.action }}
            </b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Image-Item",

  props: {
    id: {
      type: String,
      required: false,
      default: "modal-8",
    },

    media: {
      type: Array,
      required: false,
      default: require("@/assets/img/m1.jpg"), 
    },

    // alt: {
    //   type: String,
    //   required: false,
    //   default: "img-alt",
    // },

    // postTitle: {
    //   type: String,
    //   required: false,
    //   default: "Post Description",
    // },
    content: {
      type: String,
      required: false,
      default: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        quisquam sequi, ullam aliquam ab illo suscipit, earum quam,
                        doloribus id sit consequuntur tempora molestiae blanditiis.`,
    },
  },

  data() {
    return {
      imageActions: [
        {
          id: 2,
          link: "makeProfile/picture/",
          action: "Make Profile Picture",
          method: this.makeProfile,
        },
        {
          id: 3,
          link: "makeCover/picture/",
          action: "Make Cover Photo",
          method: this.makeCoverPhoto,
        },
        { id: 4, link: "albumPicture/delete/", action: "Delete", method: this.delete },
      ],
    };
  },

  methods: {
    makeProfile(id) {
      this.$emit("makeProfile", id);
    },
    makeCoverPhoto(id) {
      this.$emit("makeCoverPhoto", id);
    },
    delete(id) {
      this.$emit("deletePicture", id);
    },
  },
};
</script>
