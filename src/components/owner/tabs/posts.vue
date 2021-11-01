<template>
<<<<<<< HEAD
	<div>
		<b-row>
			<b-col md="12" lg="5" xl="4" class="p-0 m-0">
				<!-- User Posts SideBar-->
				<b-card title="" header-tag="header" footer-tag="footer">
					<span class="m-1">
						<h2 class="title intro-head">
							<b>
								<fas-icon
									class="icons"
									:icon="['fas', 'exclamation-circle']"
									size="lg"
								/>
								{{ $t("profile_owner.posts_tab.intro") }}
							</b>
						</h2>
						<span class="float-right btn m-0 p-0 action-intro" v-b-modal.modal-5
							><b-icon
								icon="pencil-fill"
								class="icon-size"
								variant="primary"
							></b-icon>
						</span>
					</span>
					<!-- User Post Intro-->
					<b-card-text class="text-left username intro-head">
						<p>
							<b-icon
								icon="briefcase-fill"
								class="icon-size"
								variant="primary"
							></b-icon>
							<b> {{ $t("profile_owner.posts_tab.work_at") }} </b>
							<span
								class="text"
								v-for="exp in info.user_experience.slice(0, 1)"
								:key="exp.id"
							>
								{{ exp.company_name }}
							</span>
						</p>
						<p>
							<b-icon
								icon="book-fill"
								class="icon-size"
								variant="primary"
							></b-icon>
							<b> {{ $t("profile_owner.posts_tab.studied_at") }} :</b>
							<span
								v-for="edu in info.user_education.slice(0, 1)"
								:key="edu.id"
								class="text"
							>
								{{ edu.school_name }}</span
							>
						</p>
						<p>
							<b-icon
								icon="house-fill"
								class="icon-size"
								variant="primary"
							></b-icon>
							<b> {{ $t("profile_owner.posts_tab.home_town") }} : </b>
							<span class="text">
								{{ info.user.neighbor }}
							</span>
						</p>
						<p>
							<b-icon
								icon="geo-alt-fill"
								class="icon-size"
								variant="primary"
							></b-icon
							><b> {{ $t("profile_owner.posts_tab.current_city") }} : </b>
							<span class="text">
								{{ info.user.city }}
							</span>
						</p>
						<p>
							<b-icon
								icon="people-fill"
								class="icon-size"
								variant="primary"
							></b-icon>
							<b> {{ $t("profile_owner.posts_tab.community") }}: </b>
							<span class="text">
								{{ nFormatter(total.total_community) }}
							</span>
						</p>
					</b-card-text>
				</b-card>

				<b-modal
					id="modal-5"
					:title="`${t('profile_owner.posts_tab.studied_at')}`"
					ref="modal"
					@show="resetModal"
					@hidden="resetModal"
					@ok="handleOk"
				>
					<div class="">
						<p>
							<b-icon
								@click="switchTab('about')"
								icon="pencil"
								class="eedit"
								variant=""
							></b-icon>
=======
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" class="p-0 m-0">
        <!-- User Posts SideBar-->
        <b-card title="" header-tag="header" footer-tag="footer">
          <span class="m-1">
            <h2 class="title intro-head">
             
                <fas-icon
                  class="icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
                Intro
             
            </h2>
            <span class="float-right btn m-0 p-0 action-intro" @click="editPage"  
              ><b-icon
                icon="pencil-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
            </span>
          </span>
          <!-- User Post Intro-->
          <b-card-text class="text-left username intro-head">
            <p>
              <b-icon
                icon="briefcase-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
               Work at: 
              <span v-if="info.user_experience"> 
              <span
                class="text"
                v-for="exp in info.user_experience.slice(0, 1)"
                :key="exp.id"
              >
                {{ exp.company_name }}
              </span>
               </span>
            </p>
            <p>
              <b-icon
                icon="book-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
               Studied at: 
              <span v-if="info.user_education !=null">   
          <span
                v-for="edu in info.user_education.slice(0, 1)"
                :key="edu.id"
                class="text"
              >
           
                {{ edu.school_name }}</span
              >

             
                </span>
            </p>
            <p>
              <b-icon
                icon="house-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              Home Town : 
              <span class="text">
                {{ info.user.neighbor }}
              </span>
            </p>
            <p>
              <b-icon
                icon="geo-alt-fill"
                class="icon-size"
                variant="primary"
              ></b-icon
              > Current City :
              <span class="text">
                {{ info.user.city }}
              </span>
            </p>
            <p>
              <b-icon
                icon="people-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
               Community: 
              <span class="text">
               {{ nFormatter(total.total_community)}}
              </span>
            </p>
          </b-card-text>
        </b-card>
