<template>
  <div>
    <b-list-group-item class="d-flex align-items-center mb-4 biography ">
      <div>
        <div class="row">
          <div class="col">
            <p>{{ defaultBio }}</p>
          </div>
        </div>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultBio: "no additional infomation to show !!",
    };
  },
  methods: {},
};
</script>

<style scoped>
.biography {
  border: none;
}
.edit-btn {
  margin-left: 660px;
  margin-bottom: 20px;
}
.action-btn {
  margin-left: 80%;
}

@media only screen and (max-width: 600px) {
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
