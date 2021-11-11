<template>
  <div class="p-notifaction">
    <b-container>
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              class="m-left-top"
              unchecked-value="not_accepted"
              @click="selectall"
            >
              {{$t("businessf.Select_All")}}
            </b-form-checkbox>
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button
              variant="success"
              class="a-button-l"
              @click="readNotifiactions(selected)"
            >
              {{$t("businessf.Mark_as_Read")}}</b-button
            >
            <b-button
              @click="deleteAll(selected)"
              variant="primary"
              class="a-button-l duration ml-1"
            >
              {{$t("businessf.Delete")}}</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
      <br />


    <div v-for="post in sendNotifications" :key="post.id">
      <b-container class="bb-bottom">
        <b-list class="d-flex align-items-center m-list">
          <b-form-checkbox
            class="m-left"
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            @click="select"
          >
          </b-form-checkbox>
          <b-avatar
            size="4em"
            class="mr-3 d-inline-block profile-pic"
            variant="primary"
            :src="post.image"
          ></b-avatar>
          <span class="mr-auto">
            {{ post.reference_type }}
            <p>{{ post.created_at }}</p>
          </span>
          <span class=" ">
            <div>
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon
                    icon="three-dots-vertical"
                    animation="cylon-vertical"
                    font-scale="1"
                  ></b-icon>
                </template>

                <b-dropdown-item href="#" @click="deleteOne(post.id)">
                  {{$t("businessf.Delete")}}
                </b-dropdown-item>
                <b-dropdown-item href="#" @click="readNotifiactions(selected)">
                  {{$t("businessf.Read")}}
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </span>
        </b-list>
        <p>
          {{ post.notification_text }}
        </p>
        <b-col v-if="loader" class="load">
          <b-spinner
            style="width: 7rem; height: 7rem;"
            variant="primary"
          ></b-spinner>
        </b-col>
        <b-col v-if="!sendNotifications && !loader" class="load">
          <p>{{$t("businessf.No_notifications_to_show")}} !!</p>
        </b-col>
      </b-container>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "notification",
  components: {},
  data() {
    return { selected: [] };
  },
  beforeMount() {
    this.getNotifications();
  },
  computed: {
    ...mapGetters({
      sendNotifications: "businessFollowers/sendNotifications",
      getLoader: "businessFollowers/getLoader",
    }),
  },
  methods: {
    // getting actions from store
    ...mapActions({
      getNotifications: "businessFollowers/getNotifications",
      readNotifiactions: "businessFollowers/readNotifiactions",
      deleteNotifications: "businessFollowers/deleteNotifications",
      deleteOne: "businessFollowers/deleteOne",
    }),

    select(notification, index) {
      if (this.selected[index]) {
        this.selected.splice(index, 1);
        return;
      }
      this.selected.push(notification);
    },

    // select all the notifications
    selectall() {
      this.sendNotifications.forEach((element) => {
        this.selected.push(element);
      });
    },

    deleteAll(data) {
      this.checked = false;
      let ids = [];
      data.forEach((element) => {
        ids.push(element.id);
      });
      this.deleteNotifications(ids);
    },
  },
};
</script>

<style scoped>
.load {
  display: flex;
  justify-content: center;
}

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




.m-left-top{
  margin-left: -15px;
}
.p-notifaction{

  padding: 30px;
}
</style>
