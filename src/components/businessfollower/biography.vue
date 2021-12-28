<template>
  <div>
    <!-- {{bio}} -->

    <b-alert v-if="edited" show> {{ successmsg }} </b-alert>

    <span class="float-right">
      <button
        type="button"
        class="btn btn-outline-primary edit-btn"
        v-if="!editing"
        @click="edit(1)"
        variant="primary"
        size="sm"
      >
        {{ $t("general.Edit_Profile") }}
      </button>
    </span>

    <br />
    <br />
    <br />

    <p class="text">{{ bio.user.biography }}</p>

    <div v-if="editing">
      <b-form @submit.prevent="save">
        <b-form-select class="mb-2" size="sm" v-model="info_access" :options="options"></b-form-select>
        <b-form-textarea
          required
          id="textarea"
          v-model="bio.user.biography"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <div class="pt-2 action-btn">
          <b-button variant="success" type="submit">Save</b-button>
          <b-button class="ml-2" variant="primary" @click="edit(0)">Cancel</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,

      successmsg: '',
      edited: false,
      access: null,
      info_access: null,
      options: [
        { value: null, text: 'Select' },
        { value: 'private', text: 'Private' },
        { value: 'public', text: 'Public' },
      ],
      biography: {
        info_access: null,
        description: null,
      },
    };
  },
  computed: {
    bio() {
      return this.$store.state.profile.profile_about;
    },
  },
  created() {
    this.$store
      .dispatch('profile/loadUserBiography', null)
      .then(response => {
        console.log(response, 'Load User Biography response (3) +++++++');
      })
      .catch(error => {
        console.log(error, 'Error from server or from browser error(2)++++');
        throw error;
      })
      .finally(() => {
        this.biography = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBiography']));
        console.log(this.biography, 'Finally load User Biography ++++++++++++');
      });
  },

  methods: {
    edit(value) {
      if (value === 0) {
        this.biography = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBiography']));
        console.log(this.biography, 'Update Biography User Cancel ++++++');
        this.edited = true;
        this.successmsg = 'Profile was succesfully Cancelled';
        setInterval(() => {
          this.edited = false;
        }, 2000);
      }
      this.editing = !this.editing;
    },
    save() {
      this.edited = true;
      this.successmsg = 'Profile was succesfully Edited';
      this.editing = false;
      setInterval(() => {
        this.edited = false;
      }, 2000);
      console.log(this.biography, 'profile about save message start+++++++++');
      console.log(this.info_access);
      this.$store
        .dispatch('profile/updateUserBiography', {
          info_access: this.info_access,
          description: this.bio.user.biography,
        })
        .then(response => {
          console.log(response, ...['edit user biography after response (3) +++++', 'edit user biography endddd ++++']);
        })
        .catch(error => {
          console.log(error, 'erreur lie au navigateur ou au serveur error(2) +++++++');
          this.biography = JSON.parse(JSON.stringify(this.$store.getters['profile/getProfileAboutBiography']));
        });
    },
  },
};
</script>

<style scoped>
.ebio :hover {
  font-size: 55px;
  color: #e75c18;
}
.edit-btn {
  margin-left: 660px;
  margin-bottom: 20px;
}
.action-btn {
  margin-left: 80%;
}
@media only screen and (max-width: 768px) {
  .edit-btn {
    margin-left: 129px;
  }
  .action-btn {
    display: flex;
    flex-direction: row;
    margin-left: 38%;
  }
}
</style>
