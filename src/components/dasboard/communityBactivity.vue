<template>
  <div>


     <b-card class="px-md-3 border shadow "  >

      <span> <h6 class="title mt-3 ">  <fas-icon class=" icons icon-color" :icon="['fab', 'readme']"  size="lg" />   <b> {{$t("dashboard.Post")}} </b>  </h6>   </span>

      <div class="s-card ">     





          
       <b-row class="mt-4"   v-for="item in owner_post"  :key="item.post_id" > 
     

      <!--  :src="$store.getters.getProfilePicture"-->
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
             
              <b-avatar
                class="d-inline-block avat"
                variant="primary"
               :src="item.logo_path"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{item.bussines_name}}   
               
              </h5>
              <p class="duration">  {{  moment(item.created_at).fromNow() }} </p>   
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p class="post-text">

                <!--     :text="item.content.details"   -->
                <read-more
                  more-str="read more"
                  :text="item.content"
                  link="#"
                  less-str="read less"
                  :max-chars="200"
                ></read-more>
              </p>
            </b-col>
          </b-row>
          <b-row>

                 <b-col v-if="item.media.length > 0" cols="12" class="mt-2">

              <div  class=""> 

                
                  
       


                

                 <lightbox :cells="item.media.length" :items="item.media.map(function(a) {return a.media_url})"></lightbox> 

              </div>

            </b-col>

            <!--   v-if="item.content.movies.length <= 0"  -->
            <b-col
             
              cols="12"
              class="mt-2"
            >

            <!--  :src="$store.getters.getProfilePicture"  -->

             
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                {{    nFormatter(item.likes_count)  }}   </span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                {{  nFormatter(item.comment_count)   }}    </span
              >

              <span>
                <fas-icon class="primary ml-3" :icon="['fas', 'share']" />
              </span>
            </b-col>
          </b-row>


<!--  :src="$store.getters.getProfilePicture"  -->
          <b-row class="mt-2">
            <b-col cols="3" md="1" class="m-md-0 p-md-0">
              <b-avatar
                variant="primary"
                class="img-fluid avat-comment"
              
              ></b-avatar>
            </b-col>
            <b-col cols="9" md="11" class="p-0 m-0 pr-3">
              <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />
            </b-col>
          </b-row>
        </b-col>
   <Comment
          v-for="comment in item.comments"
          :key="comment.id"
          :comment="comment"
        />  
       
      </b-row>


      <infinite-loading @infinite="infiniteHandler"></infinite-loading>

      




      </div>

     </b-card>
    
  </div>
</template>

<script>
	import Comment from "./comment";
	import moment from "moment";
	import axios from "axios";

	export default {
		name: "postNetwork",
		components: {
			Comment,
		},
		data() {
			return {
				moment: moment,
				page: 1,
				post: this.$store.state.businessOwner.ownerPost,
				url: null,
				delete: [],
				edit_description: null,
				edit_image: null,
				edit_id: null,

				fullPage: false,
				images: [
					"https://i.wifegeek.com/200426/f9459c52.jpg",
					"https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
					"https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
					"https://i.wifegeek.com/200426/2d110780.jpg",
					"https://i.wifegeek.com/200426/e73cd3fa.jpg",
					"https://i.wifegeek.com/200426/15160d6e.jpg",
					"https://i.wifegeek.com/200426/d0c881ae.jpg",
					"https://i.wifegeek.com/200426/a154fc3d.jpg",
					"https://i.wifegeek.com/200426/71d3aa60.jpg",
					"https://i.wifegeek.com/200426/d17ce9a0.jpg",
					"https://i.wifegeek.com/200426/7c4deca9.jpg",
					"https://i.wifegeek.com/200426/64672676.jpg",
					"https://i.wifegeek.com/200426/de6ab9c6.jpg",
					"https://i.wifegeek.com/200426/d8bcb6a7.jpg",
					"https://i.wifegeek.com/200426/4085d03b.jpg",
					"https://i.wifegeek.com/200426/177ef44c.jpg",
					"https://i.wifegeek.com/200426/d74d9040.jpg",
					"https://i.wifegeek.com/200426/81e24a47.jpg",
					"https://i.wifegeek.com/200426/43e2e8bb.jpg",
				],
				imagees: [
					"https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
					"https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
				],

				imagees3: [
					"https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
					"https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
					"https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
				],
			};
		},

		methods: {
			nFormatter(num) {
				if (num >= 1000000000) {
					return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
				}
				if (num >= 1000000) {
					return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
				}
				if (num >= 1000) {
					return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
				}
				return num;
			},

			infiniteHandler($state) {
				axios
					.get(
						"profile/dashboard/post/business/" +
							this.businessId +
							"/" +
							this.page
					)
					.then(({ data }) => {
						// commit('ownerPost', data.data);
						//  console.log(data);
						if (data.data.length) {
							this.page += 1;

							this.owner_post.push(...data.data);
							$state.loaded();
						} else {
							$state.complete();
						}
					})
					.catch((err) => {
						console.log({ err: err });
					});
			},

			chooseImage: function() {
				document.getElementById("image").click();
			},

			chooseVideo: function() {
				document.getElementById("video").click();
			},

			chooseDocument: function() {
				document.getElementById("document").click();
			},

			showModal() {
				this.$refs["modal-3"].show();
			},
			hideModal() {
				this.$refs["modal-3"].hide();
			},
		},

		computed: {
			imageProfile() {
				return "yoo";
			},

			business_logo() {
				return this.$store.state.businessOwner.businessInfo.logo_path;
			},

			businessId() {
				return this.$store.state.dashboard.dBusinessId;
			},

			owner_post() {
				return this.$store.state.dashboard.bdashboard_post;
			},

			profileNamePost() {
				return "yoo";
			},
		},
	};
