<template>
  <div>
    <b-card title="" header-tag="header" footer-tag="footer">
      <h6 class="mb-2">
        <b>
          <b-icon
            icon="exclamation-circle"
            variant="primary"
            class="icon-size"
          ></b-icon>
          </b
        >
      </h6>

      <b-card-text>
        <p>
          <b-icon
            icon="briefcase-fill"
            class="icon-size"
            variant="primary"
          ></b-icon>
          Work at: 
              <span
                class="text"
                v-for="exp in info.user_experience.slice(0, 1)"
                :key="exp.id"
              >
                {{ exp.company_name }}
              </span>
        </p>
        <p>
          <b-icon icon="book-fill" class="icon-size" variant="primary"></b-icon>
          Studied at:      <span
                v-for="edu in info.user_education.slice(0, 1)"
                :key="edu.id"
                class="text"
              >
            
                {{ edu.school_name }}</span
              >
        </p>
        <p>
          <b-icon
            icon="house-fill"
            class="icon-size"
            variant="primary"
          ></b-icon>
          Home Town Name {{ info.user.town }}
        </p>
        <p>
          <b-icon
            icon="geo-alt-fill"
            class="icon-size"
            variant="primary"
          ></b-icon>
          Current City Name: {{ info.user.city }}
        </p>
        <p>
          <b-icon
            icon="people-fill"
            class="icon-size"
            variant="primary"
          ></b-icon>
         Community:  {{ info.user.community }}
        </p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  computed:{
     info :function(){
        return this.$store.getters['follower/getUserPost'];
      }
  }
};
</script>

<style></style>
