<template>
  <div class="section-row">
    <div class="col-3">
      <h2 class="section-title">Reviews</h2>
    </div>
    <div class="col-10">
      <h1 class="section-heading">
        Kaneka Taylor <span class="heading-date">on 19 May, 2025</span>
      </h1>
      <img
        class="review-img"
        src="../../../../../assets/img/updates/reviews.png"
        alt=""
      />
      <img
        src="../../../../../assets/img/updates/5star.png"
        alt="5 star"
        class="stars-5"
      />
      <p class="section-description">
        Bridge Africa is a community development project that aims to empower
        local artisans and promote sustainable practices across the continent.
        We believe in the power of collaboration and innovation to create
        positive change. Lorem ipsum dolor sit amet consectetur. Vel nunc sit
        morbi sagittis lectus. Vel aenean amet turpis odio elementum. Cras
        integer eget ultrices sagittis sit aliquam facilisi. Convallis et
        sagittis maecenas elit condimentum pretium.
      </p>

      <div class="review-sub">
        <img src="../../../../../assets/img/updates/review-sub.png" alt="" />
        <p class="review-sub-description">
          Waterproof Elastic Chair Cover for Dining Room Kitchen Wedding Hotel
          Banquet Restaurant Anti - dirty Seat Cover Housse De Chaise
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      images: [
        require("../../../../../assets/img/updates/about.png"),
        require("../../../../../assets/img/updates/about.png")
      ],
      currentImage: 0
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    goToImage(idx) {
      this.currentImage = idx;
    }
  }
};
</script>

<style scoped>
.col-10 {
  display: flex;
  flex-direction: column;
}
.section-row {
  display: flex;
  flex-direction: row;
  margin-left: -22%;
  margin-top: 20px;
}
.review-sub {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  width: 80%;
}

.review-sub-description {
  font-size: 15px;
  color: black;
  line-height: 150%;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}
.review-img {
  margin: 10px 0;
  width: 300px;
  height: 300px;
}
.stars-5 {
  width: 120px;
}
.section-heading {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-top: 5px;
  text-decoration: underline;
}
.heading-date {
  color: #666;
  margin-left: 10px;
  font-weight: normal;
  text-decoration: none;
}
.section-description {
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  line-height: 1.5;
}

/* Responsive: show dots on mobile, hide arrows */
@media (max-width: 768px) {
  .section-row {
    flex-direction: column;
    margin-left: 0;
  }
  .col-3,
  .col-10 {
    width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 100% !important;
    box-sizing: border-box;
  }
  .section-title {
    text-align: start;
    margin-top: 20px;
  }
  .slider-btn {
    display: none;
  }
  .slider-dots {
    display: flex;
  }
  .section-description {
    text-align: justify;
  }
  .review-sub-description {
    width: 100%;
    font-size: 14px;
    line-height: 130%;
  }
  .review-sub {
    width: 100%;
    gap: 15px;
  }
  .stars-5 {
    margin: 10px 0;
  }
}
</style>