>>>>>>> main

        <b-modal
          id="modal-5"
          title="Edit Intro"
          ref="modal"
         
          @ok="handleOk"
        >
          <div class="">
             
            <p>
              <b> Work at: </b>
              <span v-if="info.user_experience">  
              <span
                class="text"
                v-for="exp in info.user_experience.slice(0, 1)"
                :key="exp.id"
              >
                {{ exp.company_name }}
              </span>  </span>
            </p>
            <p>
              <b> Studied at: </b>
       
              <span v-if="info.user_education !=null">
                <span
                v-for="edu in info.user_education.slice(0, 1)"
                :key="edu.id"
                class="text"
                >
                  {{ edu.school_name }}
                </span>
              </span>
            </p>
            <p>
              <b> Home Town : </b>
              <span class="text">
                {{ info.user.neighbor }}
              </span>
            </p>
            <p>
              <b> Current City : </b>
              <span class="text">
                {{ info.user.city }}
              </span>
            </p>
           
         
          </div>
        </b-modal>

							<b> {{ $t("profile_owner.posts_tab.studied_at") }}: </b>
							<span
								v-for="edu in info.user_education.slice(0, 1)"
								:key="edu.id"
								class="text"
							>
								{{ edu.school_name }}</span
							>
						</p>
						<p>
							<b-icon
								@click="switchTab('about')"
								icon="pencil"
								class="eedit"
								variant=""
							></b-icon>

							<b> {{ $t("profile_owner.posts_tab.home_town") }}: </b>
							<span class="text">
								{{ info.user.neighbor }}
							</span>
						</p>
						<p>
							<b-icon
								@click="switchTab('about')"
								icon="pencil"
								class="eedit"
								variant=""
							></b-icon>
							<b> {{ $t("profile_owner.posts_tab.current_city") }} : </b>
							<span class="text">
								{{ info.user.city }}
							</span>
						</p>
					</div>
				</b-modal>

				<Community />

				<Media />
			</b-col>
			<b-col md="12" lg="7" xl="8" class="m-0 p-0 px-lg-4">
				<owner-post />
			</b-col>
		</b-row>
	</div>
</template>

<script>
	import "@morioh/v-lightbox/dist/lightbox.css";
	//import Followers from "../../followers";
	import Community from "../sidebarcommunity";
	//import Community from "./comunitiDashboard";
	import OwnerPost from "./owner_post";
	import Media from "../media";
	// import CreatePost from "../../createPost";
	// import Post from "../../post";
	export default {
		name: "posts",
		components: {
			//Followers,
			Media,
			OwnerPost,
			Community,
		},

		created() {
			console.log("Load User Info");
			this.$store
				.dispatch("profile/loadUserPostIntro", null)
				.then((response) => {
					console.log("Load User Intro test+++++ res");
					console.log(response);
					console.log("Load User Intro Finish Loading");
					this.userProfileOwner = this.$store.getters[
						"profile/getUserPostIntro"
					];
					this.userProfileOwnerInput.workedAt = this.userProfileOwner.workedAt;
					this.userProfileOwnerInput.studiedAt = this.userProfileOwner.studiedAt;
					this.userProfileOwnerInput.homeTown = this.userProfileOwner.homeTown;
					this.userProfileOwnerInput.currentCity = this.userProfileOwner.currentCity;
					this.userProfileOwnerInput.numbersOfFollowers = this.userProfileOwner.numbersOfFollowers;
					return response;
				})
				.catch((error) => {
					console.log(error);
				});

			this.$store
				.dispatch("profile/getImages")
				.then((response) => {})
				.catch((error) => {
					console.log({ error: error });
				});
		},
		computed: {
			info: function() {
				return this.$store.getters["profile/getUserPostIntro"];
			},

			total() {
				return this.$store.state.profile.Tcommunity;
			},
		},
		data() {
			return {
				userProfileOwner: {
					workedAt: "Current or Last Organization",
					studiedAt: "Last Education",
					homeTown: "Dummy",
					currentCity: "Dummy",
					numbersOfFollowers: 256,
				},
				userProfileOwnerInput: {
					workedAt: "",
					studiedAt: "",
					homeTown: "",
					currentCity: "",
					numbersOfFollowers: 0,
				},
				workedAtState: null,
				studiedAtState: null,
				homeTownState: null,
				currentCityState: null,
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

			handleOk(bvModalEvt) {},

<<<<<<< HEAD
			switchTab(index) {
				this.$refs["modal"].hide();
				this.$router.push("profile_owner#" + index);
			},
		},
	};
=======
    switchTab(index){
       
        this.$refs["modal"].hide();
      this.$router.push("profile_owner#"+index);
    },

    editPage(){
     
      this.$router.push("profile_owner#about");
    }
   
  },
};
>>>>>>> main
</script>

<style scoped>
	.eedit:hover {
		font-size: 18px;
		color: #e75c18;
	}
	.intro-head {
		margin-top: -20px;
	}
	.post-pic {
		max-width: 500px;
		max-height: 426px;
	}
	.clr {
		color: #e75c18;
	}
	@media (max-width: 576px) {
		.lb-grid {
			height: 200px;
		}
	}
	@media (min-width: 576px) {
		.lb-grid {
			height: 300px;
		}
	}
	.avatar-size {
		width: 60px;
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
	}
	@media (min-width: 1400px) {
		.lb-grid {
			height: 500px;
		}
	}
	@media (min-width: 768px) {
		.profile-pic {
			width: 64px;
			height: 64px;
		}
		.comment-pic {
			width: 40px;
			height: 40px;
		}
	}
	@media (max-width: 768px) {
		.profile-pic {
			width: 40px;
			height: 40px;
		}
		.comment-pic {
			width: 36px;
			height: 36px;
		}
	}
</style>