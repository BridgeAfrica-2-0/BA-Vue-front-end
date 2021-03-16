<template>
  <div>
    <div class="row">
      <h6 class="col-md-12"><b>Basic Information</b></h6>
      <hr />
    </div>
    <div class="row mb-1">
      <div class="col-md-4">Date Of Birth</div>
      <div class="col-md-4">1-January-2001</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#dobModal"
          v-b-modal.modal-6
        >
          Edit
        </button>
      </div>
      <b-modal id="modal-6" title="Edit Date of Birth" hide-footer>
        <div class="modal-body">
          <form class="form-inline" action="" method="post">
            <div class="input-group col-md-12 pl-0 pr-0 mb-4 selec">
              <label class="col-md-3 pl-0 pr-0 control-label">Birth Day / Month</label>
              <div class="col-md-3 pr-0 pl-0">
                <div class="form-group">
                  <select id="DOBDay" class="form-control">
                    <option>- Day -</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value=" 23"> 23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3 pr-0 pl-0">
                <div class="form-group">
                  <select name="DOBMonth" class="form-control">
                    <option>- Month -</option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3 pl-0 pr-0">
                <div class="form-group pull-right mb-3">
                  <select id="country" class="form-control ">
                    <option value="" selected="" disabled="">Select</option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="input-group col-md-12 pl-0 pr-0 mb-4 selec">
              <label class="col-md-3 pl-0 pr-0 control-label">Birth Year</label>
              <div class="col-md-6 pr-0 pl-0">
                <div class="form-group">
                  <select name="DOBYear" class="form-control w-100">
                    <option>Year</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3 pl-0 pr-0">
                <div class="form-group pull-right mb-3">
                  <select id="country" class="form-control ">
                    <option value="" selected="" disabled="">Select</option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="fosrm-group text-right w-100">
              <button type="button" class="btn btn-dark">cancel</button>
              <button type="button" class="btn btn-primary orange">Save</button>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
    <div class="row">
      <div class="col-md-4">Gender</div>
      <div class="col-md-4">Male</div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-outline-primary float-md-right"
          data-toggle="modal"
          data-target="#genderModal"
          v-b-modal.modal-7
        >
          Edit
        </button>
        <b-modal id="modal-7" title="Add/Edit Gender" hide-footer>
          <div class="modal-body">
            <form class="form-inline" action="" method="post">
              <div class="input-group col-md-12 mb-4 selec">
                <label class="col-md-4 control-label" style="align-items: first baseline;" for="name">Gender</label>
                <div class="col-md-8 pl-0 pr-0">
                  <select id="gender" class="form-control w-100">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <!-- End number In input-->
              <div class="fosrm-group text-right w-100">
                <button type="button" class="btn btn-primary orange">Save</button>
              </div>
            </form>
          </div>
        </b-modal>
      </div>
    </div>
    <div class="row mb-4 mt-3">
      <div class="col">
        <h6 class="mb-0"><b>Contact Information</b></h6>
        <hr />
        <div class="row mt-3 mb-3">
          <div class="col-md-4">Mobile Phone</div>
          <div class="col-md-4">+1- 234-567-8912</div>
        </div>
        <a href="#" data-toggle="modal" data-target="#phoneModal">
          + Add Other Phones</a
        >
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0"><b>Business Visited</b></h6>
        <hr />
        <div class="media border-botmediatom mb-4">
          <img
            src="@/assets/img/wankue-filler.jpg"
            alt="John Doe"
            class="mr-2 avatar-size"
          />
          <div class="media-body">
            <b>Business Name Here</b>
            <p class="mb-1">Category Name here - 1.1 M Followers</p>
            <p><a href="#">Get Directions</a></p>
          </div>
          <ul class="navbar-nav pull-right">
            <li class="nav-item dropdown">
              <b-dropdown
                id="dropdown-dropup"
                dropdown
                variant="primary-outline"
              >
                <b-dropdown-item href="#">Edit</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
        <div class="media">
          <img
            src="@/assets/img/wankue-filler.jpg"
            alt="John Doe"
            class="mr-2 avatar-size"
          />
          <div class="media-body">
            <b>Business Name Here</b>
            <p class="mb-1">Category Name here - 1.1 M Followers</p>
            <p><a href="#">Get Directions</a></p>
          </div>
          <ul class="navbar-nav pull-right">
            <li class="nav-item dropdown">
              <b-dropdown
                id="dropdown-dropup"
                dropdown
                variant="primary-outline"
              >
                <b-dropdown-item href="#">Edit</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
        <a href="#" data-toggle="modal" data-target="#addbusinessModal"
          ><fas-icon
            class="primary float-left mr-1 mt-1"
            :icon="['fas', 'plus-circle']"
          />
          Add a Business</a
        >
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0"><b>Places you lived</b></h6>
        <hr />
        <hr />
        <a href="#" data-toggle="modal" data-target="#currentcityModal">
          <fas-icon
            class="primary float-left mr-1 mt-1"
            :icon="['fas', 'plus-circle']"
          />
          Add your current city</a
        ><br />
        <a href="#" data-toggle="modal" data-target="#hometownModal">
          <fas-icon
            class="primary float-left mr-1 mt-1"
            :icon="['fas', 'plus-circle']"
          />
          Add your home town</a
        >
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h6 class="mb-0"><b>Web &amp; Social Links</b></h6>
        <hr />
        <div class="media">
          <div class="media-body">
            <a href="#" data-toggle="modal" data-target="#websiteModal">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'plus-circle']"
              />
              Add a Website</a
            ><br />
            <fas-icon
              class="primary float-left mr-1 mt-1"
              :icon="['fas', 'globe']"
            />
            <a href="#">https://www.myname.com/</a><br />
          </div>
          <ul class="navbar-nav pull-right">
            <li class="nav-item dropdown">
              <b-dropdown
                id="dropdown-dropup"
                dropdown
                variant="primary-outline"
              >
                <b-dropdown-item href="#">Edit</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
        <div class="media mt-4">
          <div class="media-body">
            <a href="#" data-toggle="modal" data-target="#sociallinkModal">
              <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'plus-circle']"
              />
              Add a social link</a
            ><br />
            <a href="#">www.instagram.com/bridgeafrica</a><br />
            <a href="#"
              ><fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fab', 'instagram']"
              />
              www.snapchat.com/bridgeafrica</a
            ><br />
          </div>
          <ul class="navbar-nav pull-right">
            <li class="nav-item dropdown">
              <b-dropdown
                id="dropdown-dropup"
                dropdown
                variant="primary-outline"
              >
                <b-dropdown-item href="#">Edit</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.details {
  display: flex;
}
@media only screen and (max-width: 600px) {
}
</style>
