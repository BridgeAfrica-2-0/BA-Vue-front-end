<template>
  <b-container class="container-fluid">
    <b-container class="text">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" md="12">
            <div>
              <b-table-simple hover small caption-top responsive>
                <b-thead>
                  <b-tr>
                    <b-th class="a-text username"> Type de compte </b-th>

                    <b-th>
                      <b-button variant="outline" class="btn-outline-primary">
                        monnaie
                      </b-button>
                    </b-th>
                  </b-tr>
                </b-thead>

                <b-tbody>
                  <b-tr>
                    <b-td class="a-text"> Notions de base </b-td>

                    <b-td class="a-text">
                      <b-link href="#">Améliorer</b-link>
                    </b-td>
                  </b-tr>
                  <br />

                  <b-tr>
                    <b-td class="a-text"> Prime</b-td>

                    <b-td><b-link href="#"> Pas disponible </b-link> </b-td>
                  </b-tr>

                  <br />

                  <br />
                </b-tbody>
              </b-table-simple>
            </div>

            <b-button variant="outline" class="btn-outline-primary" @click="deleteAccount()">
              Supprimer le compte
            </b-button>
          </b-col>

          <!--

          <b-col cols="12" md="4">
            <p class="web-template-label">Website Template</p>

            <b-link href="#" class="f-left">Visit Website</b-link>
            <b-link href="#" class="f-right">Open Editor</b-link>

            <img
              class="mb-2 img-fluid"
              src="@/assets/img/web-template.jpg"
              alt="Fluid image"
            />
          </b-col>
-->
        </b-row>
      </b-container>

      <b-container class="m-footer">
        <Footer />
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "website",
  data() {
			return {
        url: null,
			}
	},

  computed: {
    accounts() {
      return this.$store.state.businessAccountType.accounts;
    }
  },

  mounted(){
    this.url = this.$route.params.id;
    this.getAccounts();
  },

  methods:{
    getAccounts() {
    this.$store
      .dispatch("businessAccountType/getaccounts", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    deleteAccounts: function(){
      let formData = new FormData();
      // formData.append('name', this.form.name);
      // formData.append('role', this.form.role);
      this.axios.delete("business/account/delete/"+this.url, formData)
      .then(() => {
        console.log('ohh yeah');
        this.displayEditor();
        this.flashMessage.show({
          status: "success",
          message: "Editor Deleted"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Delete Editor"
        });
      });
		},
  }
};
</script>

<style scoped></style>
