<template>
  <a
    class="ly-tab-item"
    :style="$parent.value === id ? activeStyle : {}"
    @click="onItemClicked">
    <div class="ly-tab-item-icon" v-if="$parent.fixBottom"><slot name="icon"></slot></div>
    <div class="ly-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'LyTabItem',
  computed: {
    activeStyle () {
      return {
        color: "#e75c18" 
      }
    }
  },
  data () {
    return {
      id: (this.$parent.$children.length || 1) - 1
    }
  },
  methods: {
    onItemClicked () {
      this.$parent.$emit('input', this.id)
    }
  }
}
</script>

<style>

@media only screen and (min-width: 768px) {
.ly-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  cursor: default;

  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 16px;
    Line-height:20px 
   
    
    

}

}


@media only screen and (max-width: 768px) {
   

   .ly-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  cursor: default;

  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 12px;
    Line-height:20px 
   
    
    

}

}

.ly-tab-item-icon {
  margin: 0 auto 5px;
}




</style>


