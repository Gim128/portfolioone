<template>
  <section class="about-us" id="about">
    <v-img class="pa-10" height="400" gradient="to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5)" src="https://img.freepik.com/free-photo/web-design_53876-167070.jpg?w=1060&t=st=1672721978~exp=1672722578~hmac=6edf461ca403918ffe16e6a544bf6906b4c42aa023a60285853bd50cdeba209e">
   <v-row justify="center" class="align-center">
    <v-col lg="6" cols="6">
      <v-card class="text-center pa-6 rounded-lg" color="#e1e0e0c9" elevation="6"> 
        <v-card-subtitle class="green--text">About Our Organization</v-card-subtitle>
        <h2 class="display-1 font-weight-regular">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum corrupti non fuga aut est dolorem amet?
        </h2>

        <v-btn large elevation="5" color="primary" class="white--text mt-10 py-5">
          View All UI's
          <v-icon>mdi-pencil-ruler</v-icon>
        </v-btn>
      </v-card>
    </v-col>

    <v-col lg="6" cols="6">
      <v-card class="text-center pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
      <div class="py-1" v-for="(item,index) in items" :key="index">
        <label>{{ item.title }}</label>
        <v-progress-linear
        :color="item.color"
        height="10"
        :value="item.value"
        >

        </v-progress-linear>
        
      </div>
    </v-card>
    </v-col>

   </v-row>
  </v-img>
  </section>
</template>

<script>

export default {
    name:"AboutSection",

    data: () => ({
      drawer: null,
      items: [
        {title: 'HTML', value: 100, color: 'light-blue'},
        {title: 'Vue', value: 100, color: 'deep-orange'},
        {title: 'React', value: 95, color: 'light-green'},
        {title: 'React-Native', value: 96, color: 'blue'},
        {title: 'UI/UX', value: 100, color: 'red'},
        ],
    })
}
</script>

<style scoped> 

</style>