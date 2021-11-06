<template>
  <div>
    <div id="app">
      <div id="verify-container">






        
        <div class="c516 c513">



          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6>
                <br />
                howty Circlehead
              </h6>
            </div>

            <div class="c515 c512">
              <div v-if="!complete" class="c516 c513">
                <ul class="MuiList-root MuiList-padding">
                  <div>
                    <div v-if="profession_name == null">

                      <h1 class="no-padding-bottom">What's your background?</h1>
                     

                     <br>
                      <li
                        class="MuiListItem-root MuiListItem-gutters"
                        tabindex="0"
                        v-for="blec in selected"
                        :key="blec.id"
                        @click="profession(blec)"
                        style="
                          margin-bottom: -1px;
                          border: 1px solid rgb(224, 224, 224);
                          font-size: 14px;
                          cursor: pointer;
                        "
                      >
                        <div
                          class="MuiListItemText-root"
                          style="font-size: 14px; cursor: pointer"
                        >
                          {{ blec.name }}
                        </div>
                        <div class="MuiListItemIcon-root">
                          <svg
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                            ></path>
                          </svg>
                        </div>
                      </li>
                    </div>

                    <div v-if="profession_name == 'U.S. Military'">
                      <div v-if="show_branch">
                        <h1 class="no-padding-bottom">What's your Branch?</h1>
                      <br>
                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in background"
                          :key="blec.id"
                          @click="branchh(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetBranch"> back </a>
                      </div>

                      <div v-if="show_status">
                        <h1 class="no-padding-bottom">What's your Status?</h1>
                        <br>
                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in branch"
                          :key="blec.id"
                          @click="setStatus(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>
                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetStatus"> back </a>
                      </div>
                    </div>

                    <div v-else-if="profession_name == 'U.S. Military Family'">
                      <div v-if="show_related">
                        <h1 class="no-padding-bottom">How are you related?</h1>
                      <br>
                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in related"
                          :key="blec.id"
                          @click="relatedd(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetRelated"> back </a>
                      </div>

                      <div v-if="show_related_profession">
                        <h1 class="no-padding-bottom"> What's your Branch </h1>
                        <br>
                        <li   
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in US_Military "
                          :key="blec.id"
                          @click="relatedProfession(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetRelatedProfession"> back </a>
                      </div>
                    </div>




                    <div v-else-if="profession_name=='Law Enforcement' "> 


                      <div v-if="show_departement">      

                        <h1 class="no-padding-bottom"> Select Your Department </h1>
   
                       
  

                        <h4 class="c5137"><strong>State &amp; Local</strong></h4>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in Law_Enforcement_local"
                          :key="blec.id"
                          @click="setdepartment(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>



                      <br>

                      
                        <h4 class="c5137"><strong>Federal</strong></h4>

                           <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in Law_Enforcement_federal"
                          :key="blec.id"
                          @click="setdepartment(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>




                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetDepartement"> back </a>
                     
                      </div>  


    

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Profession</h1>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in common_status"
                          :key="blec.id"
                          @click="setdepartmentStatus(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetLawEnforcementStatus"> back </a> 
                      </div>




                    </div>



                    <!-- governement employee -->

                     <div v-else-if="profession_name=='Government Employee' "> 


                      <div v-if="show_departement">      

                        <h1 class="no-padding-bottom"> Select Your Department </h1>

                          <h4 class="c5137"><strong>State & Local </strong></h4>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in Government_Employee_state"
                          :key="blec.id"
                          @click="setdepartment(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>



                      <br>

                      <h4 class="c5137"><strong>Federal</strong></h4>

                           <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in Government_Employee_federal"
                          :key="blec.id"
                          @click="setdepartment(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>




                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetDepartement"> back </a>
                     
                      </div>  


    

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Profession</h1>
                        <br>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in common_status"
                          :key="blec.id"
                          @click="setdepartmentStatus(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetLawEnforcementStatus"> back </a> 
                      </div>




                    </div>


                    <!-- end of governement employee -->


                    <!-- start of Medical services -->




                       <div v-else-if="profession_name=='Medical Services' "> 


                      <div v-if="show_departement">      

                        <h1 class="no-padding-bottom"> Select Your Department </h1>
