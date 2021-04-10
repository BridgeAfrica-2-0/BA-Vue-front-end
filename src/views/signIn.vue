<template>
<div class="demo">
  



  <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </ly-tab>
  
 
  <div v-if="selectedId == '1'" >       </div> 



  <ly-tab
    v-model="bottomSelectedId"
    :items="bottomItems"
    :options="bottomOptions"
    >
  </ly-tab>
</div>
</template>

<script>

export default {
  name: 'Demo',
  data () {
    return {
      selectedId: 4,
      bottomSelectedId: 0,
      items: [
        {label: 'Home '},
        {label: 'Inbox'},
        {label: 'Notification'},
        {label: 'Community Management'},
        {label: 'Pending Post'},
        {label: 'Keyword Alert'},
        {label: 'Roles'},
        {label: 'Settings'},
        
      ],
      options: {
        activeColor: '#1d98bd'
      },
      bottomItems: [
        {text: 'Home', icon: ' ly-icon-home'},
        {text: 'blec', icon: 'ly-icon ly-icon-icon--'},
        {text: 'becky', icon: 'ly-icon ly-icon-sousuo'},
        {text: 'yoo', icon: 'ly-icon ly-icon-wode'}
      ],
      bottomOptions: {
        activeColor: '#1d98bd',
        fixBottom: true,
        labelKey: 'text'
      }
    }
  },

  methods: {
    handleChange (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style>

</style>
