<template>
  <b-container class="container-fluid">
    <b-container class="">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="8">
            <div>
              <b-table-simple hover small caption-top responsive>
                <b-thead>
                  <b-tr>
                    <b-th class="a-text">{{$t("buinessf.Website_Title")}}</b-th>
                    <b-th class="a-text">{{$t("buinessf.Website_Title_Goes_here")}}</b-th>
                    <b-th> </b-th>
                  </b-tr>
                </b-thead>

                <b-tbody>
                  <b-tr>
                    <b-td class="a-text">{{$t("buinessf.Fav_Icon")}}</b-td>
                    <b-td class="a-text">{{$t("buinessf.Not_set")}}</b-td>
                    <b-td class="a-text">
                      <b-link href="#">{{$t("buinessf.Upgrade")}}</b-link>
                    </b-td>
                  <br />

                  <b-tr>
                    <b-td class="a-text">{{$t("buinessf.Subdomain_Name")}}</b-td>
                    <b-td class="a-text">www.website.com/subdomain</b-td>
                    <b-td><b-link href="#">{{$t("buinessf.Upgrade")}}</b-link> </b-td>
                  </b-tr>

                  <br />

                  <b-tr>
                    <b-td class="a-text">{{$t("buinessf. Connect_Your_Domain")}}</b-td>
                    <b-td class="a-text">{{$t("buinessf.Not_Connected")}}</b-td>
                    <b-td> <b-link href="#">{{$t("buinessf.Upgrade")}}</b-link> </b-td>
                  </b-tr>

                  <br />

                  <b-tr>
                    <b-td class="a-text">HTTPS</b-td>
                    <b-td class="a-text">{{$t("buinessf.Your_Site_is_not_scured")}} </b-td>
                    <b-td> <b-link href="#">{{$t("businessf.Upgrade")}}</b-link> </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
          </b-col>

          <b-col cols="4">
            <p class="web-template-label">{{$t("buinessf.Website_Template")}}</p>

            <b-link href="#" class="f-left">{{$t("buinessf.Visit_Website")}}</b-link>
            <b-link href="#" class="f-right">{{$t("buinessf.Open_Editor")}}</b-link>

            <img
              class="mb-2 img-fluid"
              src="@/assets/img/web-template.jpg"
              alt="Fluid image"
            />
          </b-col>
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