<br>
                       

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in Medical_Services"
                          :key="blec.id"
                          @click="setdepartment(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>



                      <br>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetDepartement"> back </a>
                     
                      </div>  


    

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Profession</h1>
                        <br>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in common_status"
                          :key="blec.id"
                          @click="setdepartmentStatus(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetLawEnforcementStatus"> back </a> 
                      </div>




                    </div>


                    <!-- end of medical services -->


                    <!--  start of fire deparetement -->




                    


                       <div v-else-if="profession_name=='Fire' "> 


                      <div v-if="show_departement">      

                        <h1 class="no-padding-bottom"> Select Your Department </h1>

                        <br>
                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in fire"
                          :key="blec.id"
                          @click="setdepartment(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>



                      <br>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetDepartement"> back </a>
                     
                      </div>  


    

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Profession</h1>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in common_status"
                          :key="blec.id"
                          @click="setdepartmentStatus(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetLawEnforcementStatus"> back </a> 
                      </div>




                    </div>


                   <!-- end of fire deparetement -->







                  </div>
                </ul>
              </div>

              <div v-if="complete" class="c515 c512" id="verify-container">
                <div class="c516 c513">















<div v-if="show_status">
                        <h1 class="no-padding-bottom">What's your Status?</h1>
                        <br>
                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in branch"
                          :key="blec.id"
                          @click="setStatus(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>
                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style="
                            width: 20px;
                            height: 20px;
                            vertical-align: bottom;
                            margin: 0px -2px 0px -6px;
                            color: rgb(0, 161, 223);
                          "
                        >
                          <path
                            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                        </svg>
                        <a href="#" @click="resetStatus"> back </a>
                      </div>





















<div class="c515 c512" id="verify-container"><div class="c516 c513"><div><h1 role="heading" aria-level="1"> {{doc_name}}
  
   </h1><p class="no-margin-bottom no-padding-bottom" role="heading" aria-level="2"><span>
     <p> {{doc_description}}.</p>
