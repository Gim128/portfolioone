<template>
  <section class="experience py-6">
    <v-img class="pa-10" gradient="to bootom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5)"
        sec="https://img.freepik.com/free-photo/light-bulb-with-drawing-graph_1232-2106.jpg?w=740&t=st=1672725302~exp=1672725902~hmac=ce463095445a31b7c4212932dc9cceb4c00e97325c15b35174da28f0a0c53d6d"
    >
        <v-container>
            <h4 class="display-2 text-center">Walkthrough</h4>
            <v-timeline>
                <v-timeline-item v-for="(exper, index) in experience" :key="index" :color="index % 2 === 0 ?'pink':'blue'">
                    <v-card class="rounded-xl">
                        <v-card-title :color="index % 2 === 0 ? 'pink':'blue'">
                            {{ exper.title }}
                        </v-card-title>
                        <v-card-text>
                            <b>{{ exper.date }}</b>
                            <b>@{{ exper.institute }}</b><br>
                            {{ exper.description }}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
    name: "ExperienceSection",

    data() {

        return{
            experience: [
            {
            title: 'User Experienced Designer',
            date: 'March 2022 - Present',
            institute: 'University of Moratuwa',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi velit eveniet laboriosam reiciendis voluptatem error provident temporibus rem quod nihil tempora, iure ea voluptatibus possimus dolores ipsum a quibusdam voluptate nesciunt pariatur.'               
        },
        {
            title: 'UI Designer',
            date: 'September 2022 - Present',
            institute: 'University of Dublin',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi velit eveniet laboriosam reiciendis voluptatem error provident temporibus rem quod nihil tempora, iure ea voluptatibus possimus dolores ipsum a quibusdam voluptate nesciunt pariatur.'
        },
        {
            title: 'Illustration Artist',
            date: 'December 2022 - Present',
            institute: 'University of Ohiyo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi velit eveniet laboriosam reiciendis voluptatem error provident temporibus rem quod nihil tempora, iure ea voluptatibus possimus dolores ipsum a quibusdam voluptate nesciunt pariatur.'
        },
        {
            title: 'UI Designer',
            date: 'September 2022 - Present',
            institute: 'University of Dublin',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi velit eveniet laboriosam reiciendis voluptatem error provident temporibus rem quod nihil tempora, iure ea voluptatibus possimus dolores ipsum a quibusdam voluptate nesciunt pariatur.'
        },
        {
            title: 'VFX Artist',
            date: 'January 2023 - Present',
            institute: 'University of Australia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi velit eveniet laboriosam reiciendis voluptatem error provident temporibus rem quod nihil tempora, iure ea voluptatibus possimus dolores ipsum a quibusdam voluptate nesciunt pariatur.'
        },
        {
            title: 'Associate Software Engineer',
            date: 'January 2023 - Present',
            institute: 'University of Australia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi velit eveniet laboriosam reiciendis voluptatem error provident temporibus rem quod nihil tempora, iure ea voluptatibus possimus dolores ipsum a quibusdam voluptate nesciunt pariatur.'
        },
    ]
        }

        
}
}
</script>

<style>

</style>