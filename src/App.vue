<template>
  <div>
    <v-tabs
      bg-color="primary"
      class="v-tabs"
    >
      <router-link to="/posts" class="router-link">
        <v-tab value="one">Posts</v-tab>
      </router-link>
      <router-link to="/login" style="margin-left: 20px;" class="router-link">
        <v-tab value="two">Login</v-tab>
      </router-link>
      <router-link to="/profile" style="margin-left: 20px;" class="router-link" >
        <v-tab value="three">Profile</v-tab>
      </router-link>
    </v-tabs>
    <RouterView />
  </div>
</template>

<script>
import Posts from './components/Posts.vue'

export default {
  name: 'App',
  components: {
    Posts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link {
  color: white;
}
.v-tabs {
  width: 70%;
  margin: 0 auto;
}
</style>
