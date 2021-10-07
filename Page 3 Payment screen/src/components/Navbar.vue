<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="wight" class="border-bottom">
    <b-navbar-brand href="#">
    <img src="@/assets/logo.png" class="logo " alt="logo"> 

    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      
      <b-navbar-nav class="ml-auto">
           <b-navbar-nav>
      <b-nav-form class="mr-50">
          <b-form-input size="sm" class="mr-sm-50 " placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
         </b-navbar-nav>
 <b-navbar-nav>
       <svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#heart-fill"/>
</svg>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#" >Market</b-nav-item>
      </b-navbar-nav>
       

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em></em>
             <img src="@/assets/masoud.jpg" class="user_img rounded-circle" alt="Cinque Terre"> 
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
.user_img{
     width:40px;
    height: 40px;
}
.logo{
   width:60px;
    height: 60px;
}
</style>