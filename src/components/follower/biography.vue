<template>
  <div>
     <b-list-group-item class="d-flex align-items-center mb-4 " style="border: none">
          <b-avatar style="position:relative; top:-10px" class="mr-3"></b-avatar>
          <div>
            <div class="row">
              <div class="col">
                <p>{{ defaultbio }}</p>
              </div>

            </div>
          </div>
        </b-list-group-item >
  </div>
</template>

<script>
export default {
  data() {
    return {
   
      defaultbio:"no additional infomation to show !!",
       
    };
  },
  methods: {
  
  },
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
