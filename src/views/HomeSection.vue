<template>
  <section class="intro-section" id="home">
    <v-row class="align-center px-10" style="height: 690px; max-height: 690px;">
      <v-col lg="6" cols="6" class="p-6 font-weight-bold py-16">
        <h2 class="display-3">
          Leo Labs Holdings
        </h2>

        <v-subheader>Hello, We are LeoLabs Holdings. A Team of Software Developers.</v-subheader>
        <br>
        <br>
        <v-btn large elevation="5" color="primary" class="white--text mt-10 px-10 py-5">Hire Us</v-btn>
        <v-btn large elevation="5" color="primary" class="white--text mt-10 px-10 py-5">Contact</v-btn>

        <v-row class="mt-16">
          <v-chip class="px-4 ma-3" color="primary">
            <v-icon left size="20">mdi-facebook</v-icon>
            Facebook
          </v-chip>

          <v-chip class="px-4 ma-3 white--text" color="#01ff56">
            <v-icon left size="20">mdi-whatsapp</v-icon>
            Whatsapp
          </v-chip>

          <v-chip class="px-4 ma-3" color="info">
            <v-icon left size="20">mdi-linkedin</v-icon>
            Linkedin
          </v-chip>

          <v-chip class="px-4 ma-3" color="dark">
            <v-icon>mdi-github</v-icon>
            GitHub
          </v-chip>
        </v-row>
      </v-col>

      <v-col lg="6" cols="6" class="hero-image">
        <img src="@/assets/pic1.jpg" alt="Something">
      </v-col>

    </v-row>
  </section>
</template>

<script>

export default {
  components: { 

   },

name: "HomeSection",

}
</script>

<style scoped>
  .hero-image{
    height: 85px;
    padding-bottom: 679px;
  }
</style>