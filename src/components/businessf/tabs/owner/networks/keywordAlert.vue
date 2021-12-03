<template>
  <div class="a-left container">
    <b-row>
      <b-col cols="12">
        <div class="">
          <b-container>
            <b-form-group
              label-cols-lg="2"
              :label="$t('network.Keyword_Alerts')"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0 text"
            >
              <div class="row align-items-start">
                <div class="col-9">
                  <b-form-tags
                    input-id="tags-separators"
                    separator=" ,"
                    :placeholder="
                      $t('network.Enter_keyword_alert_separate_by_space_or')
                    "
                    rows="3"
                    w-100
                    max-rows="6"
                    :tag-validator="tagValidator"
                    remove-on-delete
                    no-add-on-enter
                    size="lg"
                    required
                    v-model="value"
                    :limit="limit"
                  ></b-form-tags>
                </div>
                <div class="col-1 m-1 text-end">
                  <b-button
                    type="button"
                    @click="addKeyword"
                    variant="primary"
                    >{{ $t("network.Add") }}</b-button
                  >
                </div>
              </div>
            </b-form-group>
          </b-container>
          <hr />
        </div>

        <div v-for="post in posts" :key="post.id" class="mb-4">
          <div class="mb-2">
            <div>
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block mt-1"
                    variant="info"
                    :src="post.logo_path"
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h5 class="m-0 font-weight-bolder">
                    {{ post.network_name }}
                    <span class="float-right">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">{{
                            $t("network.Settings")
                          }}</span>
                        </template>

                        <b-dropdown-item href="#" @click="approvePost(post.id)">
                          {{ $t("network.Approved") }}
                        </b-dropdown-item>
                        <b-dropdown-item
                          href="#"
                          @click="unApprovePost(post.id)"
                        >
                          {{ $t("network.Decline") }}
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h5>
                  <p>
                    {{ moment(post.created_at).fromNow() }}
                    <span class="text-primary">{{
                      $t("network.Commented_on_a_Post")
                    }}</span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify text">
                    {{ post.content }}
                  </p>

                  <div class="" v-if="post.media.length">
                    <lightbox
                      :cells="post.media.length"
                      :items="
                        post.media.map(function (url) {
                          return url;
                        })
                      "
                    ></lightbox>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>

          <hr />
        </div>

        <b-row>
          <b-col>
            <p class="text-center" v-if="allAlerts < 1">
              {{ $t("network.No_Keyword_Alerts_To_Show") }}
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "keywordAlert",

  data() {
    return {
      moment: moment,
      value: [],
      limit: 8,
      posts: [],
    };
  },

  methods: {
    tagValidator(tag) {
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 9;
    },

    addKeyword() {
      let listTag = "";
      for (let i = 0; i < this.value.length; i++) {
        listTag = listTag + "," + this.value[i];
      }
      listTag = listTag.substring(1);

      let data = {
        networkId: this.$route.params.id,
        keywork: listTag,
      };
      //this.$store.commit("keywordOperationOnNetwork/setListKeyWord", data);

      this.$store
        .dispatch("keywordOperationOnNetwork/newKeyWord", data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    approvePost(idpost) {
      let data = {
        id: idpost,
        dat: { network_id: 1 },
      };

      this.$store
        .dispatch("keywordOperationOnNetwork/approvePost", data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    unApprovePost(idpost) {
      let data = {
        network_id: 1,
        id: idpost,
      };

      this.$store
        .dispatch("keywordOperationOnNetwork/unApprovePost", data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },

  mounted() {
    this.$store
      .dispatch("keywordOperationOnNetwork/DbListKeyWord", this.$route.params.id)
      .then(() => {
        console.log("cool ");

        let data = null;
        data = this.$store.state.keywordOperationOnNetwork.dbListKeyWord;
        data.map((dat) => {
          this.value.push(dat);
        });
      })
      .catch((err) => {
        console.log({ err: err });
      });

    this.$store
      .dispatch("keywordOperationOnNetwork/listPost", this.$route.params.id)
      .then(() => {
        console.log("good");

        let data = null;
        data = this.$store.state.keywordOperationOnNetwork.listPost;
        data.map((dat) => {
          this.posts.push({
            network_name: dat.network_name,
            content: dat.content,
            logo_path: dat.logo_path,
            media: dat.media,
            created_at: dat.created_at,
          });
        });
      })
      .catch((err) => {
        console.log({ err: err });
      });
  },

  computed: {},
};
</script>

<style scoped>
.a-left {
  text-align: left;
}
</style>
