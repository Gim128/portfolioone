<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
      elevation="5"
      elevate-on-scroll
    >
      
    <v-subheader>
      <h1 class="white--text">Portfolio<span class="pink--text">.in</span></h1>
      
    </v-subheader>

    <v-tabs center-active right background-color="transparent" active-class="active-tab">
      <v-tab href="#home">Home</v-tab>
      <v-tab>About</v-tab>
      <v-tab>Portfolio</v-tab>
      <v-tab>Blog</v-tab>
      <v-tab>Contact</v-tab>
    </v-tabs>

    <v-btn large color="primary" class="white--text ml-10">Email Us</v-btn>

    </v-app-bar>

    <v-main style="background-color: #F5F5F5;">
      <home-section />
      <AboutSection />
      <education />
      <ExperienceSection />
      <PortfolioView />
      <contact-us-view />
    </v-main>
  </v-app>
</template>

<script>
import AboutSection from './views/AboutSection.vue';
import ContactUsView from './views/ContactUsView.vue';
import Education from './views/Education.vue';
import ExperienceSection from './views/ExperienceSection.vue';
import HomeSection from './views/HomeSection.vue';
import PortfolioView from './views/PortfolioView.vue';


export default {
  name: 'App',

  components: {
    HomeSection,
    AboutSection,
    Education,
    ExperienceSection,
    PortfolioView,
    ContactUsView
},

  data: () => ({
   
  }),
};
</script>

<style scoped>
.v-tab.active-tab {
  color:gold
}

  .v-tab.active-tab::before{
    background-color: #4caf50;
  }

</style>
