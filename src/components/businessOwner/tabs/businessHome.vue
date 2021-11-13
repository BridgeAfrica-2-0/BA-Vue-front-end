<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4">
        <Intro />

        <comunitiDashboard />

        <br />

        <b-card>
          <div class="text-center ">
            <span class="username text-center mb-3">
              <b> Mettez à niveau votre compte d'entreprise </b>
            </span>
          </div>

          <div class="container">
            <span class="text text-left">
              <br />
              Gagnez plus d'argent en débloquant les fonctionnalités de votre marché où vous
              peut vendre des produits et services directement au client et recevoir
              paiements instantanés
            </span>
          </div>
          <img src="@/assets/img/buynow.png" class="buynow" alt="buy now" />
          <div class="container text-center">
            <img
              src="@/assets/img/fruits.jpg"
              class="img-fluid  banner"
              alt="Kitten"
            />

            <b-button variant="primary" class="text-center mt-3">
              Mettre à jour maintenant
            </b-button>
          </div>
        </b-card>
      </b-col>

      <b-col md="8" lg="7" xl="8">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import comunitiDashboard from "./comunitiDashboard";
//import Personalise from "./personalise";
import Post from "../ownerPost";
export default {
  name: "posts",
  components: {
    Intro,

    comunitiDashboard,
    // Personalise,
    Post,
  },
};
</script>

<style scoped>
.buynow {
  width: 120px;
  margin-bottom: -80px;
  margin-left: -10px;
  position: relative;
}
</style>
