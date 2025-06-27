<template>
    <div class="section-row">
        <div class="col-3">
            <h2 class="section-title">About Bridge Africa</h2>
        </div>
        <div class="col-10">
            <div class="slider-container">
                <img :src="images[currentImage]" alt="" class="slider-image" />
                <!-- Desktop navigation buttons -->
                <button
                  v-if="images.length > 1"
                  class="slider-btn slider-btn-left"
                  @click="prevImage"
                >
                  &#8592;
                </button>
                <button
                  v-if="images.length > 1"
                  class="slider-btn slider-btn-right"
                  @click="nextImage"
                >
                  &#8594;
                </button>
                <!-- Mobile dots -->
                <div class="slider-dots" v-if="images.length > 1">
                  <span
                    v-for="(img, idx) in images"
                    :key="idx"
                    :class="['slider-dot', { active: idx === currentImage }]"
                    @click="goToImage(idx)"
                  ></span>
                </div>
            </div>
            <h1 class="section-heading">Bio</h1>
            <p class="section-description">
                Bridge Africa is a community development project that aims to empower local artisans and promote sustainable practices across the continent. We believe in the power of collaboration and innovation to create positive change.
                Lorem ipsum dolor sit amet consectetur. Vel nunc sit morbi sagittis lectus. Vel aenean amet turpis odio elementum. Cras integer eget ultrices sagittis sit aliquam facilisi. Convallis et sagittis maecenas elit condimentum pretium.
            </p>

            <h1 class="section-heading">Vision</h1>
            <p class="section-description">
                Our vision is to create a thriving ecosystem where local artisans can showcase their talents and connect with a global audience. We strive to foster creativity, sustainability, and economic growth in every community we touch.
            </p>
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
                require("../../../../../assets/img/updates/about.png"),
            ],
            currentImage: 0,
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
        },
    },
};
</script>

<style scoped>
.section-row{
    display: flex;
    flex-direction: row;
    margin-left: -15%;
    margin-top: 20px;
}
.section-title{
    font-size: 24px;
    font-weight: bold;
    color: #000;
}
.section-heading {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-top: 40px;
}
.section-description {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
    line-height: 1.5;
}

/* Slider styles */
.slider-container {
    position: relative;
    width: 100%;
    margin-bottom: 24px;
}
.slider-image {
    width: 100%;
    border-radius: 10px;
    display: block;
}
.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.8);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 22px;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}
.slider-btn-left {
    left: 10px;
}
.slider-btn-right {
    right: 10px;
}
.slider-dots {
    display: none;
    justify-content: center;
    margin-top: 12px;
    gap: 8px;
}
.slider-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    display: inline-block;
    cursor: pointer;
    transition: background 0.2s;
}
.slider-dot.active {
    background: #e75c18;
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
    .section-title{
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
}
</style>