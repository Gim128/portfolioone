import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeSection from 'portfolioone/src/views/HomeSection'

Vue.use(VueRouter)

const routes= [
    // {
    //     path: '/',
    //     name: 'HomeSection',
    //     component: HomeSection
    // },
    {
        path: '/about',
        name: 'AboutSection',
        component: () => import('../views/AboutSection')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router