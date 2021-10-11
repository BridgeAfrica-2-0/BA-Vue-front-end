<template>
     <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">J. Circlehead</span>
        <Button title="Send" style="width:20%" styleClass="btn shadow  btn btn-bg flexx pobtn p-2 btn-primary btn-sm btn-block btn-primary btn-sm btn-block" /> 
      </b-list-group-item>
</template>


<script>
import Button from "@/components/Button"

export default {
  name:"Link",

  components:{
    Button,
  },

}
</script>
