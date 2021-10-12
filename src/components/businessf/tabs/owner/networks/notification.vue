   
<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <b-form-checkbox
              v-model="selectAll"
              :indeterminate="indeterminate"
              name="checkbox-1"
              @change="select"
              class="m-left-top username"
            >
              {{ selectAll ? "Un-select All" : "Select All" }}
            </b-form-checkbox>
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button variant="primary" class="a-button-l duration">
              Mark as Read</b-button
            >
          </div>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <div>
          Selected: <strong>{{ selected }}</strong
          ><br />
          All Selected: <strong>{{ selectAll }}</strong>
        </div>
        <b-col cols="12" class="mr-3" v-for="user in users" :key="user.id">
          <p class="">
            <span style="display:inline-flex">
              <b-form-checkbox
                v-model="selected"
                :value="user.name"
                @change="updateCheckall"
                name="checkbox-1"
                class="m-left-top"
              >
              </b-form-checkbox>
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                :src="user.picture"
              ></b-avatar>
              <h6 class="m-0  d-inline-block ml-2 username">
                {{ user.name }}
                <div class="duration">{{ user.time }}hr</div>
              </h6>
            </span>
            <span class="float-right mt-1"> </span>
          </p>

          <p class="text">
            {{ user.description }}
          </p>

          <hr width="100%" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      users: [ 
        { "id": "1", "name": "Shad Jast", "time": "1", "picture": "Shad Jast", "description": "Lorem Ipsum is this is just a dummy text to post simply dummy "}, 
        { "id": "2", "name": "Duane Metz", "time": "2", "picture": "Shad Jast", "description": "standard dummy text ever since the 1500s, Lorem Ipsum is"}, 
        { "id": "3", "name": "Myah Kris", "time": "3", "picture": "Shad Jast", "description": "simply dummy text of the printing and typesetting industry. Lorem"}, 
        { "id": "4", "name": "Dr. Kamron Wunsch", "time": "4", "picture": "Shad Jast", "description": "Ipsum has been the industry's standard dummy text ever since the"}, 
        { "id": "5", "name": "Brendon Rogahn", "time": "4", "picture": "Shad Jast", "description": "of the printing and typesetting industry. Lorem Ipsum has been the"}
      ],
      selected: [],
      selectAll: false,
      indeterminate: false
    };
  },
  methods: {
    select(checked) {
      console.log("this.selectAll: "+this.selectAll);
      console.log("checked: "+checked);
      this.selected = [];
      if (checked) {
        for (let user in this.users) {
          console.log("this.users[user].id: "+this.users[user].name)
          this.selected.push(this.users[user].name.toString());
        }
      }
    },
    updateCheckall: function() {
      if (this.users.length === this.selected.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    }
  },
  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual users checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.selectAll = false;
      } else if (newValue.length === this.users.length) {
        this.indeterminate = false;
        this.selectAll = true;
      } else {
        this.indeterminate = true;
        this.selectAll = false;
      }
    }
  }
};
</script>

<style scoped>
.f-left {
  float: left;
}
.f-right {
  float: right;
}
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid;
  border-color: gray;
}
.m-left {
  margin-left: -20px;
}
.m-left-top {
  margin-left: -15px;
}
.p-notifaction {
  padding: 30px;
}
h5 {
  font-size: 15px;
}
@media screen and (min-width: 768px) {
  .btn {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .btn {
    font-size: 12px;
  }
}
</style>

<style>
@media only screen and (min-width: 768px) {
  .username {
    font-size: 16px !important;
  }
  .duration {
    font-size: 14px;
    font-weight: 100;
  }
  .text {
    font-size: 14px;
  }
  .profile-pic {
    width: 64px !important;
    height: 64px !important;
    margin-top: -5px;
  }
}
@media only screen and (max-width: 768px) {
  .username {
    font-size: 14px !important;
  }
  .duration {
    font-size: 12px;
    font-weight: 100;
  }
  .text {
    font-size: 12px;
  }
  .profile-pic {
    width: 30px !important;
    margin-top: -5px;
    height: 30px !important;
  }
}
</style>