</script>

<style scoped>
	.card-body {
		padding: 2px !important;
	}

	.action-intro {
		font-size: 1rem;
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}

	.color-site {
		color: #e75c18;
	}

	@media (min-width: 762px) {
		.avat {
			width: 64px;
			height: 64px;
		}

		.send-cmt {
			position: relative;
			margin-left: 95%;
			top: -28px;
			cursor: pointer;
		}

		.post-btn {
			border: none !important;
			margin-right: 50px;
		}

		.post-container {
			max-width: 500px;
			max-height: 462px;
		}

		.post-text {
			font-size: 14px;
			font-family: Arial, Helvetica, sans-serif;
		}

		.avat-comment {
			width: 40px;
			height: 40px;
		}
	}

	@media (max-width: 762px) {
		.post-btn {
			border: none !important;
			margin-right: 0px;
		}

		.send-cmt {
			position: relative;
			margin-left: 90%;
			top: -28px;
			cursor: pointer;
		}

		.avat {
			width: 40px;
			height: 40px;
		}

		.avat-comment {
			width: 36px;
			height: 36px;
		}

		.post-text {
			font-size: 12px;
			font-family: Arial, Helvetica, sans-serif;
		}
	}

	.comment-box {
		margin-left: -40px;
		position: relative;
		background-color: white;
	}

	.comment-input {
		border-radius: 24px;
		height: 34px;
		width: 315px;
	}

	.comment {
		width: 100%;
		border: solid 1px #ccc;
		border-radius: 25px;
		background-color: #ddd;
		height: 34px;
		padding-left: 10px;
	}
	.comment:focus {
		outline: none;
	}

	.time {
		position: relative;
		margin-left: 80px;
		top: -28px;
	}

	.border-none {
		border: none;
		height: 100px;
	}

	.cursor {
		position: relative;
	}
	.cursor i {
		position: absolute;
		width: 1px;
		height: 20%;
		background-color: gray;
		left: 5px;
		top: 10%;
		animation-name: blink;
		animation-duration: 800ms;
		animation-iteration-count: infinite;
		opacity: 1;
	}

	.cursor input:focus + i {
		display: none;
	}

	@keyframes blink {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	.bordder {
		border: 1px solid #e75c18;
		height: 50px;
		padding: 6px;
	}

	.username {
		color: black;
	}

	.btn {
		border-radius: 5px;
		text-align: center;
	}

	.btn:hover {
		background-color: #ccc;
	}
</style>

<style>
	.lb-grid {
		height: 274px;
		margin-bottom: 8px;
	}

	.m-up {
		margin-top: -5px;
	}

	.s-card {
		height: 540px;
		overflow: auto;
		overflow-x: hidden;
		padding: 15px;
	}
</style>
