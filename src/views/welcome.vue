<template>
  <div class="p-0 m-0">
    <div class="col-md-12 ">
      <h2 class="p-3 bg-light shadow-sm mb-1">
        <fas-icon
          class="violet float-left mr-1 mt-1"
          :icon="['fas', 'building']"
        />Businesss
        <button
          type="button"
          data-toggle="modal"
          data-target="#addbusinessbtnModal"
          class="btn btn-outline-primary pull-right float-right"
          v-b-modal.modal-1
        >
          Add Business
        </button>









         <button
          type="button"
          data-toggle="modal"
          data-target="#addbusinessbtnModal"
          class="btn btn-outline-primary pull-right float-right"
          v-b-modal.modal-person
        >
          person modal
        </button>



      </h2>





 <button
          type="button"
          data-toggle="modal"
          data-target="#welcomeModal"
          class="btn btn-outline-primary pull-right float-right"
          v-b-modal.modal-0
        >
          Add Business
        </button>









       
      <b-modal id="modal-0"  hide-footer>
        <div class="row">
          <div class="col-md-12 mx-0">
            <form id="msform">
             

              <fieldset class="position-relative opacity-100" v-if="welcome1">
                <div class="form-card">

                 

                 <h4> Welcome To BridgeAfrica.com    </h4> <br/> 

                 <p>     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has    </p>
                 
                 <h4>  Use Bridge Africa   As A   </h4>  
                
                   



                     <b-form-group  >
      <b-form-radio-group
        id="radio-group-1"
       
        :options="options"
        
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>

                      
                 <br/>  <br/>        





                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="next"
                  class="next btn ml-3 btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeOne"
                />
              </fieldset>























              <fieldset class="position-relative opacity-100" v-if="welcome2">
                <div class="form-card">

               <h4>     How to use the  Search  </h4>




               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text
                     
                      and scrambled it to make a type specimen book. It has  </p>






                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  class="next ml-3 btn btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeTwo"
                />
              </fieldset>










              <fieldset class="position-relative opacity-100" v-if="welcome3">
                <div class="form-card">
                 


                  
                </div>

                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="Save"
                  class="next ml-3 btn btn-outline-primary save orange"
                  value="Save"
                  v-on:click="closeThree"
                />
              </fieldset>

              <fieldset>
                <div class="form-card">
                  <h4 class="fs-title text-center">
                    <i aria-hidden="true" class="fa fa-check-circle"></i> Your
                    business identity is successfully created !
                  </h4>

                  <div class="row justify-content-center">
                    <div class="col-9 text-center">
                      <h5>Business Name Here</h5>
                      <a href="#">http://business.com</a>
                      <p><b>Business Category Name Here</b></p>
                      <input
                        type="button"
                        name="Save"
                        class="btn savebtnn orange"
                        value="View Profile"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 text-left p-3">
                      <div class="col-md-12 float-left border bg-modb p-3">
                        <p class="w-100">
                          <i class="fa fa-info-circle" aria-hidden="true"></i>
                          Get your personalised website<span
                            class="pull-right fontis pt-1"
                            >Cureent Plan Basic (Free)</span
                          >
                        </p>

                        <p class="w-100 fontis">
                          Now you can create personalised website for your
                          business, select from a collection of free and premium
                          templates, connect your domain, premium support and
                          much more exciting features.
                        </p>

                        <a class="pull-right" href="#">View Plans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </b-modal>






















      <b-modal id="modal-1" title="Add Bussiness" hide-footer>
        <div class="row">
          <div class="col-md-12 mx-0">
            <form id="msform">
              <!-- progressbar -->
              <ul id="progressbar">
                <li class="active" id="general"><strong>General</strong></li>
                <li id="contact" class="" v-bind:class="{ active: fieldset5 }">
                  <strong>Contact</strong>
                </li>
                <li
                  id="location"
                  class=""
                  v-bind:class="{ active: fieldset2, active: fieldset3 }"
                >
                  <strong>Location</strong>
                </li>
              </ul>
              <!-- fieldsets -->
              <fieldset class="position-relative opacity-100" v-if="fieldset1">
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="image-upload-wrap">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#createalbumModal"
                        >
                          <div class="drag-text">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <h3>Add Logo</h3>
                          </div>
                        </a>
                        <div></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">Busness Name:</label><br />
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Busness Name"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label for="alias">Busness Name Alias:</label><br />
                        <input
                          type="text"
                          name="alias"
                          id="alias"
                          placeholder="Busness Name Alias"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label for="alias">Category:</label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Category</option
                          >
                          <option>Category1</option>
                          <option>Category2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">Keywords</label><br />
                        <div class="col-md-12 pl-0 pr-0">
                          No Choices
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="alias">Language:</label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Language</option
                          >
                          <option>English</option>
                          <option>Hindi</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">TomeZone:</label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Timezone</option
                          >
                          <option>(UTC - 09:00) Alaska</option>
                          <option>(UTC - 09:00) Alaska1</option>
                          <option>(UTC - 09:00) Alaska2</option>
                          <option>(UTC - 09:00) Alaska3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">About</label><br />
                        <textarea
                          type="textarea"
                          name="description"
                          id="description"
                          placeholder="Brief description about your Busness"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="next"
                  class="next btn ml-3 btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeOne"
                />
              </fieldset>

              <fieldset class="position-relative opacity-100" v-if="fieldset2">
                <div class="form-card">
                  <div class="row">
                    <div class="input-group col-md-12 mb-4 selec">
                      <label
                        class="col-md-3 pl-0 control-label float-left"
                        for="name"
                        >Phone</label
                      >
                      <div class="col-md-9 pl-0 pr-0">
                        <select
                          id="country"
                          class="form-control col-md-2 mr-3 float-left"
                        >
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>India(+91)</option>
                        </select>
                        <input
                          id="tel"
                          name="tel"
                          type="tel"
                          placeholder=""
                          class="form-control col-md-7"
                        />
                      </div>
                      <div class="checkbox">
                        <label
                          ><input type="checkbox" value="" />This business does
                          not have a Phone</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="alias">Website</label><br />
                        <input
                          type="text"
                          name="Website"
                          id="Website"
                          placeholder="www.Website.comm"
                          class="form-control"
                        />
                        <div class="checkbox">
                          <label
                            ><input type="checkbox" value="" />This business
                            does not have a Website</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-5">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="alias">Email</label><br />
                        <input
                          type="Email"
                          name="Email"
                          id="Emaisl"
                          placeholder="Email.com"
                          class="form-control"
                        />
                        <div class="checkbox">
                          <label
                            ><input type="checkbox" value="" />This business
                            does not have a Email</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  class="next ml-3 btn btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeTwo"
                />
              </fieldset>

              <fieldset class="position-relative opacity-100" v-if="fieldset3">
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-6 pl-0">
                        <div class="form-group">
                          <label for="username">City </label><br />
                          <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="City, Country"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pl-0">
                        <div class="form-group">
                          <label for="alias">Neighbourhood </label><br />
                          <input
                            type="text"
                            name="alias"
                            id="alias"
                            placeholder="Neighbourhood name, City, Country"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">Three Location Descriptions</label
                        ><br />
                        <div class="col-md-12 pl-0 pr-0">
                          Choix
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26373534.241211604!2d-113.7593 23355 12333!3d36.204849821363666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e43 2360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1597127134108!5m2!1sen!2sin"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        height="350"
                        class="w-100"
                        frameborder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="Save"
                  class="next ml-3 btn btn-outline-primary save orange"
                  value="Save"
                  v-on:click="closeThree"
                />
              </fieldset>

              <fieldset>
                <div class="form-card">
                  <h4 class="fs-title text-center">
                    <i aria-hidden="true" class="fa fa-check-circle"></i> Your
                    business identity is successfully created !
                  </h4>

                  <div class="row justify-content-center">
                    <div class="col-9 text-center">
                      <h5>Business Name Here</h5>
                      <a href="#">http://business.com</a>
                      <p><b>Business Category Name Here</b></p>
                      <input
                        type="button"
                        name="Save"
                        class="btn savebtnn orange"
                        value="View Profile"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 text-left p-3">
                      <div class="col-md-12 float-left border bg-modb p-3">
                        <p class="w-100">
                          <i class="fa fa-info-circle" aria-hidden="true"></i>
                          Get your personalised website<span
                            class="pull-right fontis pt-1"
                            >Cureent Plan Basic (Free)</span
                          >
                        </p>

                        <p class="w-100 fontis">
                          Now you can create personalised website for your
                          business, select from a collection of free and premium
                          templates, connect your domain, premium support and
                          much more exciting features.
                        </p>

                        <a class="pull-right" href="#">View Plans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </b-modal>



































      <b-modal id="modal-person" title="Add Bussiness" hide-footer>

        <div class="row">
          <div class="col-md-12 mx-0">
            <form id="msform">
              <!-- progressbar -->
              <ul id="progressbar">
                <li class="active" id="general"><strong>General</strong></li>
                <li id="contact" class="" v-bind:class="{ active: fieldset5 }">
                  <strong>Contact</strong>
                </li>
                <li
                  id="location"
                  class=""
                  v-bind:class="{ active: fieldset2, active: fieldset3 }"
                >
                  <strong>Location</strong>
                </li>
              </ul>
              <!-- fieldsets -->
              <fieldset class="position-relative opacity-100" v-if="fieldset1">
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="image-upload-wrap">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#createalbumModal"
                        >
                          <div class="drag-text">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <h3>Add Logo</h3>
                          </div>
                        </a>
                        <div></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">  DOB :</label><br />
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          placeholder="Busness Name"
                          class="form-control"
                        />

                      </div>






  
    
            <div class="form-group">
                        <label for="alias">Gender:</label><br />
                        <select id="category" class="form-control ">
                          <option value="" selected="" disabled=""
                            >Select Gender</option
                          >
                          <option>Male</option>
                          <option>Female</option>
                          <option>other</option>
                        </select>
                      </div>




                      
                      <div class="form-group">
                        <label for="country"> Country :</label><br />
                        <input
                          type="text"
                          name="alias"
                          id="country"
                          placeholder="country"
                          class="form-control"
                        />
                      </div>



  




                <div class="form-group">

                        <label for="city"> City :</label><br />
                        <input
                          type="text"
                          name="alias"
                          id="city"
                          placeholder="country"
                          class="form-control"
                        />


                      </div>





                      
                <div class="form-group">

                        <label for="Neighbor"> Neighbor :</label><br />
                        <input
                          type="text"
                          name="alias"
                          id="Neighbor"
                          placeholder="Neighbor"
                          class="form-control"
                        />


                      </div>



                      






                      



                    </div>
                  </div>

                 
                 <br />    <br />



                 
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="next"
                  class="next btn ml-3 btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeOne"
                />
              </fieldset>

              <fieldset class="position-relative opacity-100" v-if="fieldset2">
                <div class="form-card">
                  <div class="row">
                    <div class="input-group col-md-12 mb-4 selec">
                      <label
                        class="col-md-3 pl-0 control-label float-left"
                        for="name"
                        >Phone</label
                      >
                      <div class="col-md-9 pl-0 pr-0">
                        <select
                          id="country"
                          class="form-control col-md-2 mr-3 float-left"
                        >
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>USA(+1)</option>
                          <option>India(+91)</option>
                        </select>
                        <input
                          id="tel"
                          name="tel"
                          type="tel"
                          placeholder=""
                          class="form-control col-md-7"
                        />
                      </div>
                      <div class="checkbox">
                        <label
                          ><input type="checkbox" value="" />This business does
                          not have a Phone</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="alias">Website</label><br />
                        <input
                          type="text"
                          name="Website"
                          id="Website"
                          placeholder="www.Website.comm"
                          class="form-control"
                        />
                        <div class="checkbox">
                          <label
                            ><input type="checkbox" value="" />This business
                            does not have a Website</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-5">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="alias">Email</label><br />
                        <input
                          type="Email"
                          name="Email"
                          id="Emaisl"
                          placeholder="Email.com"
                          class="form-control"
                        />
                        <div class="checkbox">
                          <label
                            ><input type="checkbox" value="" />This business
                            does not have a Email</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  class="next ml-3 btn btn-outline-primary orange"
                  value="Next Step"
                  v-on:click="closeTwo"
                />
              </fieldset>

              <fieldset class="position-relative opacity-100" v-if="fieldset3">
                <div class="form-card">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-6 pl-0">
                        <div class="form-group">
                          <label for="username">City </label><br />
                          <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="City, Country"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pl-0">
                        <div class="form-group">
                          <label for="alias">Neighbourhood </label><br />
                          <input
                            type="text"
                            name="alias"
                            id="alias"
                            placeholder="Neighbourhood name, City, Country"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="username">Three Location Descriptions</label
                        ><br />
                        <div class="col-md-12 pl-0 pr-0">
                          Choix
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26373534.241211604!2d-113.7593 23355 12333!3d36.204849821363666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e43 2360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1597127134108!5m2!1sen!2sin"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        height="350"
                        class="w-100"
                        frameborder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <input
                  type="button"
                  name="cancel"
                  class="cancel btn btn-dark-gray"
                  value="Cancel"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous ml-3 btn btn-dark"
                  value="Previous"
                />
                <input
                  type="button"
                  name="Save"
                  class="next ml-3 btn btn-outline-primary save orange"
                  value="Save"
                  v-on:click="closeThree"
                />
              </fieldset>

              <fieldset>
                <div class="form-card">
                  <h4 class="fs-title text-center">
                    <i aria-hidden="true" class="fa fa-check-circle"></i> Your
                    business identity is successfully created !
                  </h4>

                  <div class="row justify-content-center">
                    <div class="col-9 text-center">
                      <h5>Business Name Here</h5>
                      <a href="#">http://business.com</a>
                      <p><b>Business Category Name Here</b></p>
                      <input
                        type="button"
                        name="Save"
                        class="btn savebtnn orange"
                        value="View Profile"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 text-left p-3">
                      <div class="col-md-12 float-left border bg-modb p-3">
                        <p class="w-100">
                          <i class="fa fa-info-circle" aria-hidden="true"></i>
                          Get your personalised website<span
                            class="pull-right fontis pt-1"
                            >Cureent Plan Basic (Free)</span
                          >
                        </p>

                        <p class="w-100 fontis">
                          Now you can create personalised website for your
                          business, select from a collection of free and premium
                          templates, connect your domain, premium support and
                          much more exciting features.
                        </p>

                        <a class="pull-right" href="#">View Plans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </b-modal>
























      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-0"><b></b></h6>

          <!--
          <hr />


          <div id="btnContainer">
            <button class="btn primary" onclick="listView()">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'list']"
              />
              List
            </button>
            <button class="btn activegrid" onclick="gridView()">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'th-large']"
              />Grid
            </button>
          </div>

