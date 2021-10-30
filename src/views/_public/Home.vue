<template>
  <div>
    <HomeBrand />
    <section class="section gray--section flex-centered">
      <div class="elt">
        <h3 class="s--title">Find Business & Institutions</h3>
        <div class="flex-centered fbi--container">
          <ImageCard
            v-for="elt in institutions"
            :key="elt.id"
            :img="elt.img"
            :title="elt.title"
            class="i-card"
          />
        </div>
      </div>
    </section>
    <section class="section flex-centered">
      <div class="elt card--slide">
        <VideoCard
          v-for="elt in videoCards"
          :key="elt.id"
          :title="elt.title"
          :subtitle="elt.subtitle"
          :video="elt.video"
          :videoType="elt.videoType"
          class="v-card"
        />
      </div>
    </section>
    <section class="section gray--section flex-centered">
      <div class="elt">
        <h3 class="s--title">About Bridge Africa</h3>
        <div class="flex-centered about--container">
          <div class="ac--left">
            <p>
              Bridge Africa is a Cameroon-based tech-start up on a mission to
              empower economic actors in Africa with digital identities. Through
              our 3-in-1 bridgeafrica.com platform, we integrate SMEs into the
              digital economy through website creation, database integration,
              and networking. Currently in its 3rd iteration, we are rebuilding
              our platform, to turn it into a 4-in-1 tool by adding an online
              market place that will enable businesses to directly sell from the
              platform.
            </p>
            <span
              >Empowering SMIs and Consumers in Africa With Digital
              Identities</span
            >
          </div>
          <div class="ac--right">
            <img src="@/assets/_public/imgs/about.jpg" />
          </div>
        </div>
      </div>
    </section>
    <section class="section dark--section flex-centered">
      <div class="elt">
        <h3 class="s--title center">Our Achievements</h3>
        <div class="flex-centered achievement--container">
          <div class="oa--left">
            <div class="oal--elt">
              <h4>WSIS First Prize Winner In 2016</h4>
              <p>
                Our platform was voted application of the year by the
                International Telecommunication Union-WSIS Prize, for our
                platform’s contribution in the realisation of SDG 1 and 8
              </p>
            </div>
            <div class="oal--elt">
              <h4>Over 7,000 users</h4>
              <p>
                We currently have a userbase of over 7,000 businesses and
                customers from all sectors of the economic spectrum
              </p>
            </div>
          </div>
          <div class="oa--midd">
            <img src="@/assets/_public/imgs/achievement1.png" />
            <img src="@/assets/_public/imgs/achievement2.jpg" />
            <img src="@/assets/_public/imgs/achievement3.jpg" />
            <img src="@/assets/_public/imgs/achievement4.png" />
          </div>
          <div class="oa--right">
            <div class="oal--elt">
              <h4>Partnered with IFAD to empower agricultural entrepreneurs</h4>
              <p>
                Our partnership with IFAD enabled us to digitalise over 750
                agricultural entrepreneurs in Cameroon
              </p>
            </div>
            <div class="oal--elt">
              <p>
                Our weekly Biz Konnect TV show, running for more than 1 year now
                and aired on Cameroon’s national television channel (CRTV),
                promotes SMEs that are on bridgeafrica.com, and is an ideal
                vitrine to give nation-wide visibility to entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section gray--section flex-centered">
      <div class="elt">
        <h3 class="s--title">Our key functionnalities</h3>
        <div class="flex-centered func--container">
          <IconCard
            v-for="elt in functionnalities"
            :key="elt.id"
            :title="elt.title"
            :content="elt.content"
            :img="elt.img"
            class="icon-card"
          />
        </div>
      </div>
    </section>
    <section class="section flex-centered">
      <div class="elt">
        <h3 class="s--title">The Team</h3>
        <div class="flex-centered team--container">
          <TeamCard
            v-for="elt in team"
            :key="elt.id"
            :title="elt.title"
            :fullName="elt.fullName"
            :img="elt.img"
            :social="elt.social"
            class="team-card"
          />
        </div>
      </div>
    </section>
    <section class="section contact--section flex-centered">
      <div class="elt">
        <h3 class="s--title center">Contact Us</h3>
        <form class="contact--container">
          <div class="f--bloc1 flex-centered">
            <div class="ipt--grp">
              <label>Your Name</label>
              <input type="text" />
            </div>
            <div class="ipt--grp">
              <label>Your Email</label>
              <input type="email" />
            </div>
            <div class="ipt--grp">
              <label>Website</label>
              <input type="website" />
            </div>
          </div>
          <div class="f--bloc2">
            <label>Message</label>
            <textarea rows="6"></textarea>
          </div>
          <button class="f--btn">Send Message</button>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import HomeBrand from "@/components/_public/HomeBrand.vue";
import Footer from "@/components/_public/Footer.vue";
import ImageCard from "@/components/_public/ui-ux/ImageCard.vue";
import VideoCard from "@/components/_public/ui-ux/VideoCard.vue";
import IconCard from "@/components/_public/ui-ux/IconCard.vue";
import TeamCard from "@/components/_public/ui-ux/TeamCard.vue";

