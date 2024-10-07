// 1

import { createRouter, createWebHistory } from 'vue-router'
import PostComments from '@/components/PostComments.vue'
import Posts from '@/components/Posts.vue'
import Login from '@/components/Login.vue'
import Profile from '@/components/Profile.vue'
import {useUserStore} from '../store/UserStore.js'

const routes = [
    {
        path: '/comments/:postId',
        component: PostComments
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true }  
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    const username = localStorage.getItem('username'); 

    if (to.meta.requiresAuth) {

        if (!username) {
            
            next({ path: '/login' });
        } else {
            
            if (userStore.usersState.length === 0) {
                await userStore.getUsers();  
            }

            
            const userExists = userStore.usersState.some(user => user.username === username);

            if (!userExists) {
                
                next({ path: '/login' });
            } else {
                
                next();
            }
        }
    } else {
        next(); 
    }
});

export default router