-->

   





        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      fieldset1: true,
      fieldset2: false,
      fieldset3: false,
      fieldset4: false,
      fieldset5: false,
      welcome1: true,
      welcome2: false, 
      welcome3: false,
      welcome4:false, 


      options: [
          { text: 'Business ', value: 'business' },
          { text: 'Person', value: 'person' }
         
        ]


    };
  },
  methods: {


    welcome1close() {
      this.fieldset1 = false;
      this.fieldset2 = true;
      this.fieldset3 = false;
      this.fieldset4 = false;
      this.fieldset5 = true;
      this.welcome1 = true;
       this.welcome2 = true;
        this.welcome3 = true;
         this.welcome4 = true;
    },




     welcome2close() {

          this.welcome1 = true;
       this.welcome2 = true;
        this.welcome3 = true;
         this.welcome4 = true;

      this.fieldset1 = false;
      this.fieldset2 = true;
      this.fieldset3 = false;
      this.fieldset4 = false;
      this.fieldset5 = true;
    },





    
     welcome3close() {

          this.welcome1 = true;
       this.welcome2 = true;
        this.welcome3 = true;
         this.welcome4 = true;


      this.fieldset1 = false;
      this.fieldset2 = true;
      this.fieldset3 = false;
      this.fieldset4 = false;
      this.fieldset5 = true;
    },









     welcome4close() {
      this.fieldset1 = false;
      this.fieldset2 = true;
      this.fieldset3 = false;
      this.fieldset4 = false;
      this.fieldset5 = true;


       this.welcome1 = true;
       this.welcome2 = true;
        this.welcome3 = true;
         this.welcome4 = true;


    },






    closeTwo() {
      this.fieldset1 = false;
      this.fieldset2 = false;
      this.fieldset3 = true;
      this.fieldset4 = false;
      this.fieldset5 = this.fieldset4 || this.fieldset3;
    },
    closeThree() {
      this.fieldset1 = false;
      this.fieldset2 = false;
      this.fieldset3 = false;
      this.fieldset4 = true;
    }
  }
};
</script>

<style scoped>








.logo-img{

  width: 60px;
}

@media only screen and (max-width: 768px) {
  
.btn{
  font-size: 10px;
}



.text-lost{
    flex-basis: 70%;
    padding-left: 30px;
    font-size: 13px;
}


h4{
  font-size: 15px;
}

.logo-img{
  width: 30px;
}
.see-all-link{
  font-size: 10px;
}

}




.picture {
  border-radius: 10px;
  width: 48%;
  flex-basis: 40%;
}

.text-lost {
  flex-basis: 90%;
  padding-left: 30px;
}

.colum {
  justify-content: space-around;
}

.chart {
  display: block;
  height: 315px;
  width: 400px;
}

.text-design {
  line-height: 40px;
}






.bg-dark {
  background-color: #3d8d79 !important;
}

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }
}
</style>
