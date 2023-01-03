<template>
  <section class="portfolio">
    <h3 class="display-2 text-center">Portfolio</h3>
    <v-slide-group
        class="pa-4"
        active-class="success"
        show-arrows
    >

    <v-slide-item v-for="(slider, index) in sliders" :key="index">
        <v-card height="250" class="mx-2">
            <img height="100%" width="100%" :src="slider" alt="">
        </v-card>
    </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script>
export default {
    name: "PortfolioView",

    data() {
        return {
            sliders: [
                'https://img.freepik.com/free-photo/bright-blue-icons-cup-coffee-laptop_1134-63.jpg?w=1060&t=st=1672742405~exp=1672743005~hmac=ae5e14324ef93290f8ef7857b6d39bd15cbeba7c7063a12062df3516199f976b',
                'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=1060&t=st=1672742316~exp=1672742916~hmac=0d68b71fe17dddc6f1d156b31f5c04d0cb6b6b19401c630016b22a38b3b838e9',
                'https://img.freepik.com/free-photo/technology-app-development-wireless-e-commerce_53876-124044.jpg?w=1060&t=st=1672742451~exp=1672743051~hmac=68493679d0204576991f2622022165b73311353f63299cb581a5180434c3d574',
                'https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?w=1060&t=st=1672742493~exp=1672743093~hmac=d1bea25156744df8f5aa6ebc844b2539d98b44bb6a2b4b3520c197de80443888',
                'https://img.freepik.com/free-photo/information-technology-coding-connection-programming_53876-125183.jpg?w=740&t=st=1672742549~exp=1672743149~hmac=e6038cb1594426346d2c6a07b383f627e6f15b57e0355658fdb8bdc89e3d6cf1',
            ]
        }
    }

}
</script>

<style>

</style>