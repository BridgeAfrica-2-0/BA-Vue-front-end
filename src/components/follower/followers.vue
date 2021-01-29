<template>
  <div>
    <div class="row">
      <div class="col">
        <b-list-group-item
          class="d-flex align-items-center mb-4 "
          style="border: none"
        >
          <b-avatar class="mr-3"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto"> <b>Username</b> </span>
              </div>
            </div>
          </div>
        </b-list-group-item>
      </div>
      <div class="col-2">
           <b-button class="btn" variant="outline-primary">
               <b-icon icon="chat" class="mr-1"></b-icon>
               Message</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
 .btn{
   display: flex;
   margin-left: -70px;
  }
}
</style>
