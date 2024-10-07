<template>
    <div>
        Profile
        <v-btn variant="outlined" @click="logout">
           exit
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        methods: {
            logout() {
                localStorage.removeItem('username');
                this.$router.push('/posts');
            }
        }
    }
</script>

<style>

</style>