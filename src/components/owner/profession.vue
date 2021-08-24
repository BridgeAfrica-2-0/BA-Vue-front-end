<template>
  <div>
    <b>Profession</b>
    <hr />
    <b-link class="mt-4 doc" v-b-modal.modal-11>
      <b-icon icon="plus" variant="primary"></b-icon>
      Add Profession</b-link
    >
    <b-list-group-item class="d-flex align-items-center mb-4 b-none">
      <div class="datails">
        <div class="row" v-for="profession in professions" :key="profession.profession">
          <div class="col">
            <span class="mr-auto"> <b>{{ profession.profession }}</b> </span>
          </div>
          <div class="col-1">
            <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
              <b-dropdown-item @click="edit('professions', profession.profession)">Edit</b-dropdown-item>
              <b-dropdown-item @click="delet('professions', profession.profession)">Delete</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </b-list-group-item>

    <b-modal ref="professionModal" id="modal-11" title="Add Profession" @close="cancel" @ok="save">
      <div class="width">
        <b-form-select
          class="mb-2"
          size="sm"
          v-model="professionInput.access"
          :options="options"
        ></b-form-select>
      </div>
      <b-form-input
        class="mt-2 mb-2"
        v-model="professionInput.profession"
        placeholder="Profession"
      ></b-form-input>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ],
      professions: [],
      professionInput: {
        profession: null,
        access: 'private'
      },
      index: null,
    };
  },
  created() {
    console.log( 'Load User Post About Profession')
    this.professions = JSON.parse( JSON.stringify( this.$store.getters.getProfileAboutEducationAndWorks.professions ) ) ;
  },
  methods: {
    cancel() {
      console.log("Cancel Add Profession in User  ++++++");
      this.professions = JSON.parse(
              JSON.stringify(this.$store.getters.getProfileAboutEducationAndWorks.professions)
      );
      console.log( 'esseai d affichage de Observer pour la profession')
      console.log( this.$store.getters.getProfileAboutEducationAndWorks )
      console.log(this.professions);
      this.professionInput = {
        profession: null,
        access: 'private'
      };
      //this.$refs["model-6"].hide();
    },
    save(){
      console.log('Save New Profession User Profile About');
      if( this.index !== null ){
        this.professions[ this.index ] = this.professionInput;
      }else{
        this.professions.push( this.professionInput );
      }

      this.$store.dispatch('updateUserProfession', {
        profession: this.professionInput,
      }).then( response => {
        console.log( response );
        console.log("save new profession user end +++++");
        this.$store.state.userData[0].profile_about.educationAndWorks = this.educationAndWorks;
        this.professionInput = {
          profession: null,
          access: 'private'
        }
      }).catch( error => {
        console.log( error )
        //this.$store.state.userData[0].profile_about.educationAndWorks.professions = this.educationAndWorks.professions;
        this.cancel()
        console.log("not save new profession user end +++++");
      });
      this.$refs['professionModal'].hide();
    },
    delet(type, value) {
      switch (type) {
        case "professions":
          this.professions = this.professions.filter(
                  profession => {
                    return profession.profession !== value;
                  }
          );
          this.$store.state.userData[0].profile_about.educationAndWorks.professions = this.educationAndWorks.professions;
          break;
        default:
          console.log("Aucune Correspondance");
          break;
      }
    },
    edit(type, value) {
      switch (type) {
        case "professions":
          console.log("edit professions");
          this.index = this.professions.findIndex(
                  profession => {
                    return profession.profession === value;
                  }
          );
          console.log(this.index);
          this.professionInput = this.professions[this.index];
          this.$refs["professionModal"].show();
          break;
        default:
          console.log( 'Aucune Correspondance');
          break;
      }
    }
  }

};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
}

.width {
  width: 100px;
}

.b-none {
  border: none;
}

.doc {
  text-decoration: none;
}
</style>
