<template>
    <div style="width: 900px; margin: 0 auto">
        <p class="h4">{{ $route.meta.sharedData }}</p>
        <v-row>
            <v-col cols="12" md="4" v-for="comment in getLimitItems()" :key="comment.id">
                <Comment :comment="comment"/>
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
    import Comment from '../components/Comment.vue';
    import {usePostStore} from '../store/PostStore.js'
    import {mapActions, mapState} from 'pinia'

    export default {
        name: 'PostComments',
        components: {
            Comment
        },
        data() {
            return {
                currentPage: 1,
                itemLimit: 3
            }
        },
        methods: {
            ...mapActions(usePostStore, ["getCommentsForPost"]),
            totalPage() {
                return Math.ceil(this.comments.length / this.itemLimit)
            },
            getLimitItems() {
                const start = (this.currentPage - 1) * this.itemLimit
                const end = start + this.itemLimit
                return this.comments.slice(start, end)
            },
            changePage(page) {
                this.currentPage = page
            },
            async getComments() {
                await this.getCommentsForPost(this.$route.params.postId);
            }
        },
        computed: {
            ...mapState(usePostStore, ['comments'])
        },
        mounted() {
            this.getComments()
        }
    }

</script>

<style lang="css" scoped>
    .active {
        background-color: #007bff;
        color: white;
    }
</style>