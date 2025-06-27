<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                showFullDescription: false,
                business: {
                    name: "Business Name",
                    logo: "path/to/logo.png",
                    description: "This is a brief description of the business.",
                    likes: 120,
                    rating: 4.5,
                    country: "Country Name",
                    flagIcon: "path/to/flag-icon.png"
                }
            };
        },
        methods: {
            toggleReadMore() {
                this.showFullDescription = !this.showFullDescription;
            },
            getStarClass(star) {
                return star <= Math.floor(this.business.rating) ? 'filled' : 'empty';
            }
        }
    }
</script>

<style scoped>

</style>