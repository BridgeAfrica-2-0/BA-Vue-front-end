<template>
  <div>
    <Navbar />
    <b-container>
      <b-row>
        <b-col>
          <h1>All Notifications</h1>
        </b-col>
        <b-col v-if="checked" class="mt-4 col-2 mobile-checker">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            @click="checkedAll"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Select All
          </b-form-checkbox>
        </b-col>
        <b-col v-if="checked" class="col-1">
          <b-row class="mobile-actions">
            <b-col class="col-1 mt-4">
              <b-icon
                class="msg-icon mark-as"
                icon="pen"
                variant="primary"
                @click="readAll(selected)"
              ></b-icon>
            </b-col>
            <b-col class="col-1 mt-4">
              <b-icon
                class="msg-icon del"
                icon="trash"
                variant="primary"
                @click="deleteAll(selected)"
              ></b-icon>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <hr />
      <div class="main">
        <b-row v-for="post in Notifications" :key="post.id">
          <b-col class="col-1">
            <b-form-checkbox
              id="checkbox-2"
              v-model="checked"
              name="checkbox-2"
              value="accepted"
              unchecked-value="not_accepted"
              @click="checkedOne(post)"
            >
            </b-form-checkbox>
          </b-col>

          <b-col class="col-2">
            <b-avatar variant="primary" text="BV"></b-avatar>
          </b-col>

          <b-col class="text">
            <b>David</b> Started following you
            <br />
            <small>2m</small>
          </b-col>
          <b-col class="col-1">
            <b-row>
              <b-col class="show">
                <b-icon
                  class="msg-icon pen"
                  icon="pen"
                  variant="primary"
                  @click="readOne(post.id)"
                ></b-icon>
              </b-col>
              <b-col class="show">
                <b-icon
                  class="msg-icon trash show"
                  icon="trash"
                  variant="primary"
                  @click="deleteOne(post.id)"
                ></b-icon>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapGetter({
      Notifications: "UserProfileOwner/getNotifications",
    }),
  },

  data() {
    return {
      checked: false,
      checkAll: false,
      selected: "",
    };
  },
  methods: {
    ...mapActions({
      readNotifiactions: "UserProfileOwner/readNotifiactions",
      deleteNotifications: "UserProfileOwner/deleteNotifications",
      deleteOne: "UserProfileOwner/deleteOne",
    }),
    selectAll() {
      this.Notifications.forEach((element) => {
        this.selected.push(element);
      });
    },
    select(notification, index) {
      if (this.selected[index]) {
        this.selected.splice(index, 1);
        return;
      }
      this.selected.push(notification);
    },
    checkedAll() {
      this.checked = true;
      this.selectAll();
    },
    checkedOne() {
      this.select();
    },

    readAll(data) {
      this.readNotifications(data);
    },
    deleteAll(data) {
      this.checked = false;
      let ids = [];
      data.forEach((element) => {
        ids.push(element.id);
      });
      this.deleteNotifications(data);
    },
    deleteOne(id) {
      this.deleteOne(id);
    },
  },
};
</script>

<style scoped>
.msg-icon {
  cursor: pointer;
}
.show {
  display: none;
}
.main:hover .show {
  display: flex;
}
.text {
  position: relative;
  right: 130px;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
    margin-top: 60px;
  }

  .show {
    display: flex;
  }
  .mobile-checker {
    position: relative;
    width: 100px;
    left: -90px;
    font-size: 12px;
    top: 40px;
  }
  .mobile-actions {
    position: relative;
    left: -10px;
    display: flex;
    flex-direction: row;
  }
  .mark-as {
    position: relative;
    right: 50px;
    top: 40px;
  }
  .del {
    position: relative;
    bottom: 5px;
    right: 10px;
  }
  .pen {
    position: relative;
    right: 40px;
  }
  .trash {
    position: relative;
    bottom: 20px;
    right: 10px;
  }
}
</style>
