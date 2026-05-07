import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../views/Beranda.vue'
import URHistory from '../views/URHistory.vue'
import About from '../views/About.vue'
import Activity from '../views/Activity.vue'
import Structure from '../views/Structure.vue'
import Requirements from '../views/Requirements.vue'
import Business from '../views/Business.vue'
import Contact from '../views/Contact.vue'

const routes = [{
        path: '/',
        component: Beranda,
        meta: { title: 'Beranda' }
    },

    {
        path: '/ur-history',
        component: URHistory,
        meta: { title: 'UR History' }
    },
    {
        path: '/about',
        component: About,
        meta: { title: 'About' }
    },
    {
        path: '/activity',
        component: Activity,
        meta: { title: 'Activity' }
    },
    {
        path: '/structure',
        component: Structure,
        meta: { title: 'UR Structure' }
    },
    {
        path: '/requirements',
        component: Requirements,
        meta: { title: 'Joining Requirements' }
    },
    {
        path: '/business',
        component: Business,
        meta: { title: 'Business' }
    },
    {
        path: '/contact',
        component: Contact,
        meta: { title: 'Contact' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router