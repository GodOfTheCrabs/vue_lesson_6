<template>
    <div style="width: 900px; margin: 0 auto">
        <v-btn variant="outlined" @click="showPostWithEvenId">
            {{ isEvenIdFilterActive ? 'Show All Posts' : 'Show Posts with even id' }}
        </v-btn>
        <v-row>
            <v-col cols="12" md="4" v-for="post in getLimitItems()" :key="post.id">
                <Post :post="post"/>
            </v-col>  
        </v-row>
        <div style="margin-top: 25px;">
            <v-btn 
                v-for="page in totalPage()"
                :key="page" 
                @click="changePage(page)"
                variant="outlined"
                style="margin-left: 5px;"
                :class="{ active: currentPage === page }"
            >
                {{page}}
            </v-btn >
        </div>
    </div>
</template>

<script>   
    import Post from '../components/Post.vue';
    import {usePostStore} from '../store/PostStore.js'
    import {mapActions, mapState} from 'pinia'

    export default {
        name: 'Task9',
        components: {
            Post
        },
        data() {
            return {
                currentPage: 1,
                itemLimit: 9,
                isEvenIdFilterActive: false
            }
        },
        methods: {
            ...mapActions(usePostStore, ['getPosts']),
            totalPage() {
                return Math.ceil(this.posts.length / this.itemLimit)
            },
            getLimitItems() {
                const start = (this.currentPage - 1) * this.itemLimit
                const end = start + this.itemLimit
                return this.filteredPosts.slice(start, end)
            },
            changePage(page) {
                this.currentPage = page
            },
            showPostWithEvenId() {
                this.isEvenIdFilterActive = !this.isEvenIdFilterActive;
            }
        },
        computed: {
            ...mapState(usePostStore, ['posts', 'postsWithEvenId']),
            filteredPosts() {
                return this.isEvenIdFilterActive ? this.postsWithEvenId : this.posts;
            }
        },
        mounted() {
            this.getPosts()
        }
    }

</script>

<style lang="css" scoped>
    .active {
        background-color: #007bff;
        color: white;
    }
</style>