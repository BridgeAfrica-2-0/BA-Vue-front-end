<template>
  <div>
    <b class="education">{{ $t("profilefollower.Education") }}</b>
    <hr />
    <div
      class="row"
      v-for="education in this.$store.getters[
        'follower/getProfileAboutEducationAndWorks'
      ]"
      :key="education.school_name"
    >
      <b-list-group-item
        class="d-flex align-items-center mb-4 border-0 education"
      >
        <!--    <b-avatar class="mr-3 avatar"></b-avatar> -->
        <div class="datails">
          <div class="row">
            <div class="col">
              <span class="mr-auto">
                <b> {{ education.school_name }}</b>
              </span>
              <p>
                {{ $t("profilefollower.Duration_From") }}
                {{ education.start_year }} To {{ education.end_year }}
              </p>

              <p>
                {{ education.description }}
              </p>
            </div>
          </div>
        </div>
      </b-list-group-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.education {
  border: none;
  font-size: 14px;
  font-family: Helvetica;
}
.avatar {
  position: relative;
  top: -28px;
}
p {
  font-size: 14px;
  font-family: Helvetica;
}
@media only screen and (max-width: 768px) {
  .avatar {
    position: relative;
    top: -45px;
  }
  .education {
    margin-left: 20px;
    font-size: 12px;
  }
  p {
    font-size: 12px;
    font-family: Helvetica;
  }
}
</style>
