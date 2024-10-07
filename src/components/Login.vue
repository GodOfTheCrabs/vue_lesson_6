<template>
    <div style="width: 400px; margin: 50px auto;">
        <form @submit.prevent="loginUser">
            <div class="form-group" style="margin-bottom: 25px; text-align: left  ;" >
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" placeholder="Enter username" v-model="username">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ProfilePage',
        data() {
            return {
                username: ''
            }
        },
        methods: {
            loginUser() {
                localStorage.setItem('username', this.username)
                this.$router.push('/profile');
            }
        }
    }
</script>

<style>

</style>