<p>Make sure the text in the image is legible without smudging or distortions. A bad quality image can delay your approval.</p></span></p><form><div><div style="padding-top: 20px;"><div><input id="desktop-file-input" type="file" accept=".pdf, .jpg, .jpeg, .png, .bmp" aria-label="Upload photo or PDF" style="display: none;"><label for="desktop-file-input"><span class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth" tabindex="0" role="button" aria-disabled="false" label="Upload photo or PDF" id="desktop-file-button" style="box-shadow: none; height: 60px; border-radius: 3px; font-size: 0.875rem; text-transform: none;"><span class="MuiButton-label">Upload photo or PDF</span><span class="MuiTouchRipple-root"></span></span></label></div></div></div></form><p class="no-margin" style="padding: 10px 0px 0px;"><small>We take your security seriously:</small></p><ul style="margin: 0px; padding: 10px 0px 20px 17px; line-height: 13px;"><li style="padding-bottom: 5px;"><small>Your document is encrypted and we don't save any senstive info.</small></li><li style="padding-bottom: 5px;"><small>All documents are instantly deleted from our system after verification</small></li><li><small>If your document contains your social security number, please cross it out. We don't need your social to verify your status.</small></li></ul><div class="c5134"><a class="c5135" target="" href="/"><span><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="width: 20px; height: 20px; vertical-align: bottom; margin: 0px -2px 0px -6px; color: rgb(0, 161, 223);"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>Back</span></a></div></div></div></div>


























                  
   <div>
            <h1 role="heading" aria-level="1">Document Verification</h1>
            <p class="no-margin-bottom no-padding-bottom" role="heading" aria-level="2"><span>Please upload a document
                    from the list below that proves your {{status_name}} status. </span></p>
            <ul class="MuiList-root MuiList-padding" style="padding-top: 20px;">
               

               <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in doc_options"
                          :key="blec.id"
                          @click="selectValidationDocument(blec)"  
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div
                            class="MuiListItemText-root"
                            style="font-size: 14px; cursor: pointer"
                          >
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                              ></path>
                            </svg>
                          </div>
                        </li>

            </ul>


            <div class="c5138"><a class="c5132" @click="showStat" target="" href="#"><span><svg class="MuiSvgIcon-root" focusable="false"
                            viewBox="0 0 24 24" aria-hidden="true"
                            style="width: 20px; height: 20px; vertical-align: bottom; margin: 0px -2px 0px -6px; color: rgb(0, 161, 223);">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                        </svg>Back</span></a></div>
      
      
      
      
        </div>




         <b-button variant="primary" @click=" verifDoc">  switch verif  </b-button>










        





















                  <div>
                    <h1>Great! Let's start the verification process.</h1>
                     <br>
                    <form>
                      <div>
                        <div style="padding-top: 15px">
                          <div
                            class="
                              MuiFormControl-root
                              MuiTextField-root
                              MuiFormControl-fullWidth
                            "
                          >
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root
                                MuiInputLabel-formControl
                                MuiInputLabel-animated
                                MuiInputLabel-filled
                                Mui-error Mui-error
                              "
                              data-shrink="false"
                              >First name</label
                            >

                            <div
                              class="
                                MuiInputBase-root
                                MuiFilledInput-root MuiFilledInput-underline
                                Mui-error Mui-error
                                MuiInputBase-fullWidth MuiInputBase-formControl
                              "
                            >
                              <input
                                aria-invalid="true"
                                name="first-name"
                                v-model="first_name"
                                type="text"
                                aria-label="First name"
                                class="form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style="padding-top: 15px">
                          <div
                            class="
                              MuiFormControl-root
                              MuiTextField-root
                              MuiFormControl-fullWidth
                            "
                          >
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root
                                MuiInputLabel-formControl
                                MuiInputLabel-animated
                                MuiInputLabel-filled
                              "
                              data-shrink="false"
                              >Last name</label
                            >

                            <div
                              class="
                                MuiInputBase-root
                                MuiFilledInput-root MuiFilledInput-underline
                                MuiInputBase-fullWidth MuiInputBase-formControl
                              "
                            >
                              <input
                                aria-invalid="false"
                                v-model="last_name"
                                name="last-name"
                                type="text"
                                aria-label="Last name"
                                class=" form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style="padding-top: 15px">
                          <div
                            class="
                              MuiFormControl-root
                              MuiTextField-root
                              MuiFormControl-fullWidth
                            "
                          >
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root
                                MuiInputLabel-formControl
                                MuiInputLabel-animated
                                MuiInputLabel-filled
                              "
                              data-shrink="false"
                            >
                              Password</label
                            >

    <div class="people-style">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6>
                <br />
                howty Circlehead
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>
                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="chat" class="ico"> </b-icon> Message
                  </b-button>
                </b-col>
                <b-col cols="6">
                  <b-button
                    block
                    size="sm"
                    class="b-background btn2"
                    variant="primary"
                  >
                    <b-icon icon="plus-circle" class="ico"> </b-icon> community
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="people-style">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6>
                <br />
                howty Circlehead
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>
                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="chat" class="ico"> </b-icon> Message
                  </b-button>
                </b-col>
                <b-col cols="6">
                  <b-button
                    block
                    size="sm"
                    class="b-background btn2"
                    variant="primary"
                  >
                    <b-icon icon="plus-circle" class="ico"> </b-icon> community
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      profession_name: null,
      doc_name:null,
      doc_description:null,
      status_name: null,
      branch_name: null,
      show_branch: false,
      show_status: false,
      show_departement:true,
      departemnet_name:null,
      departement_status:null,
      showlawenforcementstatus:false,
      doc_option_msg :null,

      showemail: true,
      show_related: true,
      show_related_profession: false,
      relate_profession_name: null,
      related_name: null,
      complete: false,
      status: null,
      password: null,
      email: null,
      selected: [],
      background: [],
      branch: [],
      doc_options:[],
      
      dob: [],
      first_name: null,
      last_name: null,

      related: [
        { id: 1, name: " Spouse ", value: "spouse" },
        { id: 1, name: " Dependent ", value: "dependent" },
      ],

      military_active:[
        
        { id: 1, name: " Leaving and Earning Statement ", value: "leaving_and_earning", text:"Please upload a recent Leave & Earnings Statement that clearly shows your full name" },
        { id: 1, name: " PCS Orders ", value: "pcs_orders", text:"Please upload a picture of your Permanent Change of Station Orders (PCS) that clearly show your full name." },
        { id: 1, name: " Others ", value: " others ", text:"Please upload an official document that proves your Active Duty status and includes your full name" },
        ],

        military_vetaran:[ { id: 1, name: " State Driver's License/ID ", value: "State_Driver_License/ID", text:"If your state driver's license displays a Veteran designation, you may upload it here. Make sure the picture clearly shows your photo, full name and Veteran designation. If the Veteran designation is on the back of the ID, please upload a picture of both sides."  },
         { id: 1, name: " VA Proof of Service Letter ", value: "VA Proof_of_Service_Letter", text:"Please upload a picture of an official VA Proof of Service Letter that clearly shows your full name and honorable service designation." },
          { id: 1, name: " Veteran Health ID Card (VHIC) ", value: "VHIC", text:"Please upload a picture of your VHIC that clearly shows your full name and photo" },
           { id: 1, name: " Veteran ID Card ", value: "Veteran_ID_Card", text:"Please upload a picture of your federal, state or local Veteran ID card that clearly shows your full name and photo." },
            { id: 1, name: " DD214 ", value: "DD214" , text:"Please upload a picture of your DD214 that clearly shows your full name, date of discharge and character of service. You may redact your social security number" },
              { id: 1, name: " Other ", value: "Other" , text:"Please upload an official document that proves your Active Duty status and includes your full name" },
              ],


              police_active:[ { id: 1, name: " Departement ID ", value: "id", text:'Please upload a picture of your official department ID card that clearly shows your photo (if applicable), full name and status' },
               { id: 1, name: " Pay Stub ", value: "pay_stub", text:"Please upload a recent pay stub that clearly shows the department issuing the payment, your position and your full name. Paystub MUST show your position" },],
        

         fire_active:[
            { id: 1, name: " Departement ID ", value: "departement_id", text:"Please upload a picture of your official department ID card that clearly shows your photo (if applicable), full name and status." },
             { id: 1, name: " IAFF membership card ", value: "IAFF",test:"Please upload a picture of your IAFF Membership Card that clearly shows your full name" },
         ],

      Law_Enforcement_local: [
        {
          id: 1,
          name: " City Police Department ",
          value: "City_Police_Department",
        },
        { id: 1, name: " State Police ", value: "State_Police" },
        {
          id: 1,
          name: " State Highway Patrol ",
          value: "State Highway Patrol",
        },
        { id: 1, name: "Sheriff", value: "Sheriff" },
        {
          id: 1,
          name: " Department of Corrections ",
          value: "Department_of_Corrections",
        },

        { id: 1, name: " Dependent ", value: "dependent" },
      ],

      Law_Enforcement_federal: [
        {
          id: 1,
          name: " Other State/Local Law Enforcement ",
          value: "Other State_Local_Law_Enforcement",
        },
        {
          id: 1,
          name: " Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) ",
          value: "Bureau_of_Alcohol",
        },
        {
          id: 1,
          name: " Drug Enforcement Administration (DEA) ",
          value: "DEA",
        },
        { id: 1, name: " Federal Air Marshal ", value: "FAM" },
        {
          id: 1,
          name: " Federal Bureau of Investigation (FBI) ",
          value: "FBI",
        },
        { id: 1, name: " Federal Bureau of Prisons (BOP) ", value: "BOP" },
        {
          id: 1,
          name: " Immigration and Customs Enforcement (ICE) ",
          value: "ICE",
        },
        {
          id: 1,
          name: " Transportation Security Administration (TSA) ",
          value: "TSA",
        },
        {
          id: 1,
          name: " U.S. Customs and Border Protection (CBP) ",
          value: "CBP",
        },
        { id: 1, name: " U.S. Marshals ", value: "US_Marshals" },
        { id: 1, name: " U.S. Secret Service ", value: "Secret_Service" },
        { id: 1, name: " U.S. Capitol Police ", value: "Capitol_police" },

        {
          id: 1,
          name: " Other Federal Law Enforcement ",
          value: "Other_Federal_Law_Enforcement",
        },
      ],

      fire: [
        { id: 1, name: " National Parks Service (NPS) ", value: "NPS" },
        { id: 1, name: " Bureau of Land Management(BLM) ", value: "BLM" },
        { id: 1, name: " U.S. Forest Service ", value: "US_Forest_Service" },
        {
          id: 1,
          name: " Other Federal Fire Department ",
          value: "Other_Federal_Fire_Department",
        },
        {
          id: 1,
          name: " Municipal Fire Department ",
          value: "Municipal_Fire_Department",
        },
      ],

      Medical_Services: [
        { id: 4, name: "EMT / Paramedic", value: "EMPT" },
        { id: 4, name: "Nurse (RN, NP, CNA, LPN)", value: "nurse" },
        { id: 4, name: "Hospital Physician / PA", value: "PA" },
        { id: 4, name: "Hospital Tech / Therapist", value: "therapist" },
        { id: 4, name: "Hospital Staff", value: "Hospital_Staff" },
      ],

      Government_Employee: [
        { id: 4, name: "Federal", value: "federal" },
        { id: 4, name: "State", value: "state" },
      ],

      Government_Employee_federal: [
        { id: 4, name: "US Postal Service", value: "Post_service" },
        { id: 4, name: "Department of Veterans Affairs", value: "DOVA" },
        { id: 4, name: "Department of The Army", value: "DOA" },
        { id: 4, name: "Department of The Navy", value: "DON" },
        { id: 4, name: "Department of The Air Force", value: "DOAF" },
        { id: 4, name: "Department of Defense", value: "DOD" },
        { id: 4, name: "Department of Agriculture", value: "DOAr" },
        { id: 4, name: "Internal Revenue Service", value: "IRS" },
        {
          id: 4,
          name: "Social Security Administration",
          value: "Social_Security_Administration",
        },
        { id: 4, name: "Department of Homeland Security", value: "DOHLS" },
        { id: 4, name: "Department of Education", value: "DOE" },
        {
          id: 4,
          name: "Department of Health and Human Services",
          value: "DOHAHR",
        },
        { id: 4, name: "Department of Transportation", value: "DOT" },
        { id: 4, name: "Department of Justice", value: "DOJ" },
        { id: 4, name: "Other Federal Agency", value: "OFA" },
      ],

      Government_Employee_state: [
        { id: 4, name: " Public Works", value: "fire" },
        { id: 4, name: "Education", value: "fire" },
        { id: 4, name: "Justice / Courthouse", value: "fire" },
        { id: 4, name: "Corrections", value: "fire" },
        { id: 4, name: "Transportation / Transit", value: "fire" },
        { id: 4, name: "Public Safety", value: "fire" },
        { id: 4, name: "Public Safety", value: "fire" },
        { id: 4, name: "Health and Human Services", value: "fire" },
        { id: 4, name: "Game, Fish and Wildlife", value: "fire" },
        { id: 4, name: "Parks and Recreation", value: "fire" },
        { id: 4, name: "Child, Family and Social Services", value: "fire" },
        { id: 4, name: "Other State / Local Agency", value: "others" },
      ],

      options: [
        { id: 1, name: "U.S. Military", value: "US_Military" },
        { id: 2, name: "U.S. Military Family", value: "U_S_Military_Family" },
        { id: 3, name: "Law Enforcement", value: "Law_Enforcement" },
        { id: 4, name: "Fire", value: "fire" },
        { id: 5, name: "Medical Services", value: "Medical_Services" },
        { id: 6, name: "Government Employee", value: "Government_Employee" },
      ],
      US_Military: [
        { id: 1, name: "Airforce", value: "airforce" },
        { id: 2, name: "Army", value: "army" },
        { id: 3, name: "Coast-Guard", value: "coast_guard" },
        { id: 4, name: "Navy", value: "navy" },
        { id: 5, name: "Air National Guard", value: "air_national_guard" },
        { id: 6, name: "Army Nationa Guard", value: "army_national_guard" },
      ],

      airforce: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
        { id: 4, name: "Reserve", value: "reserve" },
        { id: 5, name: "US Air Academic", value: "us_air_academic" },
        { id: 6, name: "ROTC", value: "rotc" },
      ],

      army: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
        { id: 4, name: "Reserve", value: "reserve" },
        { id: 5, name: "West Point", value: "west_point" },
        { id: 6, name: "ROTC", value: "rotc" },
      ],

      coast_guard: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
        { id: 4, name: "Reserve", value: "reserve" },
        { id: 5, name: "Coast Guard Academy", value: "coast_Guard_academy" },
      ],

      marines: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
        { id: 4, name: "Reserve", value: "reserve" },

        { id: 5, name: "ROTC", value: "rotc" },
      ],

      navy: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
        { id: 4, name: "Reserve", value: "reserve" },
        { id: 5, name: "US Naval Academic", value: "us_naval_academic" },
        { id: 6, name: "ROTC", value: "rotc" },
      ],

      army_national_guard: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
      ],

      air_national_guard: [
        { id: 1, name: "Active", value: "active" },
        { id: 2, name: "Veteran", value: "veteran" },
        { id: 3, name: "Retired", value: "retired" },
      ],

       common_status: [
        { id: 1, name: "Current Employee", value: "current_employee" },
        { id: 2, name: "Formal Empoyee", value: "formal_employee" },
        
      ],
    };
  },

  mounted() {
    this.selected = this.options;
  },

  methods: {

    showStat(){
this.show_status=true;
    },

    selectValidationDocument(value){
     
     this.doc_name=value.name;
     this.doc_description=value.text;

    },


    verifDoc(){
   
   console.log(this.profession_name);

 console.log(this.status_name);
       switch (this.profession_name) {
        case "U.S. Military":
        

          if(this.status_name == "Veteran"){
             
            this.doc_options=this.military_vetaran; 

          }else if( this.status_name =="Retired" ){

            this.doc_options=this.military_vetaran;
          }
          else{
               this.doc_options = this.military_active;
          }

         
          break;


       }
    },


    storedata() {
      let formData2 = new FormData();
      formData2.append("first_name", this.first_name);
      formData2.append("last_name", this.last_name);
      formData2.append("email", this.email);
      formData2.append("profession", this.profession_name);
      formData2.append("branch", this.branch_name);
      formData2.append("status", this.status_name);
      formData2.append("password", this.password);

      axios
        .post("api/widget/json/post/save-user", formData2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          alert("user data saved");
        })
        .catch((error) => {
          console.log({ error: error });
          // Manage errors if found any
        });
    },

    setdepartment(value){

      this.departemnet_name = value.name;
      this.show_departement=false;
      this.showlawenforcementstatus=true;

    },



    resetDepartement() {
       
      this.profession_name = null;
      
      
    },

  resetLawEnforcementStatus(){
     this.showlawenforcementstatus=false;
     this.show_departement=true;
  },


      setdepartmentStatus(value){

      this.departement_status = value.name;
      
      this.showlawenforcementstatus=false;
      this.complete=true;

    },


    relatedd(value) {
      console.log("mother fucker baby");

      this.show_related = false;
      this.show_related_profession = true;
      this.related_name = value.name;
    },

    resetRelatedProfession() {
      this.show_related_profession = false;
      this.show_related = true;
    },


     


    resetRelated() {
      this.profession_name = null;
    },

    relatedProfession(value) {
      this.relate_profession_name = value.name;
      this.complete = true;
    },

    resetBranch() {
      (this.profession_name = null), (this.branch_name = null);
    },

    resetStatus() {
      this.show_branch = true;
      this.show_status = false;
    },

    setStatus(value) {
      console.log(value);
      this.status_name = value.name;
      this.complete = true;
    },

    getStarted() {
      this.showemail = false;
    },

    profession(value) {
      switch (value.value) {
        case "US_Military":
          this.background = this.US_Military;

          this.profession_name = value.name;
          break;

        case "U_S_Military_Family":
          this.background = this.U_S_Military_Family;
          this.profession_name = value.name;
          break;

        case "Law_Enforcement":
          this.background = this.Law_Enforcement;
          this.profession_name = value.name;
          break;

        case "fire":
          this.background = this.Fire;
          this.profession_name = value.name;
          console.log("fire selected");
          break;

        case "Medical_Services":
          this.background = this.Medical_Services;
          this.profession_name = value.name;
          break;

        case "Government_Employee":
          this.background = this.Government_Employee;
          this.profession_name = value.name;
          break;
      }

      this.show_branch = true;
    },

    branchh(value) {
      console.log(value);

      switch (value.value) {
        case "airforce":
          this.branch = this.airforce;

          break;

        case "army":
          this.branch = this.army;
          break;

        case "coast_guard":
          this.branch = this.coast_guard;
          break;

        case "navy":
          this.branch = this.navy;
          break;

        case "air_national_guard":
          this.branch = this.air_national_guard;
          break;

        case "army_national_guard":
          this.branch = this.army_national_guard;
          break;
      }

      this.branch_name = value.name;
      this.show_branch = false;
      this.show_status = true;
    },
  },
};
</script>
 
<style scoped>
.btn {
  font-size: 10px;
  display: flex;
  padding-right: 60px;
  margin-right: 10px;
  padding-left: 10px;
}
.btn2 {
  margin-left: -15px;
}
.p-buttons {
  margin-left: -19px;
  padding: 9px;
}
.ename {
  text-align: left;
  margin-top: -15px;
}
.ico {
  margin-right: 5px;
}
.people-style {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  background: white;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
  margin-right: -30px;
  margin-left: -30px;
}
</style>
