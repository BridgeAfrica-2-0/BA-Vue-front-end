<template>
  <div class="a-left container">
    <b-row>
      <b-col cols="12">
        <div class="">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Keyword Alerts"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0 text"
            >
              <b-form-input
                id="textarea"
                placeholder="Enter keyword alert..."
                rows="3"
                max-rows="6"
              ></b-form-input>
            </b-form-group>
          </b-container>
          <hr />
        </div>

<<<<<<< HEAD
         <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="2"
          label="Keyword Alerts"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
        <div class="row align-items-start ">
          <div class="col-9">

          <b-form-tags
            
            input-id="tags-separators"
            separator=" ,"
            placeholder="Enter keyword alert separate by space or , ..."
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
            
            <b-button type="button" @click="addKeyword" variant="primary">Ajouter</b-button>
          </div>
        </div>
        </b-form-group>
      </b-container>
      <hr />
    </div>






        <div v-for="post in posts" :key="post.id" class="mb-4">
=======
        <div v-for="post in allAlerts" :key="post.id" class="mb-4">
>>>>>>> main
          <div class="mb-2">
            <div>
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block mt-1"
                    variant="info"
<<<<<<< HEAD
                    :src="post.logo_path"
=======
                    :src="post.image"
>>>>>>> main
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h5 class="m-0 font-weight-bolder">
<<<<<<< HEAD
                    {{post.network_name}}
=======
                    {{ post.name }}
>>>>>>> main
                    <span class="float-right">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">Settings</span>
                        </template>

<<<<<<< HEAD
                        <b-dropdown-item  href="#" @click="approvePost(post.id)">
                          Approved
                        </b-dropdown-item>
                        <b-dropdown-item href="#" @click="unApprovePost(post.id)">
                          decline
=======
                        <b-dropdown-item
                          @click="approved(post.id)"
                          :loading="load"
                        >
                          Approved
                        </b-dropdown-item>
                        <b-dropdown-item
                          @click="unapproved(post.id)"
                          :loading="load"
                        >
                          Unapproved
>>>>>>> main
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h5>
                  <p>
<<<<<<< HEAD
                  {{  moment(post.created_at).fromNow() }}
                    <span class="text-primary">Commented on a Post</span>
=======
                    {{ post.time }} -
                    <span class="text-primary">{{ post.comment }}</span>
>>>>>>> main
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
<<<<<<< HEAD
                  <p class="text-justify text"> 
                    {{post.content}}
=======
                  <p class="text-justify text">
                    {{ post.description }}
>>>>>>> main
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
              No Keyword Alerts To Show
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
<<<<<<< HEAD
import axios from "axios"
import moment from "moment"



export default {
  name: "keywordAlert",

  data(){
    return {
       moment: moment,
      value: [],
      limit: 8,
      posts: [],

      
    }
  },

  methods:{

     tagValidator(tag) {
      
        return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 9
      },

     addKeyword(){
    
      let listTag = "";
      for (let i=0 ; i<this.value.length; i++){
       listTag= listTag+","+this.value[i] ;
      }
      listTag = listTag.substring(1)
      

      let data = {
        network_id: 1,
        keywork: listTag
      } 
        //this.$store.commit("keywordOperationOnNetwork/setListKeyWord", data);


         this.$store
        .dispatch("keywordOperationOnNetwork/newKeyWord", data )
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    approvePost(idpost){
     
        let data = {
          id: idpost,
          dat:{network_id: 1}
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

    unApprovePost(idpost){

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
    }
  } ,

  mounted(){
    
    this.$store
    .dispatch("keywordOperationOnNetwork/DbListKeyWord", 1)
    .then(()=>{
      console.log("cool ");

      let data = null;
      data = this.$store.state.keywordOperationOnNetwork.dbListKeyWord;
      data.map(dat => {
       this.value.push(dat);

      })
    })
    .catch((err) =>{
      console.log({err: err});
    })

    this.$store
    .dispatch("keywordOperationOnNetwork/listPost","1/1")
    .then(() =>{
      console.log("good");

     let data = null;
      data = this.$store.state.keywordOperationOnNetwork.listPost;
      data.map(dat => {
       
       this.posts.push({
         network_name: dat.network_name,
         content: dat.content,
         logo_path: dat.logo_path,
         media: dat.media,
         created_at: dat.created_at
       });

      })

    })
    .catch((err) =>{console.log({err:err });})
      
  },

  computed: {
   
  }
=======
import { mapActions, mapGetters } from "vuex";
export default {
  name: "keywordAlert",
  data: () => ({
    load: null,
    networkId: ''
  }),
  computed: {
    ...mapGetters({
      allAlerts: "networkSetting/allAlerts",
      getNetwork: "networkSetting/getNetwork",
    }),
  },
  methods: {
    ...mapActions({
      getAlerts: "networkSetting/getAlerts",
      approvedAlerts: "networkSetting/approvedAlerts",
      unapprovedAlerts: "networkSetting/unapprovedAlerts",
    }),

    approved(id) {
      this.load = true;
      this.approvedAlerts(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = true;
          console.log(err);
        });
    },

    unapproved(id) {
     this.load = true;
      this.unapprovedAlerts(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = true;
          console.log(err);
        });
    },
  },
>>>>>>> main
};
</script>

<style scoped>
.a-left {
  text-align: left;
}
</style>
