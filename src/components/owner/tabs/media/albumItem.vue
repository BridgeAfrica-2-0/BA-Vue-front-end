<template>
  <div :id="id" class="createp img-gall predit2" @click="showAlbum(id)">
    <img class="card-img" src="@/assets/img/wankue-filler.jpg" alt="" />
    <div class="createdesc botmedia">
      <div class="botmediades">
        <h6>{{ albumName }}</h6>
        <p>{{ albumNumberOfItems }}</p>
      </div>
    </div>

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

            <b-dropdown-item
              v-for="action in actions"
              :key="action.id"
              :href="action.link + id"
              @click.prevent="action.method(id)"
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
  name: "album-item",

  props: {
    id: {
      type: String,
      required: false,
      default: "album-profile",
    },

    albumName: {
      type: String,
      required: false,
      default: "Profile picture",
    },

    albumNumberOfItems: {
      type: Number,
      required: false,
      default: 32,
    },
  },

  data() {
    return {
      actions: [
        {
          id: 1,
          link: "makeProfile/picture/",
          action: "Edit",
          method: this.makeProfile,
        },
        {
          id: 4,
          link: "albumPicture/delete/",
          action: "Delete",
          method: this.delete,
        },
      ],
    };
  },

  methods: {
    showAlbum(idAlbum) {
      this.$emit("showAlbum", idAlbum);
    },
  },
};
</script>