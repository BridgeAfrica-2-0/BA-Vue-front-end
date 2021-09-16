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
                    <b-th class="a-text username"> Account Type </b-th>
                  
                    <b-th> <b-button  variant="outline" class=" btn-outline-primary"> change  </b-button> </b-th>
                  </b-tr>
                </b-thead>

                <b-tbody>
                  <b-tr>
                    <b-td class="a-text"> Basics </b-td>
                   
                    <b-td class="a-text">
                      <b-link href="#">Upgrade</b-link>
                    </b-td>
                  </b-tr>
                  <br />

                  <b-tr>
                    <b-td class="a-text"> Premium</b-td>
                   
                    <b-td><b-link href="#"> Not Available </b-link> </b-td>
                  </b-tr>

                  <br />

                  

                  <br />

                
                </b-tbody>
              </b-table-simple>






            </div>

            <b-button  variant="outline" class=" btn-outline-primary"> Delete Account  </b-button>
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
  name: "website"
};
</script>

<style scoped></style>