export default {
  components: { HomeBrand, Footer, ImageCard, VideoCard, IconCard, TeamCard },
  data() {
    return {
      institutions: [
        { img: "b1.jpg", title: "Agriculture" },
        { img: "b2.jpeg", title: "Mayor councils" },
        { img: "b3.png", title: "Restaurants" },
        { img: "b4.jpg", title: "Pharmacies" },
      ],

      videoCards: [
        {
          title: "Business Identities and Online Marketplace",
          subtitle:
            "We help businesses to easily create their websites, buy and sell online through our online marketplace",
          video: "identity.mp4",
          videoType: "video/mp4",
        },
        {
          title: "Online Business Databases",
          subtitle:
            "Our online business directory helps to make businesses visible and locatable, and enables consumers to search for and compare product prices",
          video: "search.mp4",
          videoType: "video/mp4",
        },
        {
          title: "Community Engagement",
          subtitle:
            "We allow businesses and consumers to follow one another, receive notifications and send direct messages",
          video: "messaging.mp4",
          videoType: "video/mp4",
        },
        {
          title: "Online and Offline",
          subtitle:
            "For businesses and consumers in zones of low or no internet penetration, our platform works offline via SMS and USSD",
          video: "offline.mp4",
          videoType: "video/mp4",
        },
      ],

      functionnalities: [
        {
          img: "func1.png",
          title: "Website creation",
          content:
            "We help businesses and institutions easily create websites in under 5 minutes, with little or no technical expertise required",
        },
        {
          img: "func2.png",
          title: "A localised Business Directory",
          content:
            "Our localised business directory helps to make businesses visible and locatable, and enables consumers to search for and compare product prices. Customers can search based on location, category, price.",
        },
        {
          img: "func3.png",
          title: "Community Engagement",
          content:
            "Our platform provides community engagement functionalities enabling businesses and consumers to follow one another, receive notifications and send direct messages",
        },
        {
          img: "func4.png",
          title: "Offline Access",
          content:
            "For businesses and consumers in zones of low or no internet penetration, our platform works offline via SMS and soon by USSD",
        },
      ],

      team: [
        {
          img: "team1.png",
          fullName: "Lorenzo Tencati",
          title: "Advisory board to CEO",
          social: { facebook: "#", linkedin: "#", twitter: "#" },
        },
        {
          img: "team2.png",
          fullName: "Ittia Bruno",
          title: "CEO",
          social: { facebook: "#", linkedin: "#", twitter: "#" },
        },
        {
          img: "team3.png",
          fullName: "Lengweh Blaise",
          title: "CTO",
          social: { facebook: "#", linkedin: "#", twitter: "#" },
        },
        {
          img: "team4.jpg",
          fullName: "Arlette Moussang",
          title: "Editor",
          social: { facebook: "#", linkedin: "#", twitter: "#" },
        },
        {
          img: "team5.jpg",
          fullName: "Abre Eunice",
          title: "Administrative Assistant",
          social: { facebook: "#", linkedin: "#", twitter: "#" },
        },
        {
          img: "team6.png",
          fullName: "Maxime Meffo",
          title: "Co-founder",
          social: { facebook: "#", linkedin: "#", twitter: "#" },
        },
      ],
    };
  },
};
</script>

<style src="@/assets/_public/scss/main.scss" lang="scss"></style>
<style lang="scss">
$pColor: #e75c18;
$pColorTa: #e75c1899;

.fbi--container {
  justify-content: space-between;
  padding-top: 1rem;

  .i-card {
    margin-right: 1.4rem;
    width: 25%;

    &:last-child {
      margin-right: 0;
    }
  }
}

.card--slide {
  overflow: hidden;
  white-space: nowrap;
  padding: 0;

  .v-card {
    display: inline-block;
    width: 100%;
    margin: 0;
  }
}

.about--container {
  .ac--left {
    width: 60%;
    margin-right: 5%;

    p {
      font-size: 1.1rem;
      line-height: 2.2rem;
      color: #000 !important;
      font-family: "Josefin-slab";
    }

    span {
      display: inline-block;
      margin-top: 1.3rem;
      width: 60%;
      padding: 1.2rem 2rem;
      background-color: $pColorTa;
      color: #fff;
      border-radius: 0.6rem 0.1rem;
      font-family: "Josefin-slab";
    }
  }

  .ac--right {
    width: 60%;
    border: solid 1.8rem #fff;
    border-radius: 0.8rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
}

.achievement--container {
  color: #fff;
  justify-content: space-between;

  .oa--left,
  .oa--right {
    width: 25%;

    h4 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      font-family: "Josefin-slab";
    }
  }

  .oa--left {
    text-align: right;
  }

  .oa--midd {
    width: 50%;
    margin: 0 2.5%;
    display: flex;
    flex-wrap: wrap;

    img {
      display: inline-block;
      width: 48%;
      margin: 1%;
      border: solid 6px #fff;
    }
  }
}

.func--container {
  .icon-card {
    width: 25%;
    margin-right: 2%;

    &:last-child {
      margin-right: 0;
    }
  }
}

.team--container {
  flex-wrap: wrap;
  justify-content: space-between;
  .team-card {
    width: 31.5%;
    margin-right: 2%;
    margin-bottom: 3rem;

    &:last-child,
    &:nth-child(3) {
      margin-right: 0;
    }
  }
}

.contact--container {
  width: 100%;
  color: #fff;
  margin-top: 3rem;

  input, textarea {
    background-color: #181828;
    border: none;
    font-family: "Josefin-slab";
    color: #ffffff99 !important;
    padding: 1rem .8rem;
    border-radius: .4rem;

    &:focus {
      outline: none !important;
    }
  }

  .f--bloc1 {
    justify-content: space-between;

    .ipt--grp {
      display: flex;
      flex-direction: column;
      width: 32%;
    }
  }

  .f--bloc2 {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }

  .f--btn {
    padding: 1rem .8rem;
    border: none;
    background-color: $pColor;
    border-radius: .6rem .2rem;
    color: #fff;
    

    &:hover {
      filter: grayscale(.6)
    }
  }
}
</style>
