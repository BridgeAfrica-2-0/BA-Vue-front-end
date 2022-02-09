<template>
  <div class="about">
    <!-- Header -->
    <site-header />
    <!-- BG -->
    <div class="bg-img d-flex align-items-end pb-5 px-2">
      <div class="d-none d-md-block px-5">
        <div class="header-img-text text-light font-rob">
          <p>BRIDGE AFRICA</p>
          <p>VENTURES</p>
        </div>
      </div>
    </div>
    <div class="d-block d-md-none">
      <div class="header-img-text bg-dark text-light font-rob">
        <p>BRIDGE AFRICA</p>
        <p>VENTURES</p>
      </div>
    </div>

    <!-- Welcome -->
    <h2 class="text-center font-poppin header-welcome my-4 welcome-heading">{{$t("about.Welcome_To_Bridge_Africa_Ventures")}}</h2>
    <div class="row justify-content-center p-2">
      <div class="col-md-7 text-center font-source welcome-text">
        {{$t("about.We_are_a_technology_firm")}}, 
        {{$t("about.on_a_mission_to_digitalise_businesses_and_consumers_in_Africa")}}. 
        {{$t("about.Through_our_bridgeafrica_com_platform")}} , 
        {{$t("about.we_help_SMEs_create_websites")}}, 
        {{$t("about.gain_database_visibility")}}, 
        {{$t("about.sell_online_and_network")}}. 
        {{$t("about.We_equally_manage_an_online_artisanal_platform_cameroongallery_com")}}, 
        {{$t("about.which_helps_craft_artists_sell_their_goods_globally")}}. 
        {{$t("about.Through_our_consulting_services")}}, 
        {{$t("about.we_provide_expert_support_to_public_and_private_entities")}}.
      </div>
    </div>
    <div class="my-5">
      <div class="row px-md-5 px-2">
        <div class="col-md-6">
          <img
            src="../assets/img/about/DSC09065-scaled-1-1024x683 img1.jpg"
            alt="People Image"
          />
        </div>
        <div class="col-md-6 mt-3">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="py-2 px-3" role="tab">
                <!-- <b-button block  variant="info">Accordion 1</b-button> -->
                <span v-b-toggle.accordion-1 class="my-5 mx-3 color-black font-weight-bold text-uppercase"
                  >{{$t("about.Our_Mission")}}</span
                >
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="color-black">
                    {{$t("about.With_875_of_businesses_lacking_websites_and_99_having_never_sold_online")}}, 
                    {{$t("about.the_digital_divide_is_limiting_the_economic_growth_and_productivity_of_businesses_in_Cameroon_and_Africa")}}. 
                    {{$t("about.That_is_why_we_are_on_a_mission_to_see_every_SME_in_Africa_have_a_digital_identity_so_they_can_expand_their_market_space_and_sell_more_online")}}.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="py-2 px-3" role="tab">
                <!-- <b-button block  variant="info">Accordion 1</b-button> -->
                <span v-b-toggle.accordion-2 class="my-5 mx-3 color-black font-weight-bold text-uppercase"
                  >{{$t("about.Our_Vision")}}</span
                >
              </b-card-header>
              <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="color-black">
                    {{$t("about.With_875_of_businesses_lacking_websites_and_99_having_never_sold_online")}}, 
                    {{$t("about.the_digital_divide_is_limiting_the_economic_growth_and_productivity_of_businesses_in_Cameroon_and_Africa")}}. 
                    {{$t("about.That_is_why_we_are_on_a_mission_to_see_every_SME_in_Africa_have_a_digital_identity_so_they_can_expand_their_market_space_and_sell_more_online")}}.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="py-2 px-3" role="tab">
                <!-- <b-button block  variant="info">Accordion 1</b-button> -->
                <span v-b-toggle.accordion-3 class="my-5 mx-3 color-black font-weight-bold text-uppercase"
                  >{{$t("about.Our_Strategy")}}</span
                >
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="color-black">
                    {{$t("about.With_875_of_businesses_lacking_websites_and_99_having_never_sold_online")}}, 
                    {{$t("about.the_digital_divide_is_limiting_the_economic_growth_and_productivity_of_businesses_in_Cameroon_and_Africa")}}. 
                    {{$t("about.That_is_why_we_are_on_a_mission_to_see_every_SME_in_Africa_have_a_digital_identity_so_they_can_expand_their_market_space_and_sell_more_online")}}.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-4">
      <h1 class="color-black text-center font-arvo functionality-heading">{{$t("about.Our_Functionalities")}}</h1>
      <div class="my-3 row">
        <div class="col-md-6">
          <h3 class="color-black font-arvo site-text mt-5">{{$t("about.WELCOME_TO_BridgeAfrica_com")}}</h3>
          <p class="link-text font-poppin color-black">
            {{$t("about.Bridgeafrica_com_is_a_cross_engineered_problems_meet_solutions_platform")}}, 
            {{$t("about.which_helps_economic_actors_in_Africa_to_join_the_digital_economy")}}. 
            {{$t("about.We_help_businesses_to_create_their_websites")}}, 
            {{$t("about.buy_and_sell_online")}}, 
            {{$t("about.and_to_gain_database_visibility")}}. 
            {{$t("about.Our_platform_works_offline_via_SMS_for_actors_in_zones_of_low_or_no_internet_penetration")}}. 
            {{$t("about.In_addition_to_solving_tech_issues")}}, 
            {{$t("about.we_solve_digital_literacy_issues_faced_by_the_majority_of_businesses")}}
          </p>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div first pb-5 mt-md-5">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="../assets/img/about/about-web-design-iconimg2.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    {{$t("about.WEBSITE_CREATION")}}
                  </h6>
                  <p class="text-left font-14">
                    {{$t("about.We_help_businesses_and_institutions_easily_create_websites_in_under_5_minutes")}}, 
                    {{$t("about.with_little_or_no_technical_expertise_required")}}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div second pb-5">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="../assets/img/about/about-phone-book-img3.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    {{$t("about.A_LOCALISED_BUSINESS_DIRECTORY")}}
                  </h6>
                  <p class="text-left font-14">
                    {{$t("about.Our_localised_business_directory_helps_to_make_businesses_visible_and_locatable")}}, 
                    {{$t("about.and_enables_consumers_to_search_for_and_compare_product_prices")}}. 
                    {{$t("about.Customers_can_search_based_on_location")}},
                    {{$t("about.Category")}} 
                    {{$t("about.price")}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div third pb-5">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="../assets/img/about/about-group-img4.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    {{$t("about.COMMUNITY_ENGAGEMENT")}}
                  </h6>
                  <p class="text-left font-14">
                    {{$t("about.Our_platform_provides_community_engagement_functionalities_enabling_businesses_and_consumers_to_follow_one_another")}}, 
                    {{$t("about.receive_notifications_and_send_direct_messages")}}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="card container border-0 rounded-0 functionality-div forth pb-5 mt-md-4">
                <p class="mt-5 pt-2 text-right">
                  <img
                    src="../assets/img/about/about-sms-img5.png"
                    alt="web design icon"
                    class="functionality-icons"
                  />
                </p>
                <div class="pl-4">
                  <h6 class="font-weight-bold font-mont functionality-div-headings">
                    {{$t("about.OFFLINE_ACCESS")}}
                  </h6>
                  <p class="text-left font-14">
                    {{$t("about.For_businesses_and_consumers_in_zones_of_low_or_no_internet_penetration")}}, 
                    {{$t("about.our_platform_works_offline_via_SMS_and_soon_by_USSD")}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="color-black text-center font-arvo functionality-heading text-center">{{$t("about.Our_SERVICES")}}</h1>
    <div class="row">
      <div class="col-md-8 px-md-0">
        <div class="row">
          <div class="col-md-6 px-md-0 pb-0">
            <img
              src="../assets/img/about/blocks-image-17-img6.jpg"
              alt="photography"
              class=""
            />
          </div>
          <div class="col-md-6 px-md-0 py-5">
            <div class="container my-md-5">
              <h3 class="text-center color-black font-arvo production-heading font-weight-bold">
                {{$t("about.Media_production")}}
              </h3>
              <p class="text-md-left text-center production-text color-black">
                {{$t("about.Content_is_king")}}. 
                {{$t("about.This_is_why_we_create_innovative_media_content_to_connect_businesses")}}.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-0">
            <div class="container pt-5 px-5 mt-md-5">
              <h3 class="text-left color-black font-arvo production-heading font-weight-bold">
                Bridge <br />
                Africa.com
              </h3>
            </div>
          </div>
          <div class="col-md-6 pl-0" style="z-index:1010">
            <video
              class="bridge-america-video"
              src="../assets/img/about/Bridge-Africa-logo-1.mp4"
              autoplay=""
              loop=""
              muted="muted"
              playsinline=""
              controlslist="nodownload"
            ></video>
          </div>
        </div>
      </div>
      <div class="col-md-4 px-md-0 d-none d-md-block">
        <img
          src="../assets/img/about/blocks-image-75-1-img7.jpg"
          alt="image"
          class="only-img"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 p-0">
        <img src="../assets/img/about/blocks-image-73-1-img8.jpg" alt="Yello Image" />
      </div>
      <div class="col-md-4 p-0">
        <div class="container my-md-5 px-5">
          <h3 class="text-center color-black font-arvo production-heading font-weight-bold">
            {{$t("about.Cameroon_Gallery")}}
          </h3>
          <p class="text-md-left text-center production-text color-black">
            {{$t("about.Connecting_the_world_to_authentic")}}, 
            {{$t("about.meticulously_made_cultural_arts_and_crafts_from_Cameroon")}}.
          </p>
        </div>
      </div>
      <div class="col-md-4 p-0 bg-primary">
        <div class="container my-md-5 px-5">
          <h3 class="text-center text-light font-arvo production-heading font-weight-bold pt-5">
            {{$t("about.Consulting")}}
          </h3>
          <p class="text-md-left text-center production-text text-light">
            {{$t("about.We_provide_media_and_management_consulting_services_to_both_public_and_private_entities")}}.
          </p>
        </div>
      </div>
    </div>
    <!-- Section About -->

    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col-md-6 pt-md-5">
          <div class="my-5">
            <h1 class="color-black text-center font-arvo about-heading text-center pt-4">{{$t("about.ABOUT")}}</h1>
            <h1 class="color-black mt-md-4 text-center font-arvo about-heading text-center">bridgeafrica.com</h1>
          </div>
          <div class="video pl-md-5 py-5">
            <video
              class="elementor-video my-4"
              src="../assets/img/about/sceen-video.mp4"
              autoplay=""
              loop=""
              muted="muted"
              playsinline=""
              controlslist="nodownload"
            ></video>
            <p class="text-center color-black font-weight-bold video-desc pt-5">
              {{$t("about.A_3_in_1_platform_that_integrates_SMEs_into_the_Digital_Economy_through_website_creation")}}, 
              {{$t("about.database_integration")}}, 
              {{$t("about.and_networking")}}. 
              {{$t("about.Currently_in_its_3rd_iteration")}}, 
              {{$t("about.we_are_rebuilding_to_turn_bridgeafrica_com")}}
              {{$t("about.into_a_4_in_1_tool_by_adding_an_online_market_place_and_improve_the_user_interface")}}.
            </p>
          </div>
        </div>
        <div class="col-md-3 pr-md-0">
          <div class="d-none d-md-block">
            <img
              src="../assets/img/about/tissu-choisit-img9.jpg"
              alt="black image"
              class="black-img"
            />
          </div>
          <div class="our-wins bg-black">
            <h4 class="font-arvo text-center font-weight-bold text-light py-4">{{$t("about.Our_Wins")}}</h4>
            <div class="container pb-3">
              <p class="text-left text-light">
                {{$t("about.Bridgeafrica_com_was_voted")}} <b>{{$t("about.App_of_the_Year")}}</b> {{$t("about.by_the_International_Telecommunication_Union_for_its_contribution_towards_the_realisation_of_SDGs_1_and_8")}}.
              </p>
              <p class="text-left text-light">
                {{$t("about.We_have_worked_with_the_United_Nation_s_IFAD_to")}} <b>{{$t("about.digitalise_750_agricultural_SMEs")}}</b> {{$t("about.across_4_regions_in_Cameroon")}}.
              </p>
              <p class="text-left text-light">
                {{$t("about.We_currently_have_over")}} <b>{{$t("about.7,000_users")}}</b> {{$t("about.and_are_working_to_expand_to_Africa")}}.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 pl-md-0">
          <div class="specific-main-div px-3">
            <h5 class="text-md-left text-center  specific-heading">bridge</h5>
            <h5 class="text-md-left text-center specific-heading">africa.com</h5>
            <h5 class="text-md-left text-center specific-heading">{{$t("about.SPECIFIC_INFO")}}</h5>
            <p>
              {{$t("about.Businesses_in_Africa_still_suffer_from_the_digital_divide")}}, 
              {{$t("about.which_limits_their_integration_into_the_digital_economy")}}. 
              {{$t("about.To_break_these_barriers")}}, 
              {{$t("about.bridge_about_info")}}; 
              {{$t("about.our_localised_business_directory_makes_them_visible")}}. 
              {{$t("about.Our_online_marketplace_will_also_enable_the_99%_of_businesses_that_had_never_sold_online_to_engage_in_e_commerce")}}.
            </p>
          </div>
          <div class="d-none d-md-block yellow-img">
            <img
              data-v-e7ab893a=""
              src="../assets/img/about/blocks-image-73-1-img10.jpg"
              alt="Yello Image"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Our Resources -->
    <section class="resources bg-black py-5 px-4">
      <h1 class="text-center font-arvo text-light">{{$t("about.Our_Resources")}}</h1>
      <div class="row justify-content-center my-5">
        <div class="col-md-8">
          <div class="d-flex justify-content-around tabs-resource">
            <b-button
              pill
              :variant="selectedResource == 'all' ? 'primary' : 'outline-primary'"
              @click="changeResource('all')"
              >{{$t("about.Show_All")}}</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'bridgeafrica' ? 'primary' : 'outline-primary'"
              @click="changeResource('bridgeafrica')"
              >bridgeafrica.com</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'cameroon' ? 'primary' : 'outline-primary'"
              @click="changeResource('cameroon')"
              >Cameroon Gallery</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'cunsulting' ? 'primary' : 'outline-primary'"
              @click="changeResource('cunsulting')"
              >{{$t("about.Consulting")}}</b-button
            >
            <b-button
              pill
              :variant="selectedResource == 'media' ? 'primary' : 'outline-primary'"
              @click="changeResource('media')"
              >{{$t("about.Media_Production")}}</b-button
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div v-for="resource in getResources" :key="resource.id" class="col-md-4 mt-4 resource-div">
          <div class="resource-img-div">
            <img :src="resource.img_url" alt="..." class="resource-img" />
          </div>
          <div class="resource-title">
            <p v-if="resource.title.length > 25">{{ resource.title.substring(0, 25) }}...</p>
            <p v-else>
              {{ resource.title }}
            </p>

            <div class="resource-line"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- WELCOME TO BIZ KONNECT -->
    <section class="mt-4 p-3">
      <h1 class="color-black text-center font-arvo functionality-heading text-center">{{$t("about.WELCOME_TO_BIZ_CONNECT")}}</h1>
      <div class="container text-center">
        {{$t("about.Our_weekly_Biz_connect_TV_show")}}, 
        {{$t("about.running_for_more_than_1_year_now_and_aired_on_Cameroon_s_national_television_channel")}}(CRTV), 
        {{$t("about.promotes_SMEs_that_are_on_bridgeafrica_com")}}, 
        {{$t("about.and_is_an_ideal_vitrine_to_give_nation_wide_visibility_to_entrepreneurs")}}
      </div>
      <div class="biz-konnect-video">
        <iframe
          width="1440"
          src="https://www.youtube.com/embed/EEsHZTkWNIU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Blog -->

    <!-- <section class="bg-black mb-md-5 py-5">
      <h1 class="text-center font-arvo text-light">{{$t("about.Our_Blog")}}</h1>
      <div class="row px-4">
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="../assets/img/about/post3-img17.jpg" alt="..." />
            <h5>{{$t("about.Creating_the_Next_Generation_of_Leaders_at_Your_Company")}} (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="../assets/img/about/post3-img17.jpg" alt="..." />
            <h5>{{$t("about.Creating_the_Next_Generation_of_Leaders_at_Your_Company")}} (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="../assets/img/about/post3-img17.jpg" alt="..." />
            <h5>{{$t("about.Creating_the_Next_Generation_of_Leaders_at_Your_Company")}} (Demo)</h5>
          </div>
        </div>

        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="../assets/img/about/post3-img17.jpg" alt="..." />
            <h5>{{$t("about.Creating_the_Next_Generation_of_Leaders_at_Your_Company")}} (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="../assets/img/about/post3-img17.jpg" alt="..." />
            <h5>{{$t("about.Creating_the_Next_Generation_of_Leaders_at_Your_Company")}} (Demo)</h5>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="blog-img-div position-relative">
            <img src="../assets/img/about/post3-img17.jpg" alt="..." />
            <h5>{{$t("about.Creating_the_Next_Generation_of_Leaders_at_Your_Company")}} (Demo)</h5>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Team -->

    <div class="mt-5">
      <h1 class="color-black text-center font-arvo functionality-heading text-center letter-spacing">{{$t("about.MEET_OUR_TEAM")}}</h1>
      <div class="row justify-content-center p-5">
        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="../assets/img/team/lorent.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Lorenzo Tencati</p>
          <p class="text-center team-position color-black">{{$t("about.Advisory_Board_to_CEO")}}</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="../assets/img/team/bruno.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Ittia Bruno</p>
          <p class="text-center team-position color-black">{{$t("about.COO")}}</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="../assets/img/team/blec.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Lengweh Blaise</p>
          <p class="text-center team-position color-black">{{$t("about.CTO")}}</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="../assets/img/team/arlet.jpg"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Arlette Moussang</p>
          <p class="text-center team-position color-black">{{$t("about.Editor")}}</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="../assets/img/team/eunice.jpg"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />
          <p class="text-center team-name color-black mt-5">Abre Eunice</p>
          <p class="text-center team-position color-black">{{$t("about.Administrative_Assistant")}}</p>
        </div>

        <div class="col-md-3 m-3 border border-dark team-div px-5 pt-5">
          <img
            src="../assets/img/team/maxine.png"
            alt="img"
            class="rounded-circle d-block m-auto team-img"
          />

          <p class="text-center team-name color-black mt-5">Maxine Moffet</p>

          <p class="text-center team-position color-black">{{$t("about.Co_founder")}}</p>
        </div>
      </div>
    </div>

    <!-- Subscribe -->

    <section class="subscribe container">
      <div class="row">
        <div class="col-md-4 px-md-0 d-none d-md-block">
          <img src="../assets/img/about/contact2-img18.png" alt="Women" class="sub-img" />
        </div>
        <div class="col-md-4 px-md-0">
          <div class="bg-black sub-div d-flex flex-column justify-content-center">
            <h5 class="text-light font-arvo text-center">{{$t("about.SUBSCRIBE_FOR_NEWSLETTER")}}</h5>
            <h2 class="text-light font-arvo text-center sub-heading">{{$t("about.STAY_IN_TOUCH")}}</h2>
            <b-form-input
              v-model="subEmail"
              :placeholder="$t('about.Your_Email_Address')"
              class="sub-input d-block mx-auto my-3"
            ></b-form-input>

            <b-button pill variant="primary" class="font-arvo sub-btn d-block mx-auto py-md-2 mt-md-3"
              >{{$t("about.Subscribe_To_News")}}</b-button
            >
          </div>
        </div>
        <div class="col-md-4 px-md-0 d-none d-md-block">
          <img
            src="../assets/img/about/Gem-Lane-contact-img19.jpg"
            alt="Calling Man"
            class="sub-img"
          />
        </div>
      </div>
    </section>

    <!-- Contact Component -->

    <contact />

    <!-- Social Icons -->

    <section class="social-icons py-5">
      <h2 class="text-light font-arvo text-center font-weight-bold text-capitalize">
        {{$t("about.Visit_us_on_social_media_platforms")}}
      </h2>
      <div class="row justify-content-center my-5">
        <div class="col-md-7">
          <p class="text-center font-mont text-light font-weight-bold">
            {{$t("about.We_hope_you_enjoy_our_products_and_services_as_much_as_we_enjoy_offering_them_to_you")}}. 
            {{$t("about.If_you_have_any_questions_or_comments")}}, 
            {{$t("about.please_don_t_hesitate_to_contact_us")}}
            {{$t("about.via_the_media_below")}}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="d-flex flex-row justify-content-around">
            <a href="https://twitter.com/bridgeafricacom" target="_blank" class="social-icon">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="http://facebook.com/bridgeafricacom" target="_blank" class="social-icon">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA" target="_blank" class="social-icon">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com/bridgeafricacom" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div>
        </div>

    <!-- Footer -->

    <site-footer />
  </div>
</template>
<script>

/**
 * this component is for the about us information 
 */
import Contact from '../components/site/contact';
import SiteFooter from '../components/site/siteFooter';
import SiteHeader from '../components/site/siteHeader';
export default {
  components: {
    Contact,
    SiteFooter,
    SiteHeader,
  },
  data() {
    return {
      subEmail: '',
      selectedResource: 'all',
      resources: [
        {
          id: '1',
          title: this.$t('general.HOW_TO_USE_BRIDGEAFRICA'),
          img_url:
            require('../assets/img/about/WSIS-thumbnail-1024x592-1-thegem-portfolio-masonry-img11.png'),
          tag: ['bridgeafrica', 'cameroon', 'cunsulting', 'media'],
        },
        {
          id: '2',
          title: this.$t("general.BETA_LAUNCH_OF_BRIDGEAFRICA"),
          img_url:
            require('../assets/img/about/THINDFDF-1024x743-1-thegem-portfolio-masonry-img12.png'),
          tag: ['bridgeafrica', 'cameroon'],
        },
        {
          id: '3',
          title: this.$t('general.Partners_with_Pea'),
          img_url:
            require('../assets/img/about/mapoure-1024x576-1-thegem-portfolio-masonry-14.png'),
          tag: ['bridgeafrica', 'media'],
        },
        {
          id: '4',

          title: 'BridgeAfrica.com Gives Digital Literacy Training (Demo)',
          img_url: require('../assets/img/about/000000-img15.png'),

          tag: ['cunsulting', 'media'],
        },
        {
          id: '5',
          title: this.$t('general.Cameroon_Gallery_Commercial'),
          img_url:
            require('../assets/img/about/caeroon-gallery-thegem-portfolio-masonry-16.jpg'),
          tag: ['cameroon', 'media'],
        },
      ],
    };
  },
  computed: {
    getResources() {
      if (this.selectedResource == 'all') {
        return this.resources;
      }
      return this.resources.filter(res => {
        if (res.tag.includes(this.selectedResource)) {
          return res;
        }
      });
    },
  },
  methods: {

    /**
     * this fuction is for change ressources 
     * @private
     */
    changeResource(resource) {
      this.selectedResource = resource;
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.balogo {
  width: 170px;
}
.nav-item.active .nav-link span {
  color: #e94a47 !important;
}
.about {
  margin-left: -6px;
  font-size: 16px;
  overflow-x: hidden;
}
.bg-black {
  background-color: #000000;
  color: #000000;
}
.color-white {
  color: #ffffff;
}
.bg-img {
  background-color: #010000;
  background-image: url('../assets/img/empower.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 95vh;
}
.header-img-text {
  font-size: 67px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: justify;
  align-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;
}
.header-img-text p {
  margin-bottom: -10px;
}
.bg-dark {
  background-color: #000000 !important;
}
.header-welcome {
  font-weight: 900;
}
.welcome-text {
  line-height: 25px;
  color: #000000;
}
.welcome-heading {
  font-size: 23px;
  color: #000000;
}
.color-black {
  color: #000000;
}
.functionality-heading {
  font-size: 45px;
  font-weight: bold;
}
.site-text {
  font-size: 32px;
  letter-spacing: 1.8px;
  font-weight: bold;
}
.link-text {
  line-height: 37px;
  font-size: 24px;
}
.functionality-icons {
  width: 58px;
  height: auto;
}
.functionality-div-headings {
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
}
.functionality-div {
  transition: all 0.5s;
  color: #000000;
  cursor: pointer;
}
.functionality-div.first {
  background-color: #f5f0f0;
  color: #000000;
}
.functionality-div.second {
  background-color: #e3ebec;
  color: #000000;
}

.functionality-div.first:hover {
  background-color: #ff5c93;
  color: #ffffff;
}
.functionality-div.second:hover {
  background-color: #07bfa5;
  color: #ffffff;
}

.functionality-div.third {
  background-color: #e3ebec;
  color: #000000;
}
.functionality-div.forth {
  background-color: #f5f0f0;
  color: #000000;
}

.functionality-div.third:hover {
  background-color: #5d727e;
  color: #ffffff;
}
.functionality-div.forth:hover {
  background-color: #98de23;
  color: #ffffff;
}
.font-14 {
  font-size: 14px;
}
.production-heading {
  line-height: 69px;
  font-size: 54px;
}
.production-text {
  font-size: 18px;
}
.bridge-america-video {
  max-width: 100%;
  width: 100%;
  margin: 0;
  line-height: 1;
  border: none;
  object-fit: cover;
}
.only-img {
  width: 100%;
  height: 712px;
  max-height: 712px;
}
.about-heading {
  font-size: 36px;
  font-weight: bold;
}
.video-desc {
  margin-top: 50px;
  line-height: 35px;
  font-size: 16px;
}
.black-img {
  width: 100%;
  height: 700px;
  object-fit: cover;
  margin-top: -8px;
}

.pl-md-0, .px-md-0 {
    
    margin-top: 14px;
}
.specific-heading {
  font-size: 24px;
  font-weight: 400;
}
.specific-main-div {
  min-height: 700px;
  padding-top: 250px;
}
.specific-main-div p {
  line-height: 30px;
}
.yellow-img img {
  width: 100%;
  height: 385px;
}
.biz-konnect-video {
  margin-top: 30px;
}
.biz-konnect-video iframe {
  min-height: 100vh;
}
.letter-spacing {
  letter-spacing: 0.05em;
  color: #332f2f;
}
.team-name {
  font-size: 24px;
}
.team-position {
  margin-top: 20px;
  font-size: 12px;
  font-weight: bold;
}
.team-div {
  transition: all 0.5s;
  cursor: pointer;
  border-bottom: 6px solid #e94a47 !important;
}
.team-div:hover {
  background-color: #cecece;
}
.team-img {
  height: 130px;
  width: 130px;
}
.sub-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.sub-div {
  width: 100%;
  min-height: 350px;
}
.sub-heading {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 10px;
}
.sub-input {
  background-color: #181828;
  border: none;
  color: #ffffff;
  outline: none;
  width: 84%;
  padding: 14px;
}
.sub-input:focus {
  background-color: #181828;
  border: none;
  color: #ffffff;
  outline: none;
  width: 84%;
  box-shadow: none;
}
.sub-btn {
  width: 84%;
  font-size: 19px;
  letter-spacing: 0.05em;
  font-weight: bold;
}
.contact-us-form {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/img/about/blocks-image-05-img20.jpg');
}
.contact-img {
  margin-top: 5.5rem;
  width: 35%;
}
.contact-heading {
  letter-spacing: 0.05em;
}
.contact-input {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 16px 18px;
  background-position: 98% 50%;
  cursor: auto;
  width: 100%;
}
.contact-input:focus {
  width: 100%;
}
.contact-input.name {
  background-image: url('../assets/icons/user.png');
}
.contact-input.email {
  background-image: url('../assets/icons/envelope.png');
}
.contact-input.website {
  background-image: url('../assets/icons/world-wide-web.png');
}
.contact-msg {
  width: 100%;
}
.contact-msg:focus {
  width: 100%;
}
.social-icons {
  background-image: url('../assets/img/about/shiny.jpg');
  width: 100%;
  min-height: 50vh;
}
.social-icon {
  font-size: 62px;
  text-decoration: none;
  color: #b6c5c8;
}
.blog-img-div h5 {
  color: #ffffff;
  text-align: center;
  position: absolute;
  bottom: 10px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blog-img-div {
  width: 100%;
  height: 250px;
  overflow: hidden;
  cursor: pointer;

  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blog-img-div img {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blog-img-div:hover img {
  opacity: 0.6;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.blog-img-div:hover h5 {
  top: 125px;
}
.blog-img-div .share-icon {
  font-size: 16px;
  color: #000000;
}
.blog-img-div:hover .share-icon {
  display: block;
}
.resource-div {
  transition: all 0.5s;
  cursor: pointer;
}
.resource-div:hover .resource-img-div .resource-img {
  opacity: 0.6;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.resource-div:hover .resource-title .resource-line {
  width: 50%;
}

.resource-img-div {
  height: 275px;
  width: 100%;
  overflow: hidden;
}
.resource-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.resource-title {
  padding: 30px 0;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
}
.resource-title p {
  text-align: center;
  font-size: 20px;
  letter-spacing: 0px;
  font-weight: 700;
  font-family: 'Arvo';
}
.resource-line {
  border: 1px solid black;
  width: 30%;
  margin: auto;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.mt-md-4, .my-md-4 {
    margin-top: 0rem !important;
}

@media only screen and (max-width: 660px) {
  .header-img-text {
    font-size: 27px;
    padding: 60px 40px;
  }
  .header-img-text p {
    margin-bottom: 0px;
  }
  .bg-img {
    height: 50vh;
  }
  .video-desc {
    margin-top: 0;
  }
  .welcome-heading {
    font-size: 18px;
    line-height: 1.3em;
  }
  .functionality-heading {
    font-size: 32px;
  }
  .site-text {
    font-size: 24px;
  }
  .link-text {
    line-height: 28px;
    font-size: 14px;
  }
  .functionality-flex {
    flex-direction: column;
  }
  .specific-main-div {
    min-height: 100px;
    padding-top: 50px;
  }
  .yellow-img img {
    width: 100%;
    height: 0;
  }
  .biz-konnect-video iframe {
    min-height: 40vh;
  }
  .contact-img {
    width: 85%;
  }
  .social-icon {
    font-size: 36px;
  }
  .footer-icon-text {
    left: 50%;
    top: 30px;
  }
  .footer-icons-div {
    width: 100%;
  }
  .tabs-resource {
    flex-direction: column;
  }
}
</style>
