<template>
  <section class="contact-us pt-10">
    <v-img class="pt-10" gradient="to botton, rgb(166 199 156), rgb(227 227 227 / 86%)" src="https://img.freepik.com/free-photo/business-people-casual-meeting_53876-101882.jpg?w=1380&t=st=1672744019~exp=1672744619~hmac=e5d88eeecd1bb12402246cfcb9a8f5944ba680968ee29132e65b71ee1b90c251">
        <v-container>
            <h3>Hello! I'm a Graphic & Web Designer, based in SriLanka. Currenty work as a Freelancer. You can see my works on my portfolio & GitHub</h3>
            <v-divider />
            <br>
            <v-row>
                <v-col cols="12" lg="6">
                    <v-card-title>Drop a Line Here..</v-card-title>
                    <v-form>
                        <v-text-feild label="Your Name" />
                        <v-text-feild label="Your Email" />
                        <v-text-feild label="Your Subject" />
                        <v-text-feild label="Your Message" />
                        <v-btn large color="primary" class="white--text">Send Message</v-btn>
                    </v-form>
                </v-col>

                <v-col cols="12" lg="3" offset="2">
                    <v-card-text>
                        Contact Me
                    </v-card-text>
                    <v-card-text>
                        456 Dons Square, California <br>
                        +94 76 8 616 628 <br>
                        +94 71 4 821 621 <br>
                        gimhanpabasara4@gmail.com <br>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn large elevation="3" color="primary" class="white--text mt-10 px-10 py-5">
                            Download Submit SHeet
                        </v-btn>
                    </v-card-actions>

                </v-col>

            </v-row>
        </v-container>

        <v-footer class="mt-4">
            <v-col
                class="text-center"
                col="12"
            >

            <strong>
                Copyright @ {{ new Date().getFullYear() }} All Rights Reserved | Made by 
                <a href="" class="blue--text">Leo Munasinghe</a>
            </strong>

            </v-col>
        </v-footer>

    </v-img>
  </section>
</template>

<script>
export default {
    name: "ContactUsView",
}
</script>

<style>

</style>