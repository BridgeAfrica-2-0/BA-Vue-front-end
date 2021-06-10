<template>
  <div>
    <b-list-group-item class="d-flex align-items-center mb-4 style-group">
      <b-avatar class="mr-3 avatar-style"></b-avatar>
      <div>
        <div class="row">
          <div class="col">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero </p>
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
      defaultBio: "",
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

.style-group {
  border: none;
}

.avatar-style {
  position: relative;
  top: -10px;
}
p {
  text-align: left;
  font-family: Helvetica;
  font-size: 14px;
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
  p {
    font-family: Helvetica;
    font-size: 12px;
  }
}
</style>
