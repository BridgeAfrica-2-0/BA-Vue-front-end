<template>
  <div>
    <div id="app">
      <div id="verify-container">
        <div class="c516 c513">
          <div>
            <div v-if="showemail" class="c515 c512" id="verify-container">
              <div class="c516 c513">
                <div>
                  <h1 class="text-center">Welcome!</h1>
                  <br />
                  <h5 class="text-center">Create a free membership to shop special discounts on premium brands, travel and tickets.</h5>

                  <br />
                  <br />

                  <div>
                    <div style="padding-top: 15px">
                      <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                        <label
                          class="
                            MuiFormLabel-root
                            MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
                            Mui-error Mui-error
                          "
                          data-shrink="false"
                        >
                          Email</label
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
                            name="email"
                            v-model="email"
                            type="text"
                            aria-label="Email"
                            class="form-control MuiInputBase-input MuiFilledInput-input"
                            value=""
                          />
                        </div>
                        <label v-if="email_error" style="color: red" for=" password"> {{ error_description }} </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style="padding-top: 15px"></div>
                  </div>

                  <div style="padding-top: 20px">
                    <button
                      @click="getStarted"
                      class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth"
                      tabindex="0"
                      label="Continue"
                      style="
                        box-shadow: none;
                        height: 60px;
                        border-radius: 3px;
                        font-size: 0.875rem;
                        text-transform: none;
                      "
                    >
                      <span class="MuiButton-label">Continue</span><span class="MuiTouchRipple-root"></span>
                    </button>
                  </div>


                  <div class="mt-3">  <p class="text-center">  By signing up, you agree to our <a href="/terms"> Terms </a> and  <a href="Privacy"> Privacy Policy </a>   </p>  </div>

                  <div>  <p class="text-center">  Already have an account? </p>  </div>   

                  
                  <div>  <p class="text-center">  <a href="/signin">  Signin </a>  </p>  </div>

                </div>
              </div>
            </div>

            <div v-else class="c515 c512">
              <div v-if="!complete" class="c516 c513">
                <ul class="MuiList-root MuiList-padding">
                  <div>
                    <div v-if="profession_name == null">
                      <h1 class="no-padding-bottom">What's your background?</h1>

                      <br />
                      <br />
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
                        <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                          {{ blec.name }}
                        </div>
                        <div class="MuiListItemIcon-root">
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                        </div>
                      </li>
                    </div>

                    <div v-if="profession_name == 'U.S. Military'">
                      <div v-if="show_branch">
                        <h1 class="no-padding-bottom">What's your Branch?</h1>
                        <br />
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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetBranch"> back </a>
                        </div>
                      </div>

                      <div v-if="show_status">
                        <h1 class="no-padding-bottom">What's your Status?</h1>
                        <br />
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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetStatus"> back </a>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="profession_name == 'U.S. Military Family'">
                      <div v-if="show_related">
                        <h1 class="no-padding-bottom">How are you related?</h1>
                        <br />
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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetRelated"> back </a>
                        </div>
                      </div>

                      <div v-if="show_related_profession">
                        <h1 class="no-padding-bottom">What's your Branch</h1>
                        <br />
                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blec in US_Military"
                          :key="blec.id"
                          @click="relatedProfession(blec)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <br />
                        <br />
                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetRelatedProfession"> back </a>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="profession_name == 'Law Enforcement'">
                      <div v-if="show_departement">
                        <h1 class="no-padding-bottom">Select Your Department</h1>

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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <br />
                            <br />
                            <div class="mt-3">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                              </svg>
                            </div>
                          </div>
                        </li>

                        <br />

                        <h4 class="c5137"><strong>Federal</strong></h4>

                        <li
                          class="MuiListItem-root MuiListItem-gutters"
                          tabindex="0"
                          v-for="blecc in Law_Enforcement_federal"
                          :key="blecc.id"
                          @click="setdepartment(blecc)"
                          style="
                            margin-bottom: -1px;
                            border: 1px solid rgb(224, 224, 224);
                            font-size: 14px;
                            cursor: pointer;
                          "
                        >
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blecc.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetDepartement"> back </a>
                        </div>
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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetLawEnforcementStatus"> back </a>
                        </div>
                      </div>
                    </div>

                    <!-- governement employee -->

                    <div v-else-if="profession_name == 'Government Employee'">
                      <div v-if="show_departement">
                        <h1 class="no-padding-bottom">Select Your Department</h1>

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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <br />

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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetDepartement"> back </a>
                        </div>
                      </div>

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Profession 003</h1>
                        <br />

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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetLawEnforcementStatus"> back </a>
                        </div>
                      </div>
                    </div>

                    <!-- end of governement employee -->

                    <!-- start of Medical services -->

                    <div v-else-if="profession_name == 'Medical Services'">
                      <div v-if="show_departement">
                        <h1 class="no-padding-bottom">Select Your Department</h1>
                        <br />

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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetDepartement"> back </a>
                        </div>
                      </div>

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Profession</h1>
                        <br />

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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetLawEnforcementStatus"> back </a>
                        </div>
                      </div>
                    </div>

                    <!-- end of medical services -->

                    <!--  start of fire deparetement -->

                    <div v-else-if="profession_name == 'Fire'">
                      <div v-if="show_departement">
                        <h1 class="no-padding-bottom">Select Your Department</h1>

                        <br />
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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <br />

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
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                        </svg>
                        <a href="#" @click="resetDepartement"> back </a>
                      </div>

                      <div v-if="showlawenforcementstatus">
                        <h1 class="no-padding-bottom">Status</h1>

                        <br />
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
                          <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                            {{ blec.name }}
                          </div>
                          <div class="MuiListItemIcon-root">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </li>

                        <div class="mt-5">
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                          </svg>
                          <a href="#" @click="resetLawEnforcementStatus"> back </a>
                        </div>
                      </div>
                    </div>

                    <!-- end of fire deparetement -->
                  </div>
                </ul>
              </div>

              <div v-if="complete" class="c515 c512" id="verify-container">
                <div class="c516 c513">
                  <!-- 







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

 -->

                  <div v-if="show_selected_doc" class="" id="verify-container">
                    <div class="c516 c513">
                      <div>
                        <h1 role="heading" aria-level="1">
                          {{ doc_name }} <br />
                          <br />
                        </h1>
                        <p class="no-margin-bottom no-padding-bottom" role="heading" aria-level="2">
                          <span>
                            <p>{{ doc_description }}.</p>
                            <p>
                              Make sure the text in the image is legible without smudging or distortions. A bad quality
                              image can delay your approval.
                            </p></span
                          >
                        </p>
                        <form>
                          <div>
                            <div style="padding-top: 20px">
                              <div>

                                <span v-for="doc in document" :key="doc.id">  <span>  {{doc.fileName}}  </span>       <span  tabindex="0"
                                    role="button"
                                    aria-disabled="false"    style="
                                      
                                      font-size: 0.875rem;
                                      text-transform: none;
                                    "   @click="removeDoc(doc.fileName)" > Remove  </span>   <br>  </span> 


                              

                                <label v-if="document.length && document.length <2  " style="width: 100%" for="desktop-file-input" >  
                                  <span
                                   
                                    tabindex="0"
                                    role="button"
                                    aria-disabled="false"
                                   
                                    label="Add Another File"
                                    id="desktop-file-button"
                                    style="
                                      box-shadow: none;
                                      height: 60px;
                                      border-radius: 3px;
                                      font-size: 0.875rem;
                                      text-transform: none;
                                    "
                                  >
                                    <span class="MuiButton-label"> +Add Another File</span>   
                                   </span
                                ></label>





                                <input
                                  @change="selectFile"
                                  id="desktop-file-input"
                                  type="file"
                                  accept=".pdf, .jpg, .jpeg, .png, .bmp"
                                  aria-label="Upload photo or PDF"
                                  style="display: none"
                                />
                                
                                
                                <label    v-if="!document.length " style="width: 100%" for="desktop-file-input" >  
                                  <span
                                    class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth"
                                    tabindex="0"
                                    role="button"
                                    aria-disabled="false"
                                  
                                    label="Upload photo or PDF"
                                    id="desktop-file-button"
                                    style="
                                      box-shadow: none;
                                      height: 60px;
                                      border-radius: 3px;
                                      font-size: 0.875rem;
                                      text-transform: none;
                                    "
                                  >
                                    <span class="MuiButton-label">Upload photo or PDF</span>   
                                    <span class="MuiTouchRipple-root"></span></span
                                ></label>











                                <label style="width: 100%"    v-if="document.length " >  
                                  <span
                                    class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth"
                                    tabindex="0"
                                    role="button"
                                    aria-disabled="false"
                                    @click="valdoc"
                                    label="Upload photo or PDF"
                                    id="desktop-file-button"
                                    style="
                                      box-shadow: none;
                                      height: 60px;
                                      border-radius: 3px;
                                      font-size: 0.875rem;
                                      text-transform: none;
                                    "
                                  >
                                    <span class="MuiButton-label"> Verify </span>   
                                      </span
                                ></label>



                              </div>
                            </div>
                          </div>
                        </form>
                        <p class="no-margin" style="padding: 10px 0px 0px">
                          <small>We take your security seriously:</small>
                        </p>
                        <ul style="margin: 0px; padding: 10px 0px 20px 17px; line-height: 13px">
                          <li style="padding-bottom: 5px">
                            <small>Your document is encrypted and we don't save any senstive info.</small>
                          </li>
                          <li style="padding-bottom: 5px">
                            <small>All documents are instantly deleted from our system after verification</small>
                          </li>
                          <li>
                            <small
                              >If your document contains your social security number, please cross it out. We don't need
                              your social to verify your status.</small
                            >
                          </li>
                        </ul>
                        <div class="c5134">
                          <a @click="resetSelectedDoc" class="c5135" target="" href="#"
                            ><span
                              ><svg
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
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg
                              >Back</span
                            ></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="show_doc">
                    <h1 role="heading" aria-level="1">Document Verification</h1>
                    <p class="no-margin-bottom no-padding-bottom" role="heading" aria-level="2">
                      <span
                        >Please upload a document from the list below that proves your {{ status_name }} status.
                      </span>
                    </p>
                    <p></p>
                    <ul class="MuiList-root MuiList-padding" style="padding-top: 20px">
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
                        <div class="MuiListItemText-root" style="font-size: 14px; cursor: pointer">
                          {{ blec.name }}
                        </div>
                        <div class="MuiListItemIcon-root">
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                        </div>
                      </li>
                    </ul>

                    <br />
                    <br />
                    <div class="c5138">
                      <a class="c5132" @click="resetShowDoc" target="" href="#"
                        ><span
                          ><svg
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg
                          >Back</span
                        ></a
                      >
                    </div>
                  </div>








                        
                  <div v-if="show_complete_form">
                    <h1> You're almost there! .</h1>
                    <p class="mt-3">    Our team will review your {{doc_name}} within 48 hours. Please complete the form below and we'll contact you when you're approved. </p>
                    <br />
                    <form>
                      <div>
                        <div style="padding-top: 15px">
                          <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
                                Mui-error Mui-error
                              "
                              data-shrink="false"
                              > Phone Number</label
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
                                v-model="tel"
                                type="number"
                                aria-label="First name"
                                class="form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>

                            <label v-if="name_error" style="color: red" for="name"> Tel is Required </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style="padding-top: 15px">
                          <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
                              "
                              data-shrink="false"
                              >Zip Code</label
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
                                v-model="zip"
                                name="zip"
                                type="text"
                                aria-label="zip"
                                class="form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style="padding-top: 15px">
                          <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
                              "
                              data-shrink="false"
                            >
                             Create Password</label
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
                                v-model="password"
                                name="password"
                                type="password"
                                aria-label="Password"
                                class="form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>

                            <label v-if="password_error" style="color: red" for=" password">
                              password is required 
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                       

                      </div>
                    </form>
                    <div style="padding-top: 20px">
                      <button
                      :disabled='isDisabled'
                      :class="{activee: isDisabled }"
                        @click="storeData"
                        class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth"
                        tabindex="0"
                        label="Continue"
                        style="
                          box-shadow: none;
                          height: 60px;
                          border-radius: 3px;
                          font-size: 0.875rem;
                          text-transform: none;
                        "
                      >
                        <span class="MuiButton-label">Finish Registration</span><span class="MuiTouchRipple-root"></span>
                      </button>
                      
                    </div>
                   
                   <label style="color: red" for=" button">
                             {{storeerror}}
                            </label>
                   

                   
                  </div>



























                  <div v-if="show_form">
                    <h1>Great! Let's start the verification process.</h1>
                    <br />
                    <form>
                      <div>
                        <div style="padding-top: 15px">
                          <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
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

                            <label v-if="name_error" style="color: red" for="name"> Name is Required </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style="padding-top: 15px">
                          <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
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
                                class="form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div>
                        <div style="padding-top: 15px">
                          <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label
                              class="
                                MuiFormLabel-root
                                MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled
                              "
                              data-shrink="false"
                              >Date of Birth (MMDDYYYY)</label
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
                                v-model="dob"
                                name="dob"
                                type="date"
                                aria-label="Date of Birth (MMDDYYYY)"
                                class="form-control MuiInputBase-input MuiFilledInput-input"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div style="padding-top: 20px">
                      <button
                        @click="validateForm"
                        class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth"
                        tabindex="0"
                        label="Continue"
                        style="
                          box-shadow: none;
                          height: 60px;
                          border-radius: 3px;
                          font-size: 0.875rem;
                          text-transform: none;
                        "
                      >
                        <span class="MuiButton-label">Continue</span><span class="MuiTouchRipple-root"></span>
                      </button>
                    </div>

                    <div style="margin-top: 20px; display: table">
                      <div style="float: left; margin-right: 16px">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                          ></path>
                        </svg>
                      </div>

                      <p style="float: left; margin: 0px; padding: 0px; width: calc(100% - 60px); font-size: 14px">
                        Trusted by over a million members who've joined reward-america since 2012.
                      </p>
                    </div>

                    <br />
                    <br />
                    <div class="c5131">
                      <a class="c5132" @click="resetForm" target="" href="#"
                        ><span>
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
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg
                          >Back</span
                        ></a
                      >
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      message: 'Hello Vue!',

       isDisabled:false,
        storeerror:"",
      document: [],
      show_complete_form:false,
      zip:null,
      tel:null,
      profession_name: null,
      doc_name: null,
      doc_description: null,
      status_name: null,
      branch_name: null,
      show_branch: false,
      show_form: true,
      show_doc: false,
      show_selected_doc: false,
      show_status: false,
      show_departement: true,
      departemnet_name: null,
      departement_status: null,
      showlawenforcementstatus: false,
      doc_option_msg: null,
      name_error: false,
      password_error: false,
      email_error: false,
      error_description: null,
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
      doc_options: [],
      profile_pic: null,
      dob: [],
      first_name: null,
      last_name: null,

      related: [
        { id: 1, name: ' Spouse ', value: 'spouse' },
        { id: 1, name: ' Dependent ', value: 'dependent' },
      ],

      military_active: [
        {
          id: 1,
          name: ' Leaving and Earning Statement ',
          value: 'leaving_and_earning',
          text: 'Please upload a recent Leave & Earnings Statement that clearly shows your full name',
        },
        {
          id: 1,
          name: ' PCS Orders ',
          value: 'pcs_orders',
          text: 'Please upload a picture of your Permanent Change of Station Orders (PCS) that clearly show your full name.',
        },
        {
          id: 1,
          name: ' Others ',
          value: ' others ',
          text: 'Please upload an official document that proves your Active Duty status and includes your full name',
        },
      ],

      military_vetaran: [
        {
          id: 1,
          name: " State Driver's License/ID ",
          value: 'State_Driver_License/ID',
          text: "If your state driver's license displays a Veteran designation, you may upload it here. Make sure the picture clearly shows your photo, full name and Veteran designation. If the Veteran designation is on the back of the ID, please upload a picture of both sides.",
        },
        {
          id: 1,
          name: ' VA Proof of Service Letter ',
          value: 'VA Proof_of_Service_Letter',
          text: 'Please upload a picture of an official VA Proof of Service Letter that clearly shows your full name and honorable service designation.',
        },
        {
          id: 1,
          name: ' Veteran Health ID Card (VHIC) ',
          value: 'VHIC',
          text: 'Please upload a picture of your VHIC that clearly shows your full name and photo',
        },
        {
          id: 1,
          name: ' Veteran ID Card ',
          value: 'Veteran_ID_Card',
          text: 'Please upload a picture of your federal, state or local Veteran ID card that clearly shows your full name and photo.',
        },
        {
          id: 1,
          name: ' DD214 ',
          value: 'DD214',
          text: 'Please upload a picture of your DD214 that clearly shows your full name, date of discharge and character of service. You may redact your social security number',
        },
        {
          id: 1,
          name: ' Other ',
          value: 'Other',
          text: 'Please upload an official document that proves your Active Duty status and includes your full name',
        },
      ],

      police_active: [
        {
          id: 1,
          name: ' Departement ID ',
          value: 'id',
          text: 'Please upload a picture of your official department ID card that clearly shows your photo (if applicable), full name and status',
        },
        {
          id: 1,
          name: ' Pay Stub ',
          value: 'pay_stub',
          text: 'Please upload a recent pay stub that clearly shows the department issuing the payment, your position and your full name. Paystub MUST show your position',
        },
      ],

      fire_active: [
        {
          id: 1,
          name: ' Departement ID ',
          value: 'departement_id',
          text: 'Please upload a picture of your official department ID card that clearly shows your photo (if applicable), full name and status.',
        },
        {
          id: 1,
          name: ' IAFF membership card ',
          value: 'IAFF',
          text: 'Please upload a picture of your IAFF Membership Card that clearly shows your full name',
        },
      ],

      Government_Employee_local: [
        {
          id: 1,
          name: ' Department ID ',
          value: 'DepartmentID',
          text: 'Please upload a picture of your official department ID card that clearly shows your photo (if applicable), full name and status',
        },
        {
          id: 1,
          name: ' Leave & Earnings Statement ',
          value: 'LeaveEarnings_Statement',
          text: 'Please upload a recent Civilian Leave & Earnings Statement that clearly shows your full name.',
        },
        {
          id: 1,
          name: 'Others',
          value: 'others',
          text: 'Please upload an official document that proves your current employment status and includes your full name.',
        },
      ],

      paramedic_active: [
        {
          id: 1,
          name: ' Departement ID ',
          value: 'departement_id',
          text: 'Please upload a picture of your official department ID card that clearly shows your photo (if applicable), full name and status.',
        },
        {
          id: 1,
          name: ' IAFF membership card ',
          value: 'IAFF',
          text: 'Please upload a picture of your IAFF Membership Card that clearly shows your full name',
        },

        {
          id: 1,
          name: 'NREMT Certification Card ',
          value: 'NREMTCertificationCard',
          text: 'Please upload a picture of your NREMT Certification card that clearly shows your full name and status.',
        },
        {
          id: 1,
          name: ' State EMS License ',
          value: 'StateEMSLicense',
          text: 'Please upload a picture of your state-issued EMT or Paramedic License that clearly shows your full name and status. We cannot accept a website screenshot. You must submit a photo of your actual license form.',
        },
      ],

      nurse_active: [
        {
          id: 1,
          name: ' Certification Form',
          value: 'CertificationForm',
          text: 'Please upload an image of your professional nursing certification form that clearly shows your full name.',
        },
        {
          id: 1,
          name: ' Hospital Badge / ID Card',
          value: 'badge',
          text: "Please upload a picture of your official Hospital Badge / ID Card that clearly shows your photo and name. If your badge only has your first name, please also upload a photo of your driver's license.",
        },
        {
          id: 1,
          name: ' State Nursing License ',
          value: 'nursing',
          text: ' Please upload a picture of your state-issued nursing license that clearly shows your full name. We cannot accept a website screenshot. You must submit a photo of your actual license form',
        },
      ],

      hospital_active: [
        {
          id: 1,
          name: ' Hospital Badge / ID Card',
          value: 'badge',
          text: "Please upload a picture of your official Hospital Badge / ID Card that clearly shows your photo and name. If your badge only has your first name, please also upload a photo of your driver's license.",
        },
      ],

      Law_Enforcement_local: [
        {
          id: 1,
          name: ' City Police Department ',
          value: 'City_Police_Department',
        },
        { id: 1, name: ' State Police ', value: 'State_Police' },
        {
          id: 1,
          name: ' State Highway Patrol ',
          value: 'State Highway Patrol',
        },
        { id: 1, name: 'Sheriff', value: 'Sheriff' },
        {
          id: 1,
          name: ' Department of Corrections ',
          value: 'Department_of_Corrections',
        },

        { id: 1, name: ' Dependent ', value: 'dependent' },
      ],

      Law_Enforcement_federal: [
        {
          id: 1,
          name: ' Other State/Local Law Enforcement ',
          value: 'Other State_Local_Law_Enforcement',
        },
        {
          id: 1,
          name: ' Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) ',
          value: 'Bureau_of_Alcohol',
        },
        {
          id: 1,
          name: ' Drug Enforcement Administration (DEA) ',
          value: 'DEA',
        },
        { id: 1, name: ' Federal Air Marshal ', value: 'FAM' },
        {
          id: 1,
          name: ' Federal Bureau of Investigation (FBI) ',
          value: 'FBI',
        },
        { id: 1, name: ' Federal Bureau of Prisons (BOP) ', value: 'BOP' },
        {
          id: 1,
          name: ' Immigration and Customs Enforcement (ICE) ',
          value: 'ICE',
        },
        {
          id: 1,
          name: ' Transportation Security Administration (TSA) ',
          value: 'TSA',
        },
        {
          id: 1,
          name: ' U.S. Customs and Border Protection (CBP) ',
          value: 'CBP',
        },
        { id: 1, name: ' U.S. Marshals ', value: 'US_Marshals' },
        { id: 1, name: ' U.S. Secret Service ', value: 'Secret_Service' },
        { id: 1, name: ' U.S. Capitol Police ', value: 'Capitol_police' },

        {
          id: 1,
          name: ' Other Federal Law Enforcement ',
          value: 'Other_Federal_Law_Enforcement',
        },
      ],

      fire: [
        { id: 1, name: ' National Parks Service (NPS) ', value: 'NPS' },
        { id: 1, name: ' Bureau of Land Management(BLM) ', value: 'BLM' },
        { id: 1, name: ' U.S. Forest Service ', value: 'US_Forest_Service' },
        {
          id: 1,
          name: ' Other Federal Fire Department ',
          value: 'Other_Federal_Fire_Department',
        },
        {
          id: 1,
          name: ' Municipal Fire Department ',
          value: 'Municipal_Fire_Department',
        },
      ],

      Medical_Services: [
        { id: 4, name: 'EMT / Paramedic', value: 'EMPT' },
        { id: 4, name: 'Nurse (RN, NP, CNA, LPN)', value: 'nurse' },
        { id: 4, name: 'Hospital Physician / PA', value: 'PA' },
        { id: 4, name: 'Hospital Tech / Therapist', value: 'therapist' },
        { id: 4, name: 'Hospital Staff', value: 'Hospital_Staff' },
      ],

      Government_Employee: [
        { id: 4, name: 'Federal', value: 'federal' },
        { id: 4, name: 'State', value: 'state' },
      ],

      Government_Employee_federal: [
        { id: 4, name: 'US Postal Service', value: 'Post_service' },
        { id: 4, name: 'Department of Veterans Affairs', value: 'DOVA' },
        { id: 4, name: 'Department of The Army', value: 'DOA' },
        { id: 4, name: 'Department of The Navy', value: 'DON' },
        { id: 4, name: 'Department of The Air Force', value: 'DOAF' },
        { id: 4, name: 'Department of Defense', value: 'DOD' },
        { id: 4, name: 'Department of Agriculture', value: 'DOAr' },
        { id: 4, name: 'Internal Revenue Service', value: 'IRS' },
        {
          id: 4,
          name: 'Social Security Administration',
          value: 'Social_Security_Administration',
        },
        { id: 4, name: 'Department of Homeland Security', value: 'DOHLS' },
        { id: 4, name: 'Department of Education', value: 'DOE' },
        {
          id: 4,
          name: 'Department of Health and Human Services',
          value: 'DOHAHR',
        },
        { id: 4, name: 'Department of Transportation', value: 'DOT' },
        { id: 4, name: 'Department of Justice', value: 'DOJ' },
        { id: 4, name: 'Other Federal Agency', value: 'OFA' },
      ],

      Government_Employee_state: [
        { id: 4, name: ' Public Works', value: 'fire' },
        { id: 4, name: 'Education', value: 'fire' },
        { id: 4, name: 'Justice / Courthouse', value: 'fire' },
        { id: 4, name: 'Corrections', value: 'fire' },
        { id: 4, name: 'Transportation / Transit', value: 'fire' },
        { id: 4, name: 'Public Safety', value: 'fire' },
        { id: 4, name: 'Public Safety', value: 'fire' },
        { id: 4, name: 'Health and Human Services', value: 'fire' },
        { id: 4, name: 'Game, Fish and Wildlife', value: 'fire' },
        { id: 4, name: 'Parks and Recreation', value: 'fire' },
        { id: 4, name: 'Child, Family and Social Services', value: 'fire' },
        { id: 4, name: 'Other State / Local Agency', value: 'others' },
      ],

      options: [
        { id: 1, name: 'U.S. Military', value: 'US_Military' },
        //  { id: 2, name: "U.S. Military Family", value: "U_S_Military_Family" },
        { id: 3, name: 'Law Enforcement', value: 'Law_Enforcement' },
        { id: 4, name: 'Fire', value: 'fire' },
        { id: 5, name: 'Medical Services', value: 'Medical_Services' },
        { id: 6, name: 'Government Employee', value: 'Government_Employee' },
      ],
      US_Military: [
        { id: 1, name: 'Airforce', value: 'airforce' },
        { id: 2, name: 'Army', value: 'army' },
        { id: 3, name: 'Coast-Guard', value: 'coast_guard' },
        { id: 4, name: 'Navy', value: 'navy' },
        { id: 5, name: 'Air National Guard', value: 'air_national_guard' },
        { id: 6, name: 'Army Nationa Guard', value: 'army_national_guard' },
      ],

      airforce: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
        { id: 4, name: 'Reserve', value: 'reserve' },
        { id: 5, name: 'US Air Academic', value: 'us_air_academic' },
        { id: 6, name: 'ROTC', value: 'rotc' },
      ],

      army: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
        { id: 4, name: 'Reserve', value: 'reserve' },
        { id: 5, name: 'West Point', value: 'west_point' },
        { id: 6, name: 'ROTC', value: 'rotc' },
      ],

      coast_guard: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
        { id: 4, name: 'Reserve', value: 'reserve' },
        { id: 5, name: 'Coast Guard Academy', value: 'coast_Guard_academy' },
      ],

      marines: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
        { id: 4, name: 'Reserve', value: 'reserve' },

        { id: 5, name: 'ROTC', value: 'rotc' },
      ],

      navy: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
        { id: 4, name: 'Reserve', value: 'reserve' },
        { id: 5, name: 'US Naval Academic', value: 'us_naval_academic' },
        { id: 6, name: 'ROTC', value: 'rotc' },
      ],

      army_national_guard: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
      ],

      air_national_guard: [
        { id: 1, name: 'Active', value: 'active' },
        { id: 2, name: 'Veteran', value: 'veteran' },
        { id: 3, name: 'Retired', value: 'retired' },
      ],

      common_status: [
        { id: 1, name: 'Current Employee', value: 'current_employee' },
        { id: 2, name: 'Formal Empoyee', value: 'formal_employee' },
      ],
    };
  },

  mounted() {
    this.selected = this.options;
  },

  methods: {
    selectFile(event) {
      const file = event.target;

      if (file.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.document.push({
            target: event.target,
            movie: e.target.result,
            fileName: event.target.files[0].name,
          });
        };
        reader.readAsDataURL(file.files[0]);
      }

    },


    removeDoc(name){



 const movies = this.document.filter(
        (item) => item.fileName.trim() !== name.trim()
      );
      this.document = [...movies];


    },

    showStat() {
      this.show_status = true;
    },

    selectValidationDocument(value) {
      this.doc_name = value.name;
      this.doc_description = value.text;
      this.show_doc = false;
      this.show_selected_doc = true;
    },

    verifDoc() {
      console.log(this.profession_name);

      console.log(this.status_name);
      switch (this.profession_name) {
        case 'U.S. Military':
          if (this.status_name == 'Veteran') {
            this.doc_options = this.military_vetaran;
          } else if (this.status_name == 'Retired') {
            this.doc_options = this.military_vetaran;
          } else {
            this.doc_options = this.military_active;
          }

          break;

        case 'Fire':
          this.doc_options = this.fire_active;
          break;

        case 'Law Enforcement':
          this.doc_options = this.police_active;
          break;

        case 'Government Employee':
          this.doc_options = this.Government_Employee_local;
          break;

        case 'Medical Services':
          if (this.departemnet_name == 'Nurse (RN, NP, CNA, LPN)') {
            this.doc_options = this.nurse_active;
          } else if (this.departemnet_name == 'EMT / Paramedic') {
            this.doc_options = this.paramedic_active;
          } else {
            this.departemnet_name = this.hospital_active;
          }

          break;
      }
    },


    valdoc(){
     
      this.show_selected_doc=false;
      this.show_complete_form=true;

    },



    storeData() {

      this.isDisabled=true;

      if(this.password == null){

        this.password_error=true;

         this.isDisabled=false;

        return true;
      }


      //check if fies are actualy  present lol
      var doc1=null;
      var doc2=null
      if(this.document[0]){
          doc1=this.document[0].target.files[0]
      }


      if(this.document[1]){
          doc2=this.document[1].target.files[0]
      }

      let formData2 = new FormData();
      formData2.append('first_name', this.first_name);
      formData2.append('last_name', this.last_name);
      formData2.append('email', this.email);
      formData2.append('profession', this.profession_name);
      formData2.append('branch', this.branch_name);
      formData2.append('status', this.status_name);
      formData2.append('doctype', this.status_name);
      formData2.append('password', this.password);
      formData2.append('document1', doc1);
      formData2.append('document2', doc2);

       formData2.append('zip', this.zip);
        formData2.append('tel', this.tel);
         formData2.append('doc_name', this.doc_name);
         


      



 
     
    

      axios
        .post('api/widget/json/post/save-user', formData2, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
         
        })
        .catch((error) => {
          console.log({ error: error });
          
           this.isDisabled=false;
           this.storeerror=" Account Creation Failed Please try again"
        });
    },

    validateForm() {
      if (this.first_name == null ) {
        this.name_error = true;
        
      } else {
        this.show_form = false;
        this.show_doc = true;
        this.verifDoc();
      }
    },

    setdepartment(value) {
      console.log(value);

      this.departemnet_name = value.name;
      this.show_departement = false;
      this.showlawenforcementstatus = true;
    },

    resetSelectedDoc() {
      this.show_selected_doc = false;
      this.show_doc = true;
    },

    resetShowDoc() {
      this.show_doc = false;
      this.show_form = true;
    },

    resetDepartement() {
      this.profession_name = null;
    },

    resetLawEnforcementStatus() {
      this.show_departement = true;
      this.showlawenforcementstatus = false;
    },

    setdepartmentStatus(value) {
      this.show_form = true;

      this.departement_status = value.name;

      this.showlawenforcementstatus = false;
      this.complete = true;
    },

    relatedd(value) {
      console.log('mother fucker baby');

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

    resetForm() {
      this.show_form = false;
      this.complete = false;

      this.showlawenforcementstatus = true;
    },

    setStatus(value) {
      console.log(value);
      this.status_name = value.name;
      this.complete = true;
    },

    getStarted() {
      if (this.email == null) {
        this.email_error = true;
        this.error_description = 'Email is Required';
      } else {
        let formData2 = new FormData();
        formData2.append('email', this.email);

        axios
          .post('api/widget/json/post/validate-email', formData2, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            console.log(res);
            alert('user data saved');
          })
          .catch((error) => {
            console.log({ error: error });
            // Manage errors if found any

            this.email_error = true;
            this.error_description = 'Invalid Email';
          });

        this.showemail = false;
      }
    },

    profession(value) {
      switch (value.value) {
        case 'US_Military':
          this.background = this.US_Military;

          this.profession_name = value.name;
          break;

        case 'U_S_Military_Family':
          this.background = this.U_S_Military_Family;
          this.profession_name = value.name;
          break;

        case 'Law_Enforcement':
          this.background = this.Law_Enforcement;
          this.profession_name = value.name;
          break;

        case 'fire':
          this.background = this.Fire;
          this.profession_name = value.name;
          console.log('fire selected');
          break;

        case 'Medical_Services':
          this.background = this.Medical_Services;
          this.profession_name = value.name;
          break;

        case 'Government_Employee':
          this.background = this.Government_Employee;
          this.profession_name = value.name;
          break;
      }

      this.show_branch = true;
    },

    branchh(value) {
      console.log(value);

      switch (value.value) {
        case 'airforce':
          this.branch = this.airforce;

          break;

        case 'army':
          this.branch = this.army;
          break;

        case 'coast_guard':
          this.branch = this.coast_guard;
          break;

        case 'navy':
          this.branch = this.navy;
          break;

        case 'air_national_guard':
          this.branch = this.air_national_guard;
          break;

        case 'army_national_guard':
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
 
<style >



.activee{

    background: gray !important; 
}
.MuiButton-contained:not(.fb) {
  color: white;
  background-color: #2a2d36;
}

.MuiButton-fullWidth {
  width: 100%;
}

.c5137 {
  margin: 25px 0px 7px;
  padding: 0px;
}

h1 {
  font-size: 1.5em !important;
}
@media only screen and (min-width: 575px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 20 px 0;
  }
}

body.fonts-loaded h1,
body.fonts-loaded h2,
body.fonts-loaded h3,
body.fonts-loaded h4 {
  font-weight: normal;
}

.MuiFilledInput-input {
  padding: 27px 12px 10px;
}

.MuiInputBase-input {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876 em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
}

.MuiFilledInput-root {
  border: solid 1px#e3e3e3;
  position: relative;
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.MuiInputBase-fullWidth {
  width: 100%;
}

.MuiInputBase-root {
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: 'Geomanist Regular', Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
}

.MuiFilledInput-underline:before {
  left: 0;
  right: 0;
  bottom: -1px;
  content: '\00a0';
  position: absolute;
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  pointer-events: none;
}

.MuiFilledInput-underline.Mui-error:after {
  transform: scaleX(1);
  border-bottom-color: #f44336;
}

.MuiFilledInput-underline:after {
  left: 0;
  right: 0;
  bottom: -1px;
  content: '';
  position: absolute;
  transform: scaleX(0);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border-bottom: 2px solid #3f51b5;
  pointer-events: none;
  border-bottom-color: #0c9ac4;
}

.MuiFilledInput-input {
  padding: 27px 12px 10px;
}

.MuiInputBase-input {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876 em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
}

.MuiButton-contained:not(.fb) {
  color: white;
  background-color: #2a2d36;
}

.MuiButton-fullWidth {
  width: 100%;
}

.MuiButton-contained {
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #e0e0e0;
}

.MuiButton-root {
  color: rgba(0, 0, 0, 0.87);
  height: 45 px;
  padding: 6 px 16 px;
  font-size: 0.875rem;
  min-width: 64 px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Geomanist Regular, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  border-radius: 2 px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
}

.MuiButtonBase-root {
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.MuiFormControl-fullWidth {
  width: 100%;
}

.MuiFormControl-root {
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
}

.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
}

body {
  margin: 0;
  padding: 0;
}
.verify-background {
  background-color: #ccc;
}
@media (min-width: 575px) {
  .verify-background {
    background-color: #ddd;
    background-image: url(/images/bg-govx-flag-2000x1500.jpg);
    background-size: cover;
    background-position: center center;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
strong,
b {
  font-weight: 700;
}
body {
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  font-size: 0.875rem;
  font-family: Geomanist Regular, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.43;
  background-color: #fafafa;
}
@media print {
  body {
    background-color: #fff;
  }
}
body::backdrop {
  background-color: #fafafa;
}

.MuiSnackbar-root {
  left: 8px;
  right: 8px;
  display: flex;
  z-index: 1400;
  position: fixed;
  align-items: center;
  justify-content: center;
}
.MuiSnackbar-anchorOriginTopCenter {
  top: 8px;
}
@media (min-width: 600px) {
  .MuiSnackbar-anchorOriginTopCenter {
    top: 24px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
}
.MuiSnackbar-anchorOriginBottomCenter {
  bottom: 8px;
}
@media (min-width: 600px) {
  .MuiSnackbar-anchorOriginBottomCenter {
    left: 50%;
    right: auto;
    bottom: 24px;
    transform: translateX(-50%);
  }
}
.MuiSnackbar-anchorOriginTopRight {
  top: 8px;
  justify-content: flex-end;
}
@media (min-width: 600px) {
  .MuiSnackbar-anchorOriginTopRight {
    top: 24px;
    left: auto;
    right: 24px;
  }
}
.MuiSnackbar-anchorOriginBottomRight {
  bottom: 8px;
  justify-content: flex-end;
}
@media (min-width: 600px) {
  .MuiSnackbar-anchorOriginBottomRight {
    left: auto;
    right: 24px;
    bottom: 24px;
  }
}
.MuiSnackbar-anchorOriginTopLeft {
  top: 8px;
  justify-content: flex-start;
}
@media (min-width: 600px) {
  .MuiSnackbar-anchorOriginTopLeft {
    top: 24px;
    left: 24px;
    right: auto;
  }
}
.MuiSnackbar-anchorOriginBottomLeft {
  bottom: 8px;
  justify-content: flex-start;
}
@media (min-width: 600px) {
  .MuiSnackbar-anchorOriginBottomLeft {
    left: 24px;
    right: auto;
    bottom: 24px;
  }
}

.MuiSvgIcon-root {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}
.MuiSvgIcon-colorPrimary {
  color: #3f51b5;
}
.MuiSvgIcon-colorSecondary {
  color: #f50057;
}
.MuiSvgIcon-colorAction {
  color: rgba(0, 0, 0, 0.54);
}
.MuiSvgIcon-colorError {
  color: #f44336;
}
.MuiSvgIcon-colorDisabled {
  color: rgba(0, 0, 0, 0.26);
}
.MuiSvgIcon-fontSizeInherit {
  font-size: inherit;
}
.MuiSvgIcon-fontSizeSmall {
  font-size: 1.25rem;
}
.MuiSvgIcon-fontSizeLarge {
  font-size: 2.1875rem;
}

.MuiList-root {
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
}
.MuiList-padding {
  padding-top: 8px;
  padding-bottom: 8px;
}
.MuiList-subheader {
  padding-top: 0;
}

.MuiListItem-root {
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  font-family: 'Geomanist Regular', Helvetica, sans-serif;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-start;
  text-decoration: none;
}
.MuiListItem-root.Mui-focusVisible {
  background-color: rgba(0, 0, 0, 0.08);
}
.MuiListItem-root.Mui-selected,
.MuiListItem-root.Mui-selected:hover {
  background-color: rgba(0, 0, 0, 0.08);
}
.MuiListItem-root.Mui-disabled {
  opacity: 0.5;
}
.MuiListItem-root:hover {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.1);
}
@media (hover: none) {
  .MuiListItem-root:hover {
    background-color: transparent;
  }
}
.MuiListItem-container {
  position: relative;
}
.MuiListItem-dense {
  padding-top: 4px;
  padding-bottom: 4px;
}
.MuiListItem-alignItemsFlexStart {
  align-items: flex-start;
}
.MuiListItem-divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background-clip: padding-box;
}
.MuiListItem-gutters {
  padding-left: 16px;
  padding-right: 16px;
}
.MuiListItem-button {
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiListItem-button:hover {
  text-decoration: none;
  background-color: rgb(0, 0, 0, 0.1);
}
@media (hover: none) {
  .MuiListItem-button:hover {
    background-color: transparent;
  }
}
.MuiListItem-secondaryAction {
  padding-right: 48px;
}

.MuiListItemIcon-root {
  color: rgba(0, 0, 0, 0.54);
  display: inline-flex;
  min-width: 56px;
  flex-shrink: 0;
}
.MuiListItemIcon-alignItemsFlexStart {
  margin-top: 8px;
}

.MuiListItemText-root {
  flex: 1 1 auto;
  min-width: 0;
  margin-top: 4px;
  margin-bottom: 4px;
}
.MuiListItemText-multiline {
  margin-top: 6px;
  margin-bottom: 6px;
}
.MuiListItemText-inset {
  padding-left: 56px;
}

@media (max-width: 574px) {
  .c519 {
    margin: 0px auto;
  }
}
.c5110 {
  width: 200px;
}
@media (max-width: 574px) {
  .c5110 {
    height: 25px;
  }
}
@media (min-width: 575px) {
  .c5110 {
    height: 40px;
  }
}
.c5111 {
  width: 110px;
  height: 39px;
}
.c5113 {
  fill: #231f20;
}
.c5114 {
  fill: #ee6337;
}

@media (max-width: 574px) {
  .c5115 {
    width: auto;
  }
}

@media (max-width: 574px) {
  .c5116 {
    fill: #fff;
  }
}
@media (min-width: 575px) {
  .c5116 {
    fill: #fff;
  }
}

@media (max-width: 574px) {
  .c517 {
    height: 55px;
    text-align: center;
    padding-top: 15px;
    background-color: #2a2d36;
  }
}
@media (min-width: 575px) {
  .c517 {
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    position: absolute;
    padding-top: 30px;
    background-color: transparent;
  }
}

@media (min-width: 575px) {
  .c518 {
    padding-left: 30px;
    text-align: left;
  }
}

.c5121 {
  height: 60px;
  bottom: 0;
  position: absoluate;
}
@media (min-width: 575px) {
  .c5121 {
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px auto;
    position: absolute;
  }
}
.c5122 {
  height: 100%;
  margin: 0px;
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: center;
}
.c5123 {
  margin: 0px 20px;
  display: inline;
}
@media (max-width: 574px) {
  .c5123 {
    font-size: 12px;
    text-align: center;
  }
}
.c5124 {
  color: #fff;
  text-decoration: none;
}
.c5124:hover {
  text-decoration: underline;
}

.c5125 {
  background-color: #2a2d36;
  color: #fff;
}

@media (max-width: 574px) {
  .c511 {
    overflow-x: hidden;
  }
}
@media (min-width: 575px) {
  .c511 {
    width: 100vw;
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: center;
  }
}
.c512 {
  flex: 1;
  min-width: 230px;
  background-color: #fff;
}
@media (max-width: 574px) {
  .c512 {
    width: calc(100vw);
    padding: 0px 30px;
  }
}
@media (min-width: 575px) {
  .c512 {
    width: 500px;
    display: flex;
    min-height: 300px;
  }
}
@media (max-width: 574px) {
  .c513 {
    min-width: 260px;
    padding-bottom: 25px;
    background-color: #fff;
  }
}
@media (min-width: 575px) {
  .c513 {
    width: 350px;
    margin: auto;
    padding: 20px 0px;
    position: relative;
  }
}
@media (min-width: 575px) {
  .appear {
    opacity: 0;
    transform: scale(0.75, 0.75);
  }
  .appearActive {
    opacity: 1;
    transform: scale(1, 1);
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  }
}

@media (min-width: 575px) {
  .c514 {
    min-height: calc(100vh);
    padding: 100px 0px 100px;
  }
}

@media (min-width: 575px) {
  .c515 {
    box-shadow: none;
  }
}

@media (max-width: 574px) {
  .c516 {
    min-height: calc(100vh - 155px);
  }
}

.c5135 {
  padding: 0px !important;
}
@media (max-width: 574px) {
  .c5135 {
    margin-top: 20px;
  }
}
@media (min-width: 575px) {
  .c5135 {
    margin-bottom: 30px;
  }
}
.c5136 {
  margin-bottom: 25px;
}
.c5137 {
  margin: 25px 0px 7px;
  padding: 0px;
}

@font-face {
  font-weight: 400;
  font-style: normal;
  font-family: 'Circular-Loom';

  src: url('https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Book-cd7d2bcec649b1243839a15d5eb8f0a3.woff2')
    format('woff2');
}

@font-face {
  font-weight: 500;
  font-style: normal;
  font-family: 'Circular-Loom';

  src: url('https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Medium-d74eac43c78bd5852478998ce63dceb3.woff2')
    format('woff2');
}

@font-face {
  font-weight: 700;
  font-style: normal;
  font-family: 'Circular-Loom';

  src: url('https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Bold-83b8ceaf77f49c7cffa44107561909e4.woff2')
    format('woff2');
}

@font-face {
  font-weight: 900;
  font-style: normal;
  font-family: 'Circular-Loom';

  src: url('https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Black-bf067ecb8aa777ceb6df7d72226febca.woff2')
    format('woff2');
}

.fb_hidden {
  position: absolute;
  top: -10000px;
  z-index: 10001;
}

.fb_reposition {
  overflow: hidden;
  position: relative;
}

.fb_invisible {
  display: none;
}

.fb_reset {
  background: none;
  border: 0;
  border-spacing: 0;
  color: #000;
  cursor: auto;
  direction: ltr;
  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-spacing: normal;
}

.fb_reset > div {
  overflow: hidden;
}

@keyframes fb_transform {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fb_animate {
  animation: fb_transform 0.3s forwards;
}

.fb_dialog {
  background: rgba(82, 82, 82, 0.7);
  position: absolute;
  top: -10000px;
  z-index: 10001;
}

.fb_dialog_advanced {
  border-radius: 8px;
  padding: 10px;
}

.fb_dialog_content {
  background: #fff;
  color: #373737;
}

.fb_dialog_close_icon {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;
  cursor: pointer;
  display: block;
  height: 15px;
  position: absolute;
  right: 18px;
  top: 17px;
  width: 15px;
}

.fb_dialog_mobile .fb_dialog_close_icon {
  left: 5px;
  right: auto;
  top: 5px;
}

.fb_dialog_padding {
  background-color: transparent;
  position: absolute;
  width: 1px;
  z-index: -1;
}

.fb_dialog_close_icon:hover {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;
}

.fb_dialog_close_icon:active {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;
}

.fb_dialog_iframe {
  line-height: 0;
}

.fb_dialog_content .dialog_title {
  background: #6d84b4;
  border: 1px solid #365899;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}

.fb_dialog_content .dialog_title > span {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;
  float: left;
  padding: 5px 0 7px 26px;
}

body.fb_hidden {
  height: 100%;
  left: 0;
  margin: 0;
  overflow: visible;
  position: absolute;
  top: -10000px;
  transform: none;
  width: 100%;
}

.fb_dialog.fb_dialog_mobile.loading {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 10001;
}

.fb_dialog.fb_dialog_mobile.loading.centered {
  background: none;
  height: auto;
  min-height: initial;
  min-width: initial;
  width: auto;
}

.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner {
  width: 100%;
}

.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content {
  background: none;
}

.loading.centered #fb_dialog_loader_close {
  clear: both;
  color: #fff;
  display: block;
  font-size: 18px;
  padding-top: 20px;
}

#fb-root #fb_dialog_ipad_overlay {
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  min-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
}

#fb-root #fb_dialog_ipad_overlay.hidden {
  display: none;
}

.fb_dialog.fb_dialog_mobile.loading iframe {
  visibility: hidden;
}

.fb_dialog_mobile .fb_dialog_iframe {
  position: sticky;
  top: 0;
}

.fb_dialog_content .dialog_header {
  background: linear-gradient(from(#738aba), to(#2c4987));
  border-bottom: 1px solid;
  border-color: #043b87;
  box-shadow: white 0 1px 1px -1px inset;
  color: #fff;
  font: bold 14px Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: rgba(0, 30, 84, 0.296875) 0 -1px 0;
  vertical-align: middle;
  white-space: nowrap;
}

.fb_dialog_content .dialog_header table {
  height: 43px;
  width: 100%;
}

.fb_dialog_content .dialog_header td.header_left {
  font-size: 12px;
  padding-left: 5px;
  vertical-align: middle;
  width: 60px;
}

.fb_dialog_content .dialog_header td.header_right {
  font-size: 12px;
  padding-right: 5px;
  vertical-align: middle;
  width: 60px;
}

.fb_dialog_content .touchable_button {
  background: linear-gradient(from(#4267b2), to(#2a4887));
  background-clip: padding-box;
  border: 1px solid #29487d;
  border-radius: 3px;
  display: inline-block;
  line-height: 18px;
  margin-top: 3px;
  max-width: 85px;
  padding: 4px 12px;
  position: relative;
}

.fb_dialog_content .dialog_header .touchable_button input {
  background: none;
  border: none;
  color: #fff;
  font: bold 12px Helvetica, sans-serif;
  margin: 2px -12px;
  padding: 2px 6px 3px 6px;
  text-shadow: rgba(0, 30, 84, 0.296875) 0 -1px 0;
}

.fb_dialog_content .dialog_header .header_center {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
}

.fb_dialog_content .dialog_content {
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;
  border: 1px solid #4a4a4a;
  border-bottom: 0;
  border-top: 0;
  height: 150px;
}

.fb_dialog_content .dialog_footer {
  background: #f5f6f7;
  border: 1px solid #4a4a4a;
  border-top-color: #ccc;
  height: 40px;
}

#fb_dialog_loader_close {
  float: left;
}

.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon {
  visibility: hidden;
}

#fb_dialog_loader_spinner {
  animation: rotateSpinner 1.2s linear infinite;
  background-color: transparent;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
}

@keyframes rotateSpinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.fb_iframe_widget {
  display: inline-block;
  position: relative;
}

.fb_iframe_widget span {
  display: inline-block;
  position: relative;
  text-align: justify;
}

.fb_iframe_widget iframe {
  position: absolute;
}

.fb_iframe_widget_fluid_desktop,
.fb_iframe_widget_fluid_desktop span,
.fb_iframe_widget_fluid_desktop iframe {
  max-width: 100%;
}

.fb_iframe_widget_fluid_desktop iframe {
  min-width: 220px;
  position: relative;
}

.fb_iframe_widget_lift {
  z-index: 1;
}

.fb_iframe_widget_fluid {
  display: inline;
}

.fb_iframe_widget_fluid span {
  width: 100%;
}

.fb_mpn_mobile_landing_page_slide_out {
  animation-duration: 200ms;
  animation-name: fb_mpn_landing_page_slide_out;
  transition-timing-function: ease-in;
}

.fb_mpn_mobile_landing_page_slide_out_from_left {
  animation-duration: 200ms;
  animation-name: fb_mpn_landing_page_slide_out_from_left;
  transition-timing-function: ease-in;
}

.fb_mpn_mobile_landing_page_slide_up {
  animation-duration: 500ms;
  animation-name: fb_mpn_landing_page_slide_up;
  transition-timing-function: ease-in;
}

.fb_mpn_mobile_bounce_in {
  animation-duration: 300ms;
  animation-name: fb_mpn_bounce_in;
  transition-timing-function: ease-in;
}

.fb_mpn_mobile_bounce_out {
  animation-duration: 300ms;
  animation-name: fb_mpn_bounce_out;
  transition-timing-function: ease-in;
}

.fb_mpn_mobile_bounce_out_v2 {
  animation-duration: 300ms;
  animation-name: fb_mpn_fade_out;
  transition-timing-function: ease-in;
}

.fb_customer_chat_bounce_in_v2 {
  animation-duration: 300ms;
  animation-name: fb_bounce_in_v2;
  transition-timing-function: ease-in;
}

.fb_customer_chat_bounce_in_from_left {
  animation-duration: 300ms;
  animation-name: fb_bounce_in_from_left;
  transition-timing-function: ease-in;
}

.fb_customer_chat_bounce_out_v2 {
  animation-duration: 300ms;
  animation-name: fb_bounce_out_v2;
  transition-timing-function: ease-in;
}

.fb_customer_chat_bounce_out_from_left {
  animation-duration: 300ms;
  animation-name: fb_bounce_out_from_left;
  transition-timing-function: ease-in;
}

.fb_invisible_flow {
  display: inherit;
  height: 0;
  overflow-x: hidden;
  width: 0;
}

@keyframes fb_mpn_landing_page_slide_out {
  0% {
    margin: 0 12px;
    width: 100% - 24px;
  }

  60% {
    border-radius: 18px;
  }

  100% {
    border-radius: 50%;
    margin: 0 24px;
    width: 60px;
  }
}

@keyframes fb_mpn_landing_page_slide_out_from_left {
  0% {
    left: 12px;
    width: 100% - 24px;
  }

  60% {
    border-radius: 18px;
  }

  100% {
    border-radius: 50%;
    left: 12px;
    width: 60px;
  }
}

@keyframes fb_mpn_landing_page_slide_up {
  0% {
    bottom: 0;
    opacity: 0;
  }

  100% {
    bottom: 24px;
    opacity: 1;
  }
}

@keyframes fb_mpn_bounce_in {
  0% {
    opacity: 0.5;
    top: 100%;
  }

  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes fb_mpn_fade_out {
  0% {
    bottom: 30px;
    opacity: 1;
  }

  100% {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fb_mpn_bounce_out {
  0% {
    opacity: 1;
    top: 0;
  }

  100% {
    opacity: 0.5;
    top: 100%;
  }
}

@keyframes fb_bounce_in_v2 {
  0% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom right;
  }

  50% {
    transform: scale(1.03, 1.03);
    transform-origin: bottom right;
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom right;
  }
}

@keyframes fb_bounce_in_from_left {
  0% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom left;
  }

  50% {
    transform: scale(1.03, 1.03);
    transform-origin: bottom left;
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom left;
  }
}

@keyframes fb_bounce_out_v2 {
  0% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom right;
  }

  100% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom right;
  }
}

@keyframes fb_bounce_out_from_left {
  0% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom left;
  }

  100% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom left;
  }
}

@keyframes slideInFromBottom {
  0% {
    opacity: 0.1;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromBottomDelay {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  97% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>