<template>
  <div>
    <b-alert v-if="edited" show> {{ successmsg }} </b-alert>
    <b-button
      v-if="!editing"
      class="edit-btn float-right"
      @click="edit"
      variant="outline-primary"
      size="sm"
      >Edit Profile</b-button
    >
    <br />
    <br />
    <br />
<!--    <p v-if="true">-->
<!--      {{ biography }}-->
<!--    </p>-->
    <div v-if="editing">
      <b-form @submit="save">
        <div style="width: 150px">
          <b-form-select
            required
            class="mb-2"
            size="sm"
            v-model="selected"
            :options="options"
          ></b-form-select>
        </div>
        <b-form-textarea
          required
          id="textarea"
          v-model="biography"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <div class="pt-2 action-btn">
          <b-button variant="success" type="submit">Save</b-button>
          <b-button class="ml-2" variant="primary" @click="edit(false)"
            >Cancel</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      editing: false,
      selected: null,
      successmsg: "",
      edited: false,
      biography:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, aliquid cupiditate fugit similique laboriosam, expedita, voluptatibus dolorem atlibero ipsam illo molestiae. Voluptates quisquam vitae, aperiam voluptatem ad enim ducimus praesentium fuga quas unde ea quasi obcaecati eumlaboriosam eos nesciunt exercitationem voluptatibus cupiditate sunt totam?Dolor voluptatem repudiandae quos.",
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ]
    };
  },
  methods: {
    edit() {
      this.editing = !this.editing;
    },
    save() {
      this.edited = true;
      this.successmsg = "Profile was sccesfully Edited";
      this.editing = false;
      setInterval(() => {
        this.edited = false;
      }, 1000);
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
