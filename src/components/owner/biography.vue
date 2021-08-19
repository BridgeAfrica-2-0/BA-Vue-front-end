<template>
  <div>
    <b-alert v-if="edited" show> {{ successmsg }} </b-alert>
    <b-button
      v-if="!editing"
      class="edit-btn float-right"
      @click="edit(1)"
      variant="outline-primary"
      size="sm"
      >Edit Profile</b-button
    >
    <br />
    <br />
    <br />
    <div v-if="editing">
      <b-form @submit.prevent="save">
        <div style="width: 150px">
          <b-form-select
            required
            class="mb-2"
            size="sm"
            v-model="biography.info_access"
            :options="options"
          ></b-form-select>
        </div>
        <b-form-textarea
          required
          id="textarea"
          v-model="biography.description"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <div class="pt-2 action-btn">
          <b-button variant="success" type="submit">Save</b-button>
          <b-button class="ml-2" variant="primary" @click="edit(0)"
            >Cancel</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("Load User Biography start+++++++");
    this.$store.dispatch('loadUserBiography', null)
            .then( response => {
              console.log( response )
              this.biography = JSON.parse( JSON.stringify( this.$store.getters.getProfileAboutBiography ));
              console.log(this.biography);
              console.log( 'Load User Biography end+++++++')
            }).catch(error => {
              console.log('Error from server or from browser ++++')
              console.log(error);
              this.biography = {
                info_access: 'private',
                description: 'No Description',
              }
    })

  },
  data() {
    return {
      editing: false,
      successmsg: "",
      edited: false,
      access: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ],
      biography: {
        info_access: null,
        description: null
      }
    };
  },
  methods: {
    edit(value) {
      if( value === 0 ){
        console.log('Update Biography User Cancel');
        this.biography = JSON.parse(JSON.stringify( this.$store.getters.getProfileAboutBiography ))
        console.log( this.biography )
        this.edited = true;
        this.successmsg = "Profile was succesfully Cancelled";
        setInterval(() => {
          this.edited = false;
        }, 2000);
      }
      this.editing = !this.editing;

    },
    save() {
      this.edited = true;
      this.successmsg = "Profile was succesfully Edited";
      this.editing = false;
      setInterval(() => {
        this.edited = false;
      }, 2000);
      console.log("profile about save message start+++++++++");
      console.log(this.biography);
      this.$store
        .dispatch("updateUserBiography", {
          info_access: this.biography.info_access,
          description: this.biography.description
        })
        .then(response => {
          console.log("edit user biography after response (3) +++++");
          console.log(response);
          console.log("edit user biography endddd ++++");
        })
        .catch(error => {
          console.log("erreur lie au navigateur ou au serveur error(2)");
          console.log(error);
          this.biography = JSON.parse(JSON.stringify( this.$store.getters.getProfileAboutBiography ))
        });
    }
  }
};
</script>

<style scoped>